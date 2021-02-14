const faker = require('faker');
const titleCase = require('../strings/titleCase');

module.exports = (count, distilleryCount) => (
  Array(count).fill(null).map(() => ({
    name: titleCase(faker.lorem.words(faker.random.number({ min: 2, max: 10 }))),
    abv: faker.random.number({ min: 30, max: 90 }), // 60 proof -> 180 proof
    age: faker.random.number({ min: 0, max: 300 }), // 0yr -> 25yr
    description: faker.lorem.paragraph(faker.random.number({ min: 1, max: 5 })),
    distilleryId: faker.random.number({ min: 0, max: distilleryCount - 1 }),
  }))
);
