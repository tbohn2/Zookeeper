const router = require("express").Router();
const { Species } = require("../../models");

router.get("/:id", async (req, res) => {
  try {
    const speciesData = await Species.findByPk(req.params.id);
    const species = speciesData.get({ plain: true });
    res.json(species);
  } catch (error) {}
});

module.exports = router;
