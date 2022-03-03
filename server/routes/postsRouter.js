const express = require('express');

const router = express.Router();
// const { Op } = require('sequelize');
const { Post } = require('../db/models');
const upload = require('../middlewares/middlewares');

const { Category } = require('../db/models');

router.get('/', async (req, res) => {
  const category = await Category.findAll();
  res.json({ category });
});

router.get('/:page', async (req, res) => {
  console.log('req', req.params);
  const pageAsNumber = Number.parseInt(req.params.page);

  let page = 0;
  if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
    page = pageAsNumber;
  }

  const size = 3;
  const postsWidhCount = await Post.findAndCountAll({
    limit: size,
    offset: page * size,
    order: [
      ['id', 'DESC'],
    ],
  });
  res.send({
    content: postsWidhCount.rows,
    totalPages: Math.ceil(postsWidhCount.count / Number.parseInt(size)),
  });
});

router.post('/', upload.single('file'), async (req, res) => {
  // console.log(req.body);

  try {
    const post = await Post.create({
      status: false,
      title: req.body.title,
      body: req.body.body,
      categoryId: req.body.categoryId,
      userId: req.session.userId,
      img: `/img/${req?.file?.originalname}`,
    });
    res.json({ post });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.put('/:id', upload.single('file'), async (req, res) => {
  // console.log(req.body);

  try {
    const post = await Post.update({
      status: false,
      title: req.body.title,
      body: req.body.body,
      categoryId: req.body.categoryId,
      userId: req.session.userId,
      img: `/img/${req.file.originalname}`,
    }, { where: { id: req.params.id } });
    res.json({ post });
  } catch (err) {
    res.sendStatus(500);
  }
});

router.delete('/:id', async (req, res) => {
  await Post.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

router.get('/detailed/:id', async (req, res) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.id } });
    res.json({ post });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
