'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Taches', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
      usager_id: { type: Sequelize.INTEGER, references: { model: "Usagers", key: "id" }, allowNull: false },
      agent_id: { type: Sequelize.INTEGER, references: { model: "Users", key: "id" }, allowNull: false },
      date: { type: Sequelize.DATE, allowNull: false },
      heure_debut: { type: Sequelize.TIME, allowNull: false },
      heure_fin: { type: Sequelize.TIME, allowNull: false },
      type_intervention: { type: Sequelize.STRING, allowNull: false },
      statut: { type: Sequelize.ENUM("planifié", "en cours", "terminé", "annulé"), allowNull: false },
      remarques: { type: Sequelize.TEXT, allowNull: true },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Taches');
  }
};