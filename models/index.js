const User = require("./User");
const Animal = require("./Animal");
const Classes = require("./Classes");
const Diet = require("./Diet");
const Enclosure = require("./Enclosure");
const Habitat = require("./Habitat");
const Species = require("./Species");

User.hasMany(Enclosure, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Enclosure.belongsTo(User, {
  foreignKey: "user_id",
});

Enclosure.hasMany(Animal, {
  foreignKey: "enclosure_id",
  onDelete: "CASCADE",
});

Animal.belongsTo(Enclosure, {
  foreignKey: "enclosure_id",
});

module.exports = { User, Animal, Classes, Diet, Enclosure, Habitat, Species };
