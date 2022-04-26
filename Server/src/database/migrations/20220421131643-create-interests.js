"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("interests", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      interest: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      group: {
        type: Sequelize.ENUM("food & drink", "health & wellness", "travel & lifestyle"),
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("interests");
  },
};
