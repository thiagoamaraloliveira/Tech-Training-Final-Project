"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          User: "admin",
          Password:"admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          User: "Pedro.ao",
          Password:"123456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          User: "Maria.sj",
          Password:"123456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          User: "Jose.rs",
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
