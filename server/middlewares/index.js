const express_cookieParser = require('./express.cookieParser');
const express_bodyParser_json = require('./express.bodyParser.json');
const express_static = require('./express.static');
const express_session = require('./express.session');
const passport_initialize = require('./passport.initialize');
const passport_session = require('./passport.session');

module.exports = {
  express_static,
  express_cookieParser,
  express_bodyParser_json,
  express_session,
  passport_initialize,
  passport_session,
};
