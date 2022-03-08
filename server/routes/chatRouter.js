const express = require('express');

const router = express.Router();
// const { Op } = require('sequelize');
const { Chat, User } = require('../db/models');

router.post('/message', async (req, res) => {
  try {
    const {message, workerId} = req.body
    const newMessage = await Chat.create({creatorId: req.session.userId,respondentId:workerId,postId:workerId, messages: message});
    res.json(newMessage);
  } catch(err) {
res.status(500)
  }

});

router.get('/userId', async (req, res) => {
  try {
    const user = await User.findByPk(+req.session.userId);
    res.json(user);
  } catch(err) {
res.status(500)
  }

});

module.exports = router;
