const { Sequelize } = require('sequelize');
const config = require('../../lib/config');

// eslint-disable-next-line no-prototype-builtins
if (!global.hasOwnProperty('sequelize')) {
  /*
   * Create Sequelize instance
   * @docs https://sequelize.org/v5/manual/getting-started.html#setting-up-a-connection
   */
  global.sequelize = new Sequelize(
    (
      ['production', 'staging'].includes(config.environment)
      && !config.noHttps
      && !config.databaseUrl.includes('ssl=no-verify')
    )
      ? `${config.databaseUrl}?ssl=no-verify`
      : config.databaseUrl,
    {
      /*
       * Default Model options
       * @docs https://sequelize.org/v5/manual/getting-started.html#changing-the-default-model-options
       */
      define: {},
      dialect: 'postgres',
      storage: './db.postgres',
      logging: config.debug.includes('sequelize'),
      minifyAliases: true, // Otherwise, long names are truncated
    },
  );
}

module.exports = global.sequelize;
