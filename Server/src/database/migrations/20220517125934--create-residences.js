"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("residences", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      continent: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      property: {
        type: Sequelize.STRING,
        allowNull: false,
      },

    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("residences");
  },
};
