const router = require('express').Router();
const { Role } = require('../db/models');

router.get('/', async (req, res) => {
  const roles = await Role.findAll();
  res.json({ roles });
});







module.exports = router;
