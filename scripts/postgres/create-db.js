const { getClient } = require('../../services/pg');
const getDbUrlParts = require('../../util/postgres/getDbUrlParts');
const config = require('../../lib/config');
const log = require('../../lib/log');

/**
 * Creates the postgres database.
 *
 * @returns {Promise<void>}
 */
module.exports = async () => {
  // Get db URL, but for database `postgres`
  const { dbName, dbBaseUrl } = getDbUrlParts(config.databaseUrl);

  // Acquire pg connection to database `postgres`
  const client = await getClient(`${dbBaseUrl}/postgres`);

  log.inform(`Creating database "${dbName}"`, 'db');

  try {
    await client.query(`CREATE DATABASE ${dbName}`);

    log.success('Database successfully created! PARTY', 'db');
  } catch (error) {
    log.error('Error creating database', 'db', error);
  }
};
