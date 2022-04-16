"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Devices",
      [
        {
          Name: "Smartphone Samsung Galaxy M12",
          Color: "blue",
          PartNumber: 1103,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "iPhone 11",
          Color: "black",
          PartNumber: 2561,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Smart TV HD LED 32 LG",
          Color: "black",
          PartNumber: 5103,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Smart TV 43” Full HD LED LG",
          Color: "blue",
          PartNumber: 5131,
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
