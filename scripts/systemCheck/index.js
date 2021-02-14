// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config(); // Load local .env.
const log = require('../../lib/log');
const buildConfig = require('../../lib/config/buildConfig');
const configSettings = require('../../config.json');
const getPostgresDbUrl = require('../../util/postgres/getPostgresDbUrl');

/**
 * Informs the user of the current step, and simulates wait time.
 *
 * @param {String} message Message to display.
 * @returns {Promise<void>}
 */
const informStep = async (message) => {
  log.inform(message);
  await new Promise((resolve) => setTimeout(resolve, 1000));
};

/**
 * Drops, creates, migrates, then seeds the database.
 */
(async () => {
  log.explain(
    '🥃 🥃\n\n' +
    'Welcome to the Exercise Planner API quick start!\n\n' +
    'The purpose of this script is to check your local machine and if it is ready to develop on.',
  );

  await informStep('Checking your system now...');

  // ENV Variables
  await informStep('Checking local ENV file...');
  const { config, errors } = buildConfig(configSettings);
  if (errors.length) {
    log.error('Local ENV file is not valid.');
    log.explain(
      `Your local ENV file does not appear to be valid. Please correct the following
      errors:\n\n${errors.map((error) => `\t- ${error}`).join('\n')}`,
    );
    process.exit();
  }

  // Postgres env var
  if (config.databaseUrl.includes('{computer_username}')) {
    log.error('Invalid Postgres database URL.');
    log.explain(
      'It appears you have not yet replaced {computer_username} with your actual\n' +
      'username in the ENV variable "DATABASE_URL".\n\n' +
      'Please perform the replacement and run this script again.',
    );
    process.exit();
  } else {
    log.success('ENV looks good!');
  }

  // Postgres
  await informStep('Checking postgres instance...');
  const client = await require('../../services/pg').getClient(getPostgresDbUrl());
  if (!client) {
    process.exit();
  } else {
    log.success('Successfully connected to Postgres!');
  }

  log.success('Your system is ready to run the Exercise Planner API! 🎉🎉🎉');

  log.explain(
    '🥃 🥃\n\n' +
    'Your system has been validated and Exercise Planner can be run. Congrats!\n\n' +
    'It is advised that you read through the project README prior to any contributing.\n\n' +
    'Happy sipping!',
  );

  process.exit();
})();
