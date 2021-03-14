const { Sequelize, Model } = require('sequelize');
const getDefaultModelOptions = require('../../util/sequelize/getDefaultModelOptions');
const getDefaultModelAttributes = require('../../util/sequelize/getDefaultModelAttributes');
const initializeModel = require('../../util/sequelize/initializeModel');
const {
  NAME_FIELD_MIN_LEN,
  NAME_FIELD_MAX_LEN,
} = require('../../data/rules/text');

/**
 * Exercise model.
 *
 * Represents a single exercise in the system.
 *
 * @docs https://sequelize.org/v5/manual/getting-started.html#modeling-a-table
 * @docs https://sequelize.org/v5/manual/models-definition.html
 * @type {Model}
 */
class Exercise extends Model {
}

const ExerciseModel = initializeModel(
  {
    ...getDefaultModelAttributes(),
    name: {
      type: Sequelize.STRING(NAME_FIELD_MAX_LEN),
      allowNull: false,
      validate: {
        len: {
          args: [NAME_FIELD_MIN_LEN, NAME_FIELD_MAX_LEN],
          msg: `Exercise name must be between ${NAME_FIELD_MIN_LEN} and ${NAME_FIELD_MAX_LEN} characters in length.`,
        },
      },
    },
  },
  {
    ...getDefaultModelOptions(),
  },
  {
    description: 'An exercise a user can perform.',
    paginate: true,
  },
)(Exercise);

module.exports = ExerciseModel;
