const { Sequelize } = require('sequelize');
const log = require('../../lib/log');
const { SESSION_ACTIVITY_TYPES } = require('../../data/rules/session');

module.exports = {
  up: async (queryInterface) => {
    log.inform('Migrating UP Session Exercise...', 'migration');

    return queryInterface.createTable('SessionActivities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sessionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Sessions',
          key: 'id',
          as: 'sessionId',
        },
      },
      type: {
        type: Sequelize.ENUM(...SESSION_ACTIVITY_TYPES),
        allowNull: false,
      },
      order: {
        type: Sequelize.INTEGER,
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
    log.inform('Migrating DOWN Session Exercise...', 'migration');

    return queryInterface.dropTable('SessionActivities');
  },
};
