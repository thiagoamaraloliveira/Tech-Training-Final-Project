"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.hasMany(models.Devices, { foreignKey: "userId" });
    }
  }
  Users.init(
    {
      user: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      modelName: "Users",
    }
  );
  return Users;
};
