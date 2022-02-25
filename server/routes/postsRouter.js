const express = require('express');

const router = express.Router();
// const { Op } = require('sequelize');
const { Post } = require('../db/models');
const upload = require('../middlewares/middlewares');

router.get('/:page', async (req, res) => {
  const pageAsNumber = Number.parseInt(req.params.page);
  let page = 0;
  if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
    page = pageAsNumber;
  }

  const size = 3;
  const postsWithCount = await Post.findAndCountAll({
    limit: size,
    offset: page * size,
    order: [
      'id', 'DESC',
    ],
  });
  console.log(postsWithCount);

  res.send({
    conten: postsWithCount.rows,
    totalPages: Math.ceil(postsWithCount.count / Number.parseInt(size)),

  });
});

router.post('/upload', /* upload.single('file'), */ async (req, res) => {
  console.log(req.body);

  try {
    const post = await Post.create({
      status: false,
      title: req.body.title,
      body: req.body.body,
      categoryId: req.body.category,
      userId: req.session.userId,
      // img: `/img/${req.file.originalname}`,
    });
    res.json({ post });
  } catch (err) {
    res.sendStatus(500);
  }
});

router.get('/detal/:id', async (req, res) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.id } });
    res.json({ post });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.delete('/:id', async (req, res) => {
  await Post.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

module.exports = router;
