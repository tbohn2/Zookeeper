const router = require("express").Router();
const { Pokemon, Pokehome, Species } = require("../../models");

router.get("/", async (req, res) => {
  try {
    res.render("builder");
  } catch {}
});

router.get("/:id", async (req, res) => {
  try {
    const zooData = await Pokehome.findByPk(req.params.id, {});
    res.render("builder", zooData);
  } catch {}
});

module.exports = router;
