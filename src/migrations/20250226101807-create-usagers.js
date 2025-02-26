'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Usagers', {
      id: { 
        type: Sequelize.INTEGER, 
        autoIncrement: true, 
        primaryKey: true, 
        allowNull: false 
      },
      nom: { type: Sequelize.STRING, allowNull: false },
      prenom: { type: Sequelize.STRING, allowNull: false },
      date_naissance: { type: Sequelize.DATE, allowNull: false },
      contact_urgence_id: { 
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "Contacts", key: "id" },
        onDelete: "SET NULL", 
        onUpdate: "CASCADE"
      },
      adresse: { type: Sequelize.STRING, allowNull: false },
      badge_nfc: { type: Sequelize.STRING, allowNull: true, unique: true },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Usagers');
  }
};