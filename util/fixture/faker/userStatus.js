const faker = require('faker');
const {
  USER_STATUSES,
} = require('../../../data/rules/user');

/**
 * Generates a valid user status (80% chance of confirmed).
 *
 * @returns {String}
 */
module.exports = () => {
  const [confirmed, ...statuses] = USER_STATUSES;
  return Math.random() > 0.8 ?
    statuses[faker.random.number({ min: 0, max: statuses.length - 1 })] :
    confirmed;
};
