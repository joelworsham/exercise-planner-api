const { Sequelize, Model } = require('sequelize');
const getDefaultModelOptions = require('../../util/sequelize/getDefaultModelOptions');
const getDefaultModelAttributes = require('../../util/sequelize/getDefaultModelAttributes');
const initializeModel = require('../../util/sequelize/initializeModel');
const {
  DESCRIPTION_FIELD_MIN_LEN,
  DESCRIPTION_FIELD_MAX_LEN,
} = require('../../data/rules/text');

/**
 * Role model.
 *
 * Represents a role that may be assigned to any user via UserRole.
 *
 * @docs https://sequelize.org/v5/manual/getting-started.html#modeling-a-table
 * @docs https://sequelize.org/v5/manual/models-definition.html
 * @type {Model}
 */
class Role extends Model {
}

module.exports = initializeModel(
  {
    ...getDefaultModelAttributes(),
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING(DESCRIPTION_FIELD_MAX_LEN),
      validate: {
        len: {
          args: [DESCRIPTION_FIELD_MIN_LEN, DESCRIPTION_FIELD_MAX_LEN],
          msg: `Role description must be between ${DESCRIPTION_FIELD_MIN_LEN} and ` +
            `${DESCRIPTION_FIELD_MAX_LEN} characters in length.`,
        },
      },
    },
  },
  getDefaultModelOptions(),
  {
    description: 'A user role, which represents the user\'s capabilities in the application.',
  },
)(Role);
