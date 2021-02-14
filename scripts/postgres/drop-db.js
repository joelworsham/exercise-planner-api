const { getClient } = require('../../services/pg');
const getDbUrlParts = require('../../util/postgres/getDbUrlParts');
const config = require('../../lib/config');
const log = require('../../lib/log');
const prompt = require('../../lib/prompt');

/**
 * Drops the postgres database.
 *
 * @returns {Promise<void>}
 */
module.exports = async () => {
  // Get db URL, but for database `postgres`
  const { dbName, dbBaseUrl } = getDbUrlParts(config.databaseUrl);

  if ((await prompt(
    `This will drop any existing "${dbName}" database and CANNOT be undone. Are you sure you want to proceed? (y/N)`,
    { namespace: 'db' },
  )) !== 'y') {
    log.error('Welp, thanks for wasting my time...', 'db');
    process.exit();
  }

  // Acquire pg connection to database `postgres`
  const client = await getClient(`${dbBaseUrl}/postgres`);

  log.inform(`Dropping database "${dbName}"`, 'db');

  try {
    await client.query(`DROP DATABASE ${dbName}`);

    log.success('Database successfully dropped! It is gone forever...', 'db');
  } catch (error) {
    if (error.message === `database "${dbName}" does not exist`) {
      // Anticipated error (it's okay if db doesn't exist, that's the point)
      log.debug(`Database "${dbName}" does not exist. Nothing to drop.`, 'db');
    } else {
      // Unknown error
      log.error('Error dropping database', 'db', error);
    }
  }
};
