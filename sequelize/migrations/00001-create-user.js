const { Sequelize } = require('sequelize');
const log = require('../../lib/log');
const {
  NAME_FIELD_MAX_LEN,
} = require('../../data/rules/text');
const {
  EMAIL_FIELD_MAX_LEN,
  PASSWORD_FIELD_MAX_LEN,
} = require('../../data/rules/user');


module.exports = {
  up: async (queryInterface) => {
    log.inform('Migrating UP User...', 'migration');

    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullName: {
        type: Sequelize.STRING(NAME_FIELD_MAX_LEN),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(EMAIL_FIELD_MAX_LEN),
        allowNull: false,
        unique: true,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
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
    log.inform('Migrating DOWN Users...', 'migration');

    return queryInterface.dropTable('Users');
  },
};
