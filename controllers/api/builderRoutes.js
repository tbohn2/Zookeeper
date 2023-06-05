const router = require("express").Router();
const { Pokemon, Pokehome, Species } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    res.render("builder");
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/:id", withAuth, async (req, res) => {
  try {
    const homeData = await Pokehome.findByPk(req.params.id, {
      include: [
        {
          model: Pokemon,
          attributes: ["id", "name", "happiness", "species_id"],
          include: [{ model: Species, attributes: ["image"] }],
        },
      ],
    });

    const pokehome = homeData.get({ plain: true });
    res.render("builder", { ...pokehome });
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
