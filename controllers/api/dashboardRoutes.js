const router = require("express").Router();
const { Pokehome, Animal } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/findZoo", async (req, res) => {
  try {
    const name = req.body[0].zooName;
    const pokeZooId = await Pokehome.findOne({
      where: { name: name },
      attributes: ["id"],
    });
    const id = pokeZooId.get({ plain: true });

    res.json(id);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // const name = req.body.name
  const response = req.body[0];
  // console.log(name);
  try {
    const newZoo = await Pokehome.create({
      name: response.name,
      description: response.description,
      user_id: 1,
    });
    // console.log(res.json(newZoo))
    res.status(200).json(newZoo);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
