const fixtureUsers = require('../../fixtures/users');
const log = require('../../lib/log');
const encryptUserPasswords = require('../../util/fixture/encryptUserPasswords');
const prepareFixtureForSeeder = require('../../util/fixture/prepareFixtureForSeeder');

module.exports = {
  up: async (queryInterface) => {
    log.inform(
      `Seeding ${fixtureUsers.length} fixture users...`,
      'seeder',
    );

    return queryInterface.bulkInsert(
      'Users',
      prepareFixtureForSeeder(
        await encryptUserPasswords(fixtureUsers)
      ),
    );
  },

  down: async (queryInterface) => {
    log.inform('Seeding DOWN Users...', 'migration');

    return queryInterface.bulkDelete('Users', null, {});
  },
};
