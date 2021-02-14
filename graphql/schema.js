const { GraphQLSchema } = require('graphql');

/*
 * Generates the GraphQL route from a predefined query/schema.
 *
 * @see https://graphql.org/graphql-js/type/#graphqlschema
 */
module.exports = new GraphQLSchema({
  query: require('./query'),
  mutation: require('./mutation'),
});
