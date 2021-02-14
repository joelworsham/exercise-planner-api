const { GraphQLObjectType } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    logIn: require('./auth/logIn'),
    logOut: require('./auth/logOut'),
    signUp: require('./auth/signUp'),
    createUser: require('./user/createUser'),
    updateUser: require('./user/updateUser'),
    deleteUser: require('./user/deleteUser'),
  },
});
