const express = require('express');
const applyMiddlewares = require('../util/router/applyMiddlewares');
const applyRoutes = require('../util/router/applyRoutes');
const log = require('../lib/log');
const config = require('../lib/config');

const {
  express_bodyParser_json,
  express_cookieParser,
  express_cors,
  express_session,
  express_static,
  passport_initialize,
  passport_session,
} = require('./middlewares');

const {
  graphql,
} = require('./routes');

// Init server
const app = express();

// Add CORS preflight
app.options('*', express_cors.middleware());

// Middlewares
applyMiddlewares(app, [
  express_bodyParser_json,
  express_cookieParser,
  express_cors,
  express_session,
  express_static,
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
