const express = require('express');

const router = express.Router();
const { Post,User } = require('../db/models');
const upload = require('../middlewares/middlewares');

router.put('/:id', async (req, res) => {
  try {
    const worker = await User.update({
      status: true,
    }, 
    { where: { id: req.params.id } });
    res.json({ worker });
  } catch (err) {
   console.error(err)
    res.sendStatus(500);
  }
});




router.put('/post/:id', async (req, res) => {
  try {
    const post = await Post.update({
      status: true,
    }, { where: { id: req.params.id } });
    res.json({ post });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
