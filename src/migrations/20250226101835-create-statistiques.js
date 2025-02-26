'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Statistiques', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
      agent_id: { type: Sequelize.INTEGER, references: { model: "Users", key: "id" }, allowNull: true },
      usager_id: { type: Sequelize.INTEGER, references: { model: "Usagers", key: "id" }, allowNull: true },
      total_heures: { type: Sequelize.FLOAT, allowNull: false, defaultValue: 0 },
      nb_interventions: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
      methode_pointage_preferee: { type: Sequelize.ENUM("manuel", "NFC"), allowNull: true },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Statistiques');
  }
};