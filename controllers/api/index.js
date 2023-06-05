const router = require("express").Router();
const userRoutes = require("./userRoutes");
const builderRoutes = require("./builderRoutes");
const dashboardRoutes = require("./dashboardRoutes");
const pokemonRoutes = require("./pokemonRoutes");
const speciesRoutes = require("./speciesRoutes");
const canvasRoutes = require("./canvasRoutes");

router.use("/users", userRoutes);
router.use("/builder", builderRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/pokemon", pokemonRoutes);
router.use("/species", speciesRoutes);
router.use("/downloads", canvasRoutes);

module.exports = router;
