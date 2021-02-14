const session = require('express-session');
const PgSession = require('connect-pg-simple')(session);
const pg = require('pg');
const getDbUrlParts = require('../../util/postgres/getDbUrlParts');
const config = require('../../lib/config');

// use express session, using the secret
module.exports = {
  name: 'express.session',
  middleware: () => {
    const { dbName, dbUser, dbPassword, dbPort } = getDbUrlParts(config.databaseUrl);

    // @see https://www.npmjs.com/package/pg-pool#use
    const pgPool = new pg.Pool({
      database: dbName,
      user: dbUser,
      password: dbPassword,
      port: dbPort,
      ssl: config.environment !== 'development',
    });

    // @see https://www.npmjs.com/package/express-session
    return session({
      // @see https://www.npmjs.com/package/connect-pg-simple#usage
      store: new PgSession({
        pool: pgPool,
        tableName: 'session',
      }),
      name: 'connect.ep_sid',
      secret: config.cookieSecret,
      resave: false,
      cookie: {
        maxAge: config.environment !== 'development' ?
          1000 * 60 * 60 * 24 * 30 : //       PROD: 30 days
          1000 * 60 * 60 * 24 * 365 * 100, // DEV:  100 years
        secure: config.environment !== 'development',
      },
      saveUninitialized: false,

      // TODO do I need this?
      // @see https://jkettmann.com/authentication-and-authorization-with-graphql-and-passport/
      // genid: (req) => uuid(),
    });
  },
};
