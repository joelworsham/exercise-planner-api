const cookieParser = require('cookie-parser');
// const config = require('../../lib/config');

// parse cookie for all subsequent middleware/requests
module.exports = {
  name: 'express.cookieParser',
  middleware: () => (
    cookieParser(
      // TODO determine if cookie secret is necessary
      // config.cookieSecret
    )
  ),
};
