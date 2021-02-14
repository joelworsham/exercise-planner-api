const express = require('express');
const applyMiddlewares = require('../util/router/applyMiddlewares');
const applyRoutes = require('../util/router/applyRoutes');
const log = require('../lib/log');
const config = require('../lib/config');

const {
  express_static,
  express_cookieParser,
  express_bodyParser_json,
  express_session,
  passport_initialize,
  passport_session,
} = require('./middlewares');

const {
  graphql,
} = require('./routes');

// Init server
const app = express();

// Middlewares
applyMiddlewares(app, [
  express_static,
  express_cookieParser,
  express_bodyParser_json,
  express_session,
  passport_initialize,
  passport_session,
]);

// Routes
applyRoutes(app, [
  graphql,
]);

// Start server
app.listen(config.port, config.host, () => {
  log.inform(`Running API server at => ${config.host}:${config.port}`, 'server');
});
