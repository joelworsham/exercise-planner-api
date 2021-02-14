const encryptField = require('../sequelize/encryptField');

/**
 * Encrypts the password field of all users.
 *
 * @param {Array} users Seed-able user objects with raw, plain passwords.
 * @returns {Promise<[{}]>}
 */
module.exports = async (users) => {
  const encryptionMap = users.map(
    async (user) => ({
      ...user,
      password: await encryptField(user.password, {
        rounds: 1, // lowest possible delay buffer
      }),
    }),
  );

  return Promise.all(encryptionMap);
}
