const router = require("express").Router();
const userRoutes = require("./userRoutes");
const projectRoutes = require("./projectRoutes");
const builderRoutes = require("./builderRoutes");

router.use("/users", userRoutes);
router.use("/projects", projectRoutes);
router.use("/builder", builderRoutes);
module.exports = router;
