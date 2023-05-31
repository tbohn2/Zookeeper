const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Pokemon extends Model {}

Pokemon.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    happiness: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    species_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "species",
        key: "id",
      },
    },
    pokehome_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "pokehome",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "pokemon",
  }
);

module.exports = Pokemon;
