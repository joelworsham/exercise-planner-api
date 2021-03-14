const { GraphQLObjectType } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    exerciseCreate: require('./exercise/exerciseCreate'),
    exerciseDelete: require('./exercise/exerciseDelete'),
    exerciseUpdate: require('./exercise/exerciseUpdate'),
    logIn: require('./auth/logIn'),
    logOut: require('./auth/logOut'),
    signUp: require('./auth/signUp'),
    sessionCreate: require('./session/sessionCreate'),
    sessionDelete: require('./session/sessionDelete'),
    sessionUpdate: require('./session/sessionUpdate'),
    userCreate: require('./user/userCreate'),
    userDelete: require('./user/userDelete'),
    userUpdate: require('./user/userUpdate'),
  },
});
