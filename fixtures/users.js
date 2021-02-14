const { fakerPassword } = require('../util/fixture/faker');

module.exports = [
  {
    id: 1,
    fullName: 'Joel Worsham',
    email: 'joelworsham@gmail.com',
    status: 'CONFIRMED',
    password: fakerPassword(),
  },
];
