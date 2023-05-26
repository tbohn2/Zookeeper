const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Animal extends Model {}

Project.init(
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
    modelName: "animal",
  }
);

module.exports = Animal;
