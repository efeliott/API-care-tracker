'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Plannings', 'tache_id');

    await queryInterface.addColumn('Plannings', 'usager_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Usagers',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  down: async (queryInterface) => {
    await queryInterface.addColumn('Plannings', 'tache_id', {
      type: Sequelize.INTEGER
    });
    await queryInterface.removeColumn('Plannings', 'usager_id');
  }
};