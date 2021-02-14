const Umzug = require('umzug');
const sequelize = require('../../services/sequelize');
// const prompt = require('../../lib/prompt');
const config = require('../../lib/config');
const log = require('../../lib/log');
// const theme = require('../../lib/log/theme');

const umzug = new Umzug({
  migrations: {
    params: [
      sequelize.getQueryInterface(),
    ],
    path: './sequelize/seeders',
    pattern: config.environment === 'development' ? /.*/ : /^(?!dev-).+/,
  },
  storage: 'sequelize',
  storageOptions: { sequelize },
});

/**
 * Seeds the database with data.
 *
 * @returns {Promise<void>}
 */
module.exports = async () => {
  // // Prompt is only required for development seeds
  // if (config.environment !== 'production') {
  //   global.seederConfig = {
  //     users: {
  //       count: await prompt(
  //         `Number of fake users to seed: ${theme.debug('(default 50)')}`,
  //         {
  //           type: Number,
  //           defaultValue: 50,
  //           namespace: 'seeder',
  //         },
  //       ),
  //     },
  //   };
  // }

  log.inform('Running all database seeders...', 'seeder');

  // Checks seeders and run them if they are not already applied. To keep
  // track of the executed seeders, a table (and sequelize model) called SequelizeMeta
  // will be automatically created (if it doesn't exist already) and parsed.
  await umzug.up();

  log.success('All database seeders successfully ran!', 'seeder');
};
