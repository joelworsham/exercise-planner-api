const sequelize = require('../../services/sequelize');
const log = require('../log');

/**
 * Seeds data into the database.
 *
 * @param {{}} queryInterface Query interface, passed from migration
 * @param {sequelize} sequelize Sequelize instance.
 * @param {String} tableName Table name to seed down
 * @returns {Promise<Object>}
 */
module.exports = async (
  queryInterface,
  tableName,
) => {
  log.inform(
    `Seeding DOWN ${tableName}...`,
    'seeder',
  );

  await queryInterface.bulkDelete(tableName, null);
  await sequelize.query(`select setval('${tableName}_id_seq', max(id)) from ${tableName}`);
};
