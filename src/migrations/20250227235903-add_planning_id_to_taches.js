'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Taches', 'planning_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Plannings',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('Taches', 'planning_id');
  }
};