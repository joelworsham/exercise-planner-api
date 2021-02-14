const config = require('../../lib/config');
const log = require('../../lib/log');

/**
 * Drops, creates, migrates, then seeds the database.
 */
(async () => {
  log.inform(`Running in ${config.environment.toUpperCase()} mode.`, 'db');
  log.inform('Tearing down and setting up database.', 'db');

  // Only perform these in a development environment
  if (config.environment === 'development') {
    await require('./kill-all-connections')();
    await require('./drop-db')();
    await require('./create-db')();
  }

  await require('./migrate')();
  await require('./seed')();

  log.inform('New database successfully setup!', 'db');
  process.exit();
})();
