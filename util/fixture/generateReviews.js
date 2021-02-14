const faker = require('faker');

module.exports = (count, userCount, whiskeyCount) => (
  Array(count).fill(null).map(() => ({
    rating: faker.random.number({ min: 1, max: 100 }),
    description: faker.lorem.paragraph(faker.random.number({ min: 1, max: 5 })),
    userId: faker.random.number({ min: 0, max: userCount - 1 }),
    whiskeyId: faker.random.number({ min: 0, max: whiskeyCount - 1 }),
  }))
);
