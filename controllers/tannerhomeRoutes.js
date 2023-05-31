const router = require('express').Router();
const { Pokehome, Animal } = require('../models');
const withAuth = require('../utils/auth');

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const user_id = req.session.user_id
    const pokezoos = await Pokehome.findAll({
      where: { user_id: user_id },
      attributes: ['name'],
      include: [
        {
          model: Animal,
          attributes: ['picurl'],
        },
      ],
    });

    const pokezoo = pokezoos.get({ plain: true });

    res.render('dashboard', {
      ...pokezoo,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
