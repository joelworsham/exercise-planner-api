/**
 * Adds some necessary, default properties to fixture data.
 *
 * @param {Array} fixtureData
 * @returns {Array}
 */
const prepareFixtureForSeeder = (fixtureData) => (
  fixtureData.map((item) => ({
    createdAt: new Date(),
    updatedAt: new Date(),
    ...item,
  }))
);

module.exports = prepareFixtureForSeeder;
