const faker = require('faker');
const {
  DATE_OF_BIRTH_AFTER,
  DATE_OF_BIRTH_BEFORE,
} = require('../../../data/rules/user');

/**
 * Generates a valid date of birth for a user.
 *
 * @returns {String}
 */
module.exports = () => (
  faker.date.between(
    new Date(DATE_OF_BIRTH_BEFORE),
    new Date(DATE_OF_BIRTH_AFTER),
  )
);
