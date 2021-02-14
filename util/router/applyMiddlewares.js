const log = require('../../lib/log');

/**
 * Applies all middlewares to the Express app
 *
 * @param {Function} app Express application to apply middlewares to
 * @param {Array} middlewares All middlewares to apply to the app
 */
module.exports = (app, middlewares) => {
  middlewares.forEach(({ name, middleware }) => {
    log.inform(`Initializing middleware: ${name}`, 'server');
    app.use(middleware());
  });
};
