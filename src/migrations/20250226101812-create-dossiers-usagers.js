'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('DossiersUsagers', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
      usager_id: { type: Sequelize.INTEGER, references: { model: "Usagers", key: "id" }, allowNull: false, unique: true },
      historique_interventions: { type: Sequelize.JSON, allowNull: true },
      instructions_specifiques: { type: Sequelize.TEXT, allowNull: true },
      etat_sante: { type: Sequelize.TEXT, allowNull: true },
      notes_agents: { type: Sequelize.JSON, allowNull: true },
      date_maj: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('DossiersUsagers');
  }
};