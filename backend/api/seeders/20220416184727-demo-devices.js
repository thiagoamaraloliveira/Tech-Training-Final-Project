"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Devices",
      [
        {
          Category: "PC",
          Color: "gold",
          PartNumber: 1103,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Category: "SmartPhone",
          Color: "black",
          PartNumber: 1099,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Category: "PC",
          Color: "silver",
          PartNumber: 2563,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Category: "Cam",
          Color: "grey",
          PartNumber: 9410,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Devices", null, {});
  },
};
