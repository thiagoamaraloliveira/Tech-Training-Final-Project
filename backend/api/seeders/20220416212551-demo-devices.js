"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Devices",
      [
        {
          name: "Smartphone Samsung Galaxy M12",
          color: "blue",
          partNumber: 1103,
          userId: 1,
          categoryId:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "iPhone 11",
          color: "black",
          partNumber: 2561,
          userId: 1,
          categoryId:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Smart TV HD LED 32 LG",
          color: "black",
          partNumber: 5103,
          userId: 3,
          categoryId:2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Smart TV 43” Full HD LED LG",
          color: "blue",
          partNumber: 5131,
          userId: 1,
          categoryId:2,
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
