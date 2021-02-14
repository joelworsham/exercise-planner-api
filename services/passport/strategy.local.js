const { GraphQLLocalStrategy } = require('graphql-passport');
const { User } = require('../../sequelize/models');

// Based off https://jkettmann.com/password-based-authentication-with-graphql-and-passport/
module.exports = new GraphQLLocalStrategy(
  async (email, password, done) => {
    let error = null;
    const user = await User.scope('authenticate').findOne({
      where: { email },
    });

    // Could not find a user
    if (!user) {
      error = new Error('Could not find a user with that email address.');
    }

    // Password does not match
    if (user && !(await user.isValidPassword(password))) {
      error = new Error('Password is incorrect.');
    }

    done(error, user);
  },
);
