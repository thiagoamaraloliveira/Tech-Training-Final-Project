"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          user: "admin",
          password:"admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user: "Pedro.ao",
          password:"123456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user: "Maria.sj",
          password:"123456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user: "Jose.rs",
          password:"123456",
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
