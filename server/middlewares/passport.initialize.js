const passport = require('../../services/passport');

// initializes passport middlewares
module.exports = {
  name: 'passport.initialize',
  middleware: () => (
    passport.initialize()
  ),
};
