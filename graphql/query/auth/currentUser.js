const User = require('../../types/User/User');

module.exports = {
  type: User,
  resolve: async (_, _args, context) => (
    context.getUser()
  ),
};
