const router = require("express").Router();
const { Pokemon, Species } = require("../../models");

router.get("/:id", async (req, res) => {
  try {
    const pokemonData = await Pokemon.findByPk(req.params.id, {
      include: [{ model: Species }],
    });
    const pokemon = pokemonData.get({ plain: true });
    res.json(pokemon);
  } catch (error) {}
});

module.exports = router;
