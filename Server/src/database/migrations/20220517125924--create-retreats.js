"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("retreats", {
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
      status: {
        type: Sequelize.ENUM("Open", "Closed", "New Upcoming Opening"),
        defaultValue: "Open",
        allowNull: false
      },
      openingDate: {
        type: Sequelize.STRING,
      },     
       dinningOptions: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },      
      spa: {
        type: Sequelize.BOOLEAN,
        allowNull: false,

      },
      pool: {
        type: Sequelize.BOOLEAN,
        allowNull: false,

      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("retreats");
  },
};
