const faker = require('faker');
const { fakerPassword, fakerUserStatus } = require('./faker');

module.exports = (count) => (
  Array(count).fill(null).map(() => ({
    fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
    email: faker.internet.exampleEmail(),
    status: fakerUserStatus(),
    password: fakerPassword(),
  }))
);
