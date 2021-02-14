const fixtureRoles = require('../../fixtures/roles');
const log = require('../../lib/log');
const prepareFixtureForSeeder = require('../../util/fixture/prepareFixtureForSeeder');

module.exports = {
  up: async (queryInterface) => {
    log.inform(
      `Seeding ${fixtureRoles.length} fixture roles...`,
      'seeder',
    );

    return queryInterface.bulkInsert(
      'Roles',
      prepareFixtureForSeeder(fixtureRoles),
    );
  },

  down: async (queryInterface) => {
    log.inform('Seeding DOWN Role...', 'migration');

    return queryInterface.bulkDelete('Roles', null, {});
  },
};
