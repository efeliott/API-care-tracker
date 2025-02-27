'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: { 
        type: Sequelize.INTEGER, 
        autoIncrement: true, 
        primaryKey: true, 
        allowNull: false 
      },
      nom: { type: Sequelize.STRING, allowNull: false },
      prenom: { type: Sequelize.STRING, allowNull: false },
      email: { type: Sequelize.STRING, allowNull: false, unique: true },
      mot_de_passe: { type: Sequelize.STRING, allowNull: false },
      role: { type: Sequelize.ENUM("admin", "agent", "usager"), allowNull: false },
      etablissement_id: { 
        type: Sequelize.INTEGER, 
        allowNull: true,
        references: { 
          model: "Etablissements",
          key: "id" 
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE"
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  }
};