"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("user_subscriptions", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "users", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      subSurveys: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },     
       subResidences: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },      
      subOffers: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("user_subscriptions");
  },
};
