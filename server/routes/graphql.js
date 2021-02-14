const graphqlHTTP = require('express-graphql');
const schema = require('../../graphql/schema');
const config = require('../../lib/config');
const decorateContextWithAuth = require('../../util/passport/decorateContextWithAuth');

module.exports = {
  name: 'graphql',
  path: '/graphql',
  method: 'post',
  handler: (req, res) => (
    graphqlHTTP({
      schema,
      graphiql: config.enableGaphiQL,
      context: decorateContextWithAuth(req, res)(),
    })(req, res)
  ),
};
