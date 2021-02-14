const config = require('../../lib/config');
const getDbUrlParts = require('./getDbUrlParts');

module.exports = () => (
  `${getDbUrlParts(config.databaseUrl).dbBaseUrl}/postgres`
);
