const { Sequelize, Model } = require('sequelize');
const getDefaultModelOptions = require('../../util/sequelize/getDefaultModelOptions');
const getDefaultModelAttributes = require('../../util/sequelize/getDefaultModelAttributes');
const initializeModel = require('../../util/sequelize/initializeModel');
const encryptField = require('../../util/sequelize/encryptField');
const compareEncryptedField = require('../../util/sequelize/compareEncryptedField');
const {
  NAME_FIELD_MIN_LEN,
  NAME_FIELD_MAX_LEN,
} = require('../../data/rules/text');
const {
  DATE_OF_BIRTH_AFTER,
  DATE_OF_BIRTH_BEFORE,
  EMAIL_FIELD_MIN_LEN,
  EMAIL_FIELD_MAX_LEN,
  PASSWORD_FIELD_MIN_LEN,
  PASSWORD_FIELD_MAX_LEN,
  PASSWORD_FIELD_PATTERN,
  USER_STATUSES,
} = require('../../data/rules/user');

/**
 * User model.
 *
 * Represents a single user in the system.
 *
 * @docs https://sequelize.org/v5/manual/getting-started.html#modeling-a-table
 * @docs https://sequelize.org/v5/manual/models-definition.html
 * @type {Model}
 */
class User extends Model {
}

const UserModel = initializeModel(
  {
    ...getDefaultModelAttributes(),
    fullName: {
      type: Sequelize.STRING(NAME_FIELD_MAX_LEN),
      allowNull: false,
      validate: {
        len: {
          args: [NAME_FIELD_MIN_LEN, NAME_FIELD_MAX_LEN],
          msg: `Full name must be between ${NAME_FIELD_MIN_LEN} and ` +
            `${NAME_FIELD_MAX_LEN} characters in length.`,
        },
      },
    },
    email: {
      type: Sequelize.STRING(EMAIL_FIELD_MAX_LEN),
      allowNull: false,
      unique: {
        args: true,
        msg: 'A user with this email already exists.',
      },
      validate: {
        len: {
          args: [EMAIL_FIELD_MIN_LEN, EMAIL_FIELD_MAX_LEN],
          msg: `Email must be between ${EMAIL_FIELD_MIN_LEN} and ` +
            `${EMAIL_FIELD_MAX_LEN} characters in length.`,
        },
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING(PASSWORD_FIELD_MAX_LEN),
      allowNull: false,
      validate: {
        len: {
          args: [PASSWORD_FIELD_MIN_LEN, PASSWORD_FIELD_MAX_LEN],
          msg: `Password must be between ${PASSWORD_FIELD_MIN_LEN} and ${PASSWORD_FIELD_MAX_LEN} ` +
            'characters in length.',
        },
        is: {
          args: PASSWORD_FIELD_PATTERN,
          msg: 'Password must contain at least one number, one uppercase letter, one lowercase ' +
            'letter, and one special character.',
        },
      },
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'UNCONFIRMED',
      validate: {
        isIn: {
          args: USER_STATUSES,
          msg: `Invalid "status" type. Must be one of: [${USER_STATUSES.join(', ')}]`,
        },
      },
    },
    dateOfBirth: {
      type: Sequelize.DATE,
      allowNull: false,
      validate: {
        isAfter: {
          args: DATE_OF_BIRTH_AFTER,
          msg: `User birth date must be after ${DATE_OF_BIRTH_AFTER}`,
        },
        isBefore: {
          args: DATE_OF_BIRTH_BEFORE,
          msg: `User birth date must be before ${DATE_OF_BIRTH_BEFORE}`,
        },
      },
    },
  },
  {
    ...getDefaultModelOptions(),
    defaultScope: {
      attributes: {
        exclude: ['password'], // don't return password for users
      },
    },
    scopes: {
      authenticate: {
        attributes: {
          include: ['id', 'password'],
        },
      },
    },
  },
  {
    description: 'A user in the system, used for identifying a person and allowing them to log into the application.',
    paginate: true,
  },
)(User);

// Encrypt the user password prior to insertion into the database.
UserModel.beforeCreate(async (user) => {
  try {
    // TODO database driven password strength requirements
    // eslint-disable-next-line no-param-reassign
    user.password = await encryptField(user.password);
  } catch (error) {
    throw new Error(error);
  }
});

// Determines if the encrypted password is a valid match.
// eslint-disable-next-line func-names
UserModel.prototype.isValidPassword = async function (password) {
  return compareEncryptedField(password, this.password);
};

module.exports = UserModel;
