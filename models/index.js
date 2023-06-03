const User = require("./User");
const Pokemon = require("./Pokemon");
const Pokehome = require("./Pokehome");
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

Pokemon.belongsTo(Species, {
  foreignKey: "species_id",
});

Species.hasMany(Pokemon, {
  foreignKey: "species_id",
});

module.exports = { User, Pokemon, Pokehome, Species };
