const router = require('express').Router();
const { Pokehome, Pokemon, Species } = require('../models');
const withAuth = require('../utils/auth');

router.get('/dashboard', async (req, res) => {
  try {
    // const user_id = req.session.user_id
    const user_id = 1
    const pokezoos = await Pokehome.findAll({
      where: { user_id: user_id },
      attributes: ['name'],
      include: [{
        model: Pokemon,
        include: [
          {
            model: Species,
            attributes: ['image']
          }]
      }]
    });
    res.json(pokezoos)
    // const pokezoo = pokezoos.get({ plain: true });

    // res.render('dashboard', {
    //   ...pokezoo,
    //   logged_in: req.session.logged_in
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
