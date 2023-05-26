const User = require("./User");
const Pokemon = require("./Pokemon");
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

Pokehome.hasMany(Pokemon, {
  foreignKey: "pokehome_id",
  onDelete: "CASCADE",
});

Pokemon.belongsTo(Pokehome, {
  foreignKey: "pokehome_id",
});

module.exports = { User, Pokemon, Type, Diet, Pokehome, Habitat, Species };
