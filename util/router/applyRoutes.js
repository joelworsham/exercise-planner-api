const log = require('../../lib/log');

/**
 * Applies all routes to the Express app
 *
 * @param {Function} app Express application to apply routes to
 * @param {Array} routes All routes to apply to the app
 */
module.exports = (app, routes) => {
  routes.forEach(({ path, handler, method }) => {
    log.inform(
      `Initializing route: ${method.toUpperCase()} ${path}`,
      'server',
    );

    if (!(method in app)) {
      throw new Error(`Unknown Express app method: ${method}`);
    }

    if (typeof handler === 'function') {
      // handler is a single callback
      app[method](path, handler);
    } else {
      // handler is an array of callbacks
      app[method](path, ...handler);
    }
  });
};
