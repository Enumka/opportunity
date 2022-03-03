const express = require('express');
const sha256 = require('sha256');

const router = express.Router();

const { User } = require('../db/models');

router.post('/check', (req, res) => {
  if (req.session.user) {
    return res.json({ user: req.session.user });
  }
  res.sendStatus(401);
});

router.post('/signup', async (req, res) => {
  const { login, email, roleId } = req.body;
  const password = sha256(req.body.password);

  try {
    if (login && email && req.body.password) {
      const user = await User.create({
        login, password, email, roleId,
      });

      req.session.userId = user.id;
      req.session.userLogin = user.name;
      req.session.userEmail = user.email;
      req.session.userRoleId = user.roleId;
      req.session.userPassword = user.password;
      res.json({ user });
    } else {
      res.sendStatus(500);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.post('/signin', async (req, res) => {
  const { email } = req.body;
  const password = sha256(req.body.password);

  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      if (user.password == password) {
        req.session.userId = user.id;
        req.session.userLogin = user.name;
        req.session.userRoleId = user.roleId;
        req.session.userEmail = user.email;
        res.json({ user });
      } else {
        res.sendStatus(400);
      }
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('login').sendStatus(200);
});

module.exports = router;
