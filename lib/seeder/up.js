const { Sequelize } = require('sequelize');
const prepareFixtureForSeeder = require('../../util/fixture/prepareFixtureForSeeder');
const log = require('../log');

/**
 * Seeds data into the database.
 *
 * @param {{}} queryInterface Query interface, passed from migration
 * @param {Array} data Iterable data to seed
 * @param {{}} Model Table name to seed into
 * @returns {Promise<Object>}
 */
module.exports = async (
  queryInterface,
  data,
  Model,
) => {
  log.inform(
    `Seeding UP ${data.length} items for ${Model.tableName}...`,
    'seeder',
  );

  log.debug(
    'Seeding the following items:',
    'seeder',
    { json: data },
  );

  await queryInterface.bulkInsert(Model.tableName, prepareFixtureForSeeder(data));

  // If the ID field is an auto-incrementing INTEGER, reset sequence after seeding new items.
  if (Model.rawAttributes.id.type instanceof Sequelize.INTEGER) {
    await queryInterface.sequelize.query(
      `SELECT SETVAL('"${Model.tableName}_id_seq"'::regclass, (SELECT MAX("id") FROM "${Model.tableName}") + 1, false);`,
    );
  }
};
