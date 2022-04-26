"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("user_preferences", {
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
        unique: true
      },
      mattressId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "mattresses", key: "id" },
        onUpdate: "CASCADE",
      },
      pillowId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "pillows", key: "id" },
        onUpdate: "CASCADE",
      },
      smokingRoom: {
        type: Sequelize.ENUM("Non smoking room", "Smoking room"),
        allowNull: false,
        defaultValue: "Non smoking room"
      },
      createdAt: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("user_preferences");
  },
};
