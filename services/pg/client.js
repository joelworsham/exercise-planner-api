const { Client } = require('pg');
const log = require('../../lib/log');
const config = require('../../lib/config');

module.exports = async (dbUrl = config.databaseUrl) => {
  const client = new Client({
    connectionString: dbUrl,
  });

  try {
    await client.connect();
    return client;
  } catch (error) {
    log.error('Error connecting to PG database.', 'pg', error);
    log.explain(
      'It seems Postgres had issues connecting. Do you have Postgres installed on' +
      'your system globally?\n\n' +
      'If not, install it here (Postgres.app is recommended, but not required).\n\n' +
      'MacOSX: https://www.postgresql.org/download/macosx/\n' +
      'Windows: https://www.postgresql.org/download/windows/',
    );
  }

  return null;
};
