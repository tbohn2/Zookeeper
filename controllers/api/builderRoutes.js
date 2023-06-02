const router = require("express").Router();
const { Pokemon, Pokehome, Species } = require("../../models");

router.get("/", async (req, res) => {
  try {
    res.render("builder");
  } catch {}
});

router.get("/:id", async (req, res) => {
  try {
    const homeData = await Pokehome.findByPk(req.params.id, {
      include: [
        {
          model: Pokemon,
          attributes: ["id", "name", "happiness", "species_id"],
        },
      ],
    });

    const pokehome = homeData.get({ plain: true });
    res.render("builder", { ...pokehome });
  } catch {}
});

module.exports = router;
