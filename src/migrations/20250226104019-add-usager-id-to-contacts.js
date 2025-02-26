'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("Contacts", "usager_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "Usagers", key: "id" },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("Contacts", "usager_id");
  }
};