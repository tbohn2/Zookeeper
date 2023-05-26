const User = require("./User");
const Animal = require("./Animal");
const Type = require("./Type");
const Diet = require("./Diet");
const Pokehome = require("./Pokehome");
const Habitat = require("./Habitat");
const Species = require("./Species");

User.hasMany(Pokehome, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Pokehome.belongsTo(User, {
  foreignKey: "user_id",
});

Pokehome.hasMany(Animal, {
  foreignKey: "pokehome_id",
  onDelete: "CASCADE",
});

Animal.belongsTo(Pokehome, {
  foreignKey: "pokehome_id",
});

module.exports = { User, Animal, Type, Diet, Pokehome, Habitat, Species };
