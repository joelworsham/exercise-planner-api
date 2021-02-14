const { Sequelize } = require('sequelize');
const log = require('../../lib/log');

module.exports = {
  up: async (queryInterface) => {
    log.inform('00003 Migrating UP User Role...', 'migration');

    return queryInterface.createTable('UserRoles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId',
        },
      },
      roleId: {
        type: Sequelize.STRING,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Roles',
          key: 'id',
          as: 'roleId',
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
    log.inform('00003 Migrating DOWN User Role...', 'migration');

    return queryInterface.dropTable('UserRoles');
  },
};
