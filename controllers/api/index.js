const router = require("express").Router();
const userRoutes = require("./userRoutes");
const projectRoutes = require("./projectRoutes");
const builderRoutes = require("./builderRoutes");
const dashboardRoutes = require("./dashboardRoutes");

router.use("/users", userRoutes);
router.use("/projects", projectRoutes);
router.use("/builder", builderRoutes);
router.use("/dashboard", dashboardRoutes);
module.exports = router;
