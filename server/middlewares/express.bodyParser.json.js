const bodyParser = require('body-parser');

// parse body for all subsequent middleware/requests
module.exports = {
  name: 'express.bodyParser.json',
  middleware: () => (
    bodyParser.json()
  ),
};
