const faker = require('faker');

module.exports = (count) => (
  Array(count).fill(null).map(() => ({
    name: faker.company.companyName(),
    location: `${faker.address.city('{{name.firstName}}')}, ${faker.address.state(true)}`,
    description: faker.company.catchPhrase(),
  }))
);
