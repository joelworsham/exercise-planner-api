const getItemBy = require('../util/fixture/getItemBy');

module.exports = [
  {
    id: 1,
    roleId: 'administrator',
    userId: getItemBy(require('./users'), 'email', 'joelworsham@gmail.com').id,
  },
];
