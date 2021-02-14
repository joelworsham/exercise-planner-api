const getTablePropertiesFromModel = require('../../util/sequelize/getTablePropertiesFromModel');
const log = require('../log');

/**
 * Seeds data into the database.
 *
 * @param {*} queryInterface Query interface, passed from migration
 * @param {Model} Model Database model from sequelize
 * @param {Object} entityName Optional entity name, for more detailed logs (plural)
 * @returns {Promise<Object>}
 */
module.exports = (
  queryInterface,
  Model,
  {
    entityName = 'items',
  } = {},
) => {
  const { tableName } = getTablePropertiesFromModel(Model);

  log.inform(
    `Migrating DOWN ${entityName}...`,
    'seeder',
  );

  return queryInterface.bulkDelete(tableName, null);
};
