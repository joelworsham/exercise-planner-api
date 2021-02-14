const { Sequelize, Model } = require('sequelize');
const getDefaultModelOptions = require('../../util/sequelize/getDefaultModelOptions');
const getDefaultModelAttributes = require('../../util/sequelize/getDefaultModelAttributes');
const initializeModel = require('../../util/sequelize/initializeModel');
const { ACTIVITY_TYPES } = require('../../data/rules/activity');
const {
  NAME_FIELD_MIN_LEN,
  NAME_FIELD_MAX_LEN,
} = require('../../data/rules/text');

/**
 * Activity model.
 *
 * Represents a single activity in the system.
 *
 * @docs https://sequelize.org/v5/manual/getting-started.html#modeling-a-table
 * @docs https://sequelize.org/v5/manual/models-definition.html
 * @type {Model}
 */
class Activity extends Model {
}

const ActivityModel = initializeModel(
  {
    ...getDefaultModelAttributes(),
    name: {
      type: Sequelize.STRING(NAME_FIELD_MAX_LEN),
      allowNull: false,
      validate: {
        len: {
          args: [NAME_FIELD_MIN_LEN, NAME_FIELD_MAX_LEN],
          msg: `Activity name must be between ${NAME_FIELD_MIN_LEN} and ${NAME_FIELD_MAX_LEN} characters in length.`,
        },
      },
    },
    type: {
      type: Sequelize.ENUM(...ACTIVITY_TYPES),
      allowNull: false,
    },
  },
  {
    ...getDefaultModelOptions(),
  },
  {
    description: 'An activity a user can perform.',
    paginate: true,
    tableName: 'Activities',
  },
)(Activity);

module.exports = ActivityModel;
