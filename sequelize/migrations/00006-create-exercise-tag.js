const { Sequelize } = require('sequelize');
const log = require('../../lib/log');

module.exports = {
  up: async (queryInterface) => {
    log.inform('Migrating UP Exercise Tag...', 'migration');

    return queryInterface.createTable('ExerciseTags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      exerciseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Exercises',
          key: 'id',
          as: 'exerciseId',
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
    log.inform('Migrating DOWN Exercise Tag...', 'migration');

    return queryInterface.dropTable('ExerciseTags');
  },
};
