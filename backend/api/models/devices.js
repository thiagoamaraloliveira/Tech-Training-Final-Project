"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Devices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Devices.init(
    {
      Category: DataTypes.STRING,
      Color: DataTypes.STRING,
      PartNumber: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Devices",
    }
  );
  return Devices;
};
