const getTablePropertiesFromModel = require('../../util/sequelize/getTablePropertiesFromModel');
const log = require('../log');

/**
 * Seeds data into the database.
 *
 * @param {*} queryInterface Query interface, passed from migration
 * @param {Model} Model Database model from sequelize
 * @returns {Promise<Object>}
 */
module.exports = (
  queryInterface,
  Model,
) => {
  const { tableName, attributes } = getTablePropertiesFromModel(Model);

  log.inform(
    `Migrating UP ${Model.name}...`,
    'seeder',
  );

  log.debug(
    `Creating table "${tableName}" with the following attributes:`,
    'migration',
    { json: attributes },
  );

  return queryInterface.createTable(tableName, attributes);
};
