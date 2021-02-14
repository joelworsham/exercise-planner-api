const { Sequelize } = require('sequelize');
const log = require('../../lib/log');
const { ACTIVITY_TYPES } = require('../../data/rules/activity');
const { NAME_FIELD_MAX_LEN } = require('../../data/rules/text');

module.exports = {
  up: async (queryInterface) => {
    log.inform('Migrating UP Activity...', 'migration');

    return queryInterface.createTable('Activities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING(NAME_FIELD_MAX_LEN),
        allowNull: false,
      },
      type: {
        type: Sequelize.ENUM(...ACTIVITY_TYPES),
        allowNull: false,
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
    log.inform('Migrating DOWN Activity...', 'migration');

    return queryInterface.dropTable('Activities');
  },
};
