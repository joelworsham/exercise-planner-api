const { getClient } = require('../../services/pg');
const getDbUrlParts = require('../../util/postgres/getDbUrlParts');
const getPostgresDbUrl = require('../../util/postgres/getPostgresDbUrl');
const config = require('../../lib/config');
const log = require('../../lib/log');

/**
 * Kills all active connections to the database, allowing these scripts to operate.
 *
 * @returns {Promise<void>}
 */
module.exports = async () => {
  // Acquire pg connection to database `postgres`
  const client = await getClient(getPostgresDbUrl());

  // Get db URL
  const { dbName } = getDbUrlParts(config.databaseUrl);

  if (!client) process.exit(1);

  log.debug(`Killing all connections to the database "${dbName}"`, 'db');

  try {
    await client.query(`select pg_terminate_backend(pid) from pg_stat_activity where datname='${dbName}';`);

    log.debug('ALL connections to the database have been killed.', 'db');
  } catch (error) {
    log.error('Error killing connections.', 'db', error);
  }
};
