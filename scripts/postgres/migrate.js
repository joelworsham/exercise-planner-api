const Umzug = require('umzug');
const sequelize = require('../../services/sequelize');
const log = require('../../lib/log');

const umzug = new Umzug({
  migrations: {
    path: './sequelize/migrations',
    params: [
      sequelize.getQueryInterface(),
    ],
  },
  storage: 'sequelize',
  storageOptions: { sequelize },
});

module.exports = async () => {
  log.inform('Running all database migrations...', 'migration');

  // Checks migrations and run them if they are not already applied. To keep
  // track of the executed migrations, a table (and sequelize model) called SequelizeMeta
  // will be automatically created (if it doesn't exist already) and parsed.
  await umzug.up();

  log.success('All database migrations successfully ran!', 'migration');
};
