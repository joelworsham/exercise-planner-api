const passport = require('../../services/passport');

// starts the Passport auth session
module.exports = {
  name: 'passport.session',
  middleware: () => (
    passport.session()
  ),
};
