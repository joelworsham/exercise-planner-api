const { buildContext } = require('graphql-passport');

module.exports = (req, res) => (
  (context = {}) => ({
    ...context,

    // adds passport context to graphql resolvers
    ...buildContext({ req, res }),

    // additional auth helpers
    getUser: () => req.user,
    logout: () => req.logout(),
  })
);
