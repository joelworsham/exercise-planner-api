const { Sequelize, Model } = require('sequelize');
const getDefaultModelOptions = require('../../util/sequelize/getDefaultModelOptions');
const getDefaultModelAttributes = require('../../util/sequelize/getDefaultModelAttributes');
const initializeModel = require('../../util/sequelize/initializeModel');

/**
 * SessionActivity model.
 *
 * Represents a single activity in the system.
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
      }
    },
  },
  {
    ...getDefaultModelOptions(),
  },
  {
    description: 'An activity performed within a session.',
    paginate: true,
  },
)(SessionActivity);

module.exports = SessionActivityModel;
