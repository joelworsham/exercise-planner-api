const { Sequelize, Model } = require('sequelize');
const getDefaultModelOptions = require('../../util/sequelize/getDefaultModelOptions');
const getDefaultModelAttributes = require('../../util/sequelize/getDefaultModelAttributes');
const initializeModel = require('../../util/sequelize/initializeModel');
const {
  NAME_FIELD_MIN_LEN,
  NAME_FIELD_MAX_LEN,
} = require('../../data/rules/text');

/**
 * Session model.
 *
 * Represents a single exercise in the system.
 *
 * @docs https://sequelize.org/v5/manual/getting-started.html#modeling-a-table
 * @docs https://sequelize.org/v5/manual/models-definition.html
 * @type {Model}
 */
class Session extends Model {
}

const SessionModel = initializeModel(
  {
    ...getDefaultModelAttributes(),
    name: {
      type: Sequelize.STRING(NAME_FIELD_MAX_LEN),
      allowNull: false,
      validate: {
        len: {
          args: [NAME_FIELD_MIN_LEN, NAME_FIELD_MAX_LEN],
          msg: `Session name must be between ${NAME_FIELD_MIN_LEN} and ${NAME_FIELD_MAX_LEN} characters in length.`,
        },
      },
    },
    order: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      validate: {
        min: {
          args: [0],
          msg: 'Session order must be greater than 0.',
        },
      },
    },
  },
  {
    ...getDefaultModelOptions(),
  },
  {
    description: 'A single session containing activities.',
    paginate: true,
  },
)(Session);

module.exports = SessionModel;
