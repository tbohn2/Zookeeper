const router = require("express").Router();
const { Pokemon, Species } = require("../../models");

router.get("/:id", async (req, res) => {
  try {
    const pokemonData = await Pokemon.findByPk(req.params.id, {
      include: [{ model: Species }],
    });
    const pokemon = pokemonData.get({ plain: true });
    res.json(pokemon);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/", async (req, res) => {
  const pokemonData = req.body;
  console.log(pokemonData);
  try {
    const newPokemon = await Pokemon.create({
      name: pokemonData.name,
      happiness: Math.floor(Math.random() * 5) - 2,
      species_id: pokemonData.species_id,
      pokehome_id: pokemonData.pokehome_id,
    });
    res.status(200).json(newPokemon);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
