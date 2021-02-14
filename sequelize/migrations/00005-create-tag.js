const { Sequelize } = require('sequelize');
const log = require('../../lib/log');
const { NAME_FIELD_MAX_LEN } = require('../../data/rules/text');

module.exports = {
  up: async (queryInterface) => {
    log.inform('Migrating UP Tag...', 'migration');

    return queryInterface.createTable('Tags', {
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
    log.inform('Migrating DOWN Tag...', 'migration');

    return queryInterface.dropTable('Tags');
  },
};
