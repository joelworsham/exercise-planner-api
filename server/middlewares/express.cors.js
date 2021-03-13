const cors = require('cors');

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:5000',
  'http://localhost:8080',
  'https://exercise-planner-prod.herokuapp.com',
  'https://exercise-planner-stg.herokuapp.com',
];

// enforce SSL for all subsequent middleware/requests
module.exports = {
  name: 'express.cors',
  middleware: () => (
    cors({
      credentials: true,
      origin: allowedOrigins,
    })
  ),
};
