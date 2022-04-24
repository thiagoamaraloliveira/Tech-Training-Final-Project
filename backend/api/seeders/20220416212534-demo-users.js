"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          user: "admin",
          password:"$2a$10$hV7stAYLT.MdxEE1sGQjV.HUTg/uO1UqHRbipydEn4LUakB5CLYd.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user: "Pedro.ao",
          password:"$2a$10$HBjHxmOmVsz/RSl9GQhVG.6X2Qzz7R8DywLKJmf3erHOONUdNUfE6",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user: "Maria.sj",
          password:"$2a$10$HBjHxmOmVsz/RSl9GQhVG.6X2Qzz7R8DywLKJmf3erHOONUdNUfE6",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user: "Jose.rs",
          password:"$2a$10$HBjHxmOmVsz/RSl9GQhVG.6X2Qzz7R8DywLKJmf3erHOONUdNUfE6",
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
