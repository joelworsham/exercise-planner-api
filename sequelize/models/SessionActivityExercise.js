const { Sequelize, Model } = require('sequelize');
const getDefaultModelOptions = require('../../util/sequelize/getDefaultModelOptions');
const getDefaultModelAttributes = require('../../util/sequelize/getDefaultModelAttributes');
const initializeModel = require('../../util/sequelize/initializeModel');
const { SESSION_ACTIVITY_TYPES } = require('../../data/rules/session');

/**
 * SessionActivity model.
 *
 * Represents a session exercise exercise in the system.
 *
 * @docs https://sequelize.org/v5/manual/getting-started.html#modeling-a-table
 * @docs https://sequelize.org/v5/manual/models-definition.html
 * @type {Model}
 */
class SessionActivity extends Model {
}

const SessionActivityModel = initializeModel(
  {
    ...getDefaultModelAttributes(),
    order: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      validate: {
        min: {
          args: [0],
          msg: 'SessionActivity order must be greater than 0.',
        },
      },
    },
    type: {
      type: Sequelize.ENUM(...SESSION_ACTIVITY_TYPES),
      allowNull: false,
    },
  },
  {
    ...getDefaultModelOptions(),
  },
  {
    description: 'An exercise performed within a session exercise.',
  },
)(SessionActivity);

module.exports = SessionActivityModel;
