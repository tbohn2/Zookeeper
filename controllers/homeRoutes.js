const router = require("express").Router();
const { Pokehome, Pokemon, Species } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    res.render("homepage", { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const user_id = req.session.user_id;
    const pokezooData = await Pokehome.findAll({
      where: { user_id: user_id },
      attributes: ["name"],
      include: [
        {
          model: Pokemon,
          include: [
            {
              model: Species,
              attributes: ["image"],
            },
          ],
          limit: 3,
        },
      ],
    });

    const pokezoos = pokezooData.map((pokezoo) => pokezoo.get({ plain: true }));

    res.render("dashboard", {
      pokezoos,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
