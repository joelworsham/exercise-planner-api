const { Sequelize } = require('sequelize');
const log = require('../../lib/log');

module.exports = {
  up: async (queryInterface) => {
    log.inform('Migrating UP Activity Tag...', 'migration');

    return queryInterface.createTable('ActivityTags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      activityId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Activities',
          key: 'id',
          as: 'activityId',
        },
      },
      tagId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Tags',
          key: 'id',
          as: 'tagId',
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
    log.inform('Migrating DOWN Activity Tag...', 'migration');

    return queryInterface.dropTable('ActivityTags');
  },
};
