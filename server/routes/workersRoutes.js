const express = require('express');

const router = express.Router();
const { User } = require('../db/models');
const upload = require('../middlewares/middlewares');

router.get('/:page', async (req, res) => {
  const pageAsNumber = Number.parseInt(req.params.page);
  let page = 0;
  if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
    page = pageAsNumber;
  }

  const size = 3;
  const workersWithCount = await User.findAndCountAll({
    where: { status: true },
    limit: size,
    offset: page * size,
    order: [
      ['id', 'DESC'],
    ],
  });

  res.send({
    content: workersWithCount.rows,
    totalPages: Math.ceil(workersWithCount.count / Number.parseInt(size)),

  });
});

router.put('/:id', upload.single('file'), async (req, res) => {
  console.log('ppppppppppppppppppppppp', req.body);

  const {
    login, email, firstName, lastName, telephone, body,
  } = req.body;

  try {
    const worker = await User.update({
      // login,
      // email,
      firstName,
      lastName,
      telephone,
      body,
      status: true,
      img: `/img/${req.file.originalname}`,
    }, { where: { id: req.params.id } });
    res.json({ worker });
  } catch (err) {
    res.sendStatus(500);
  }
});

router.get('/lk/:id', async (req, res) => {
  const worker = await User.findOne({ where: { id: req.params.id } });
  res.json({ worker });
});

router.delete('/:id', async (req, res) => {
  await User.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

module.exports = router;
