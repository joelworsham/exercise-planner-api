const passport = require('passport');
const localStrategy = require('./strategy.local');
const serializeUser = require('./serializeUser');
const deserializeUser = require('./deserializeUser');

passport.use(localStrategy);

passport.serializeUser(
  serializeUser,
);

passport.deserializeUser(
  deserializeUser,
);

module.exports = passport;
