const faker = require('faker');
const {
  PASSWORD_FIELD_MIN_LEN,
  PASSWORD_FIELD_MAX_LEN,
} = require('../../../data/rules/user');

/**
 * Generates a valid password for a user.
 *
 * @returns {String}
 */
module.exports = () => (
  `${faker.internet.password(
    faker.random.number({
      min: PASSWORD_FIELD_MIN_LEN,
      max: PASSWORD_FIELD_MAX_LEN,
    }),
    false,
  )}1!Aa` // satisfies our password requirements
);
