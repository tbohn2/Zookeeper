const router = require("express").Router();
const { Pokemon, Pokehome, Species } = require("../../models");
const { createCanvas, loadImage } = require("canvas");
const path = require("path");
const fs = require("fs");

router.get("/:id", async (req, res) => {
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
    const pokemons = pokehome.pokemons;
    const myCanvas = createCanvas(1200, 800);
    const context = myCanvas.getContext("2d");
    for (let i = 0; i < pokemons.length; i++) {
      const sprite = pokemons[i].species.image;

      await loadImage(sprite).then((sprite) => {
        context.drawImage(sprite, 200 * i, 0, 200, 200);
      });
    }
    const buffer = myCanvas.toBuffer("image/png");
    fs.writeFileSync("./public/downloads/image.png", buffer);

    res.send("./public/downloads/image.png");
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
