/**
 * Serializes a user from the database for use in a session cookie.
 *
 * @param {Object} user User object.
 * @param {Function} done Function called when done.
 */
module.exports = (user, done) => {
  done(null, user.id);
};
