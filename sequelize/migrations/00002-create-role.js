const { Sequelize } = require('sequelize');
const log = require('../../lib/log');
const {
  DESCRIPTION_FIELD_MAX_LEN,
} = require('../../data/rules/text');

module.exports = {
  up: async (queryInterface) => {
    log.inform('Migrating UP Role...', 'migration');

    return queryInterface.createTable('Roles', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING(DESCRIPTION_FIELD_MAX_LEN),
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
    log.inform('Migrating DOWN Role...', 'migration');

    return queryInterface.dropTable('Roles');
  },
};
