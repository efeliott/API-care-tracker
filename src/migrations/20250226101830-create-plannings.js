'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Plannings', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
      agent_id: { type: Sequelize.INTEGER, references: { model: "Users", key: "id" }, allowNull: false },
      tache_id: { type: Sequelize.INTEGER, references: { model: "Taches", key: "id" }, allowNull: false },
      date: { type: Sequelize.DATEONLY, allowNull: false },
      statut_validation: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Plannings');
  }
};