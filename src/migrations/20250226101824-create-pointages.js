'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Pointages', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
      tache_id: { type: Sequelize.INTEGER, references: { model: "Taches", key: "id" }, allowNull: false },
      agent_id: { type: Sequelize.INTEGER, references: { model: "Users", key: "id" }, allowNull: false },
      debut_pointage: { type: Sequelize.DATE, allowNull: true },
      fin_pointage: { type: Sequelize.DATE, allowNull: true },
      methode: { type: Sequelize.ENUM("manuel", "NFC"), allowNull: false },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Pointages');
  }
};