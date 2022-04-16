"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          Name: "admin",
          Password:"admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Name: "Pedro.ao",
          Password:"123456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Name: "Maria.sj",
          Password:"123456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Name: "Jose.rs",
          Password:"123456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
