/**
 * Parses a postgres database URL and returns the pieces.
 *
 * @param {String} dbUrl Database URL
 * @returns {{dbPort: *, dbBaseUrl: *, dbName: *, dbUser: *, dbHost: *, dbPassword: *}}
 */
module.exports = (dbUrl) => {
  const [
    // eslint-disable-next-line no-unused-vars
    _url,
    dbUser,
    dbPassword,
    dbHost,
    dbPort,
    dbName,
  ] = dbUrl.match(/:\/\/(\w+):(\w*)@(.*?):([0-9]+)\/(\w+)$/);

  // Get base URL
  const parts = dbUrl.split('/');
  parts.pop();
  const dbBaseUrl = parts.join('/');

  return { dbUser, dbPassword, dbHost, dbPort, dbName, dbBaseUrl };
};
