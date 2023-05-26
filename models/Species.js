const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Species extends Model {}

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
    description: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type1_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "type",
        key: "id",
      },
    },
    type2_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "type",
        key: "id",
      },
    },
    // diet_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: "diet",
    //     key: "id",
    //   },
    // },
    // habitat_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: "habitat",
    //     key: "id",
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "species",
  }
);

module.exports = Species;
