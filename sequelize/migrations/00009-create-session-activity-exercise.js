const { Sequelize } = require('sequelize');
const log = require('../../lib/log');

module.exports = {
  up: async (queryInterface) => {
    log.inform('Migrating UP Session Exercise Exercise...', 'migration');

    return queryInterface.createTable('SessionActivityExercises', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sessionActivityId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'SessionActivities',
          key: 'id',
          as: 'sessionActivityId',
        },
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    log.inform('Migrating DOWN Session Exercise Exercise...', 'migration');

    return queryInterface.dropTable('SessionActivityExercises');
  },
};
