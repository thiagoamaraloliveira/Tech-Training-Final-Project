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
          UserId: 1,
          CategoryId:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Name: "iPhone 11",
          Color: "black",
          PartNumber: 2561,
          UserId: 1,
          CategoryId:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Name: "Smart TV HD LED 32 LG",
          Color: "black",
          PartNumber: 5103,
          UserId: 3,
          CategoryId:2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Name: "Smart TV 43” Full HD LED LG",
          Color: "blue",
          PartNumber: 5131,
          UserId: 1,
          CategoryId:2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Devices", null, {});
  },
};
