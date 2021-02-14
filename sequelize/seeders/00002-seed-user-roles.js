const fixtureUserRoles = require('../../fixtures/userRoles');
const log = require('../../lib/log');
const prepareFixtureForSeeder = require('../../util/fixture/prepareFixtureForSeeder');

module.exports = {
  up: async (queryInterface) => {
    log.inform(
      `Seeding ${fixtureUserRoles.length} fixture user roles...`,
      'seeder',
    );

    return queryInterface.bulkInsert(
      'UserRoles',
      prepareFixtureForSeeder(fixtureUserRoles),
    );
  },

  down: async (queryInterface) => {
    log.inform('Seeding DOWN User Role...', 'migration');

    return queryInterface.bulkDelete('UserRoles', null, {});
  },
};
