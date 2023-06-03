const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Pokehome extends Model { }

Pokehome.init(
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
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5,
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: "The coolest Pokehome",
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "pokehome",
  }
);

module.exports = Pokehome;
