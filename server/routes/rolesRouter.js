const router = require('express').Router();
const { Role } = require('../db/models');
const { Skill } = require('../db/models');
// const { User } = require('../db/models');
router.get('/', async (req, res) => {
  const roles = await Role.findAll();
  res.json({ roles });
});

router.get('/skill', async (req, res) => {
  const skill = await Skill.findAll();
  res.json({ skill });
});

module.exports = router;
