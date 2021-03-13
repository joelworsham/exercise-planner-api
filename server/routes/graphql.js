const graphqlHTTP = require('express-graphql');
const schema = require('../../graphql/schema');
const config = require('../../lib/config');
const decorateContextWithAuth = require('../../util/passport/decorateContextWithAuth');

module.exports = {
  name: 'graphql',
  path: '/graphql',
  method: 'use', // "use" tells express to call app.use(), as this will produce multiple routes (get/post)
  handler: (req, res) => (
    graphqlHTTP({
      schema,
      graphiql: config.enableGaphiQL,
      context: decorateContextWithAuth(req, res)(),
    })(req, res)
  ),
};
