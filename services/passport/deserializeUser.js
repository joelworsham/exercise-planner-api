const { User } = require('../../sequelize/models');

/**
 * Deserializes a user from a user ID, stored in a session cookie.
 *
 * @param {Number} id The user ID.
 * @param {Function} done Function called once done.
 * @returns {*}
 */
module.exports = async (id, done) => {
  const user = await User.findByPk(id);

  if (!user) {
    return done(null, null, { message: 'No user found.' });
  }

  return done(null, user);
};
