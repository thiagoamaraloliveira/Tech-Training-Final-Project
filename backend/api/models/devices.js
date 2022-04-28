"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Devices extends Model {
    static associate(models) {
      Devices.belongsTo(models.Users, { foreignKey: "userId" });
      Devices.belongsTo(models.Categories, { foreignKey: "categoryId" });
    }
  }
  Devices.init(
    {
      name: DataTypes.STRING,
      color: DataTypes.STRING,
      partNumber: DataTypes.INTEGER,
    },
    {
      sequelize,
      paranoid: true,
      modelName: "Devices",
    }
  );
  return Devices;
};
