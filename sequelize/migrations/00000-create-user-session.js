const log = require('../../lib/log');

module.exports = {
  up: async (queryInterface) => {
    log.inform('Migrating UP User Session...', 'migration');

    // Taken from ./node_modules/connect-pg-simple/table.sql
    // connect-pg-simple@6.1.0
    return queryInterface.sequelize.query(
      `
      CREATE TABLE "session" (
        "sid" varchar NOT NULL COLLATE "default",
        "sess" json NOT NULL,
        "expire" timestamp(6) NOT NULL
      )
      WITH (OIDS=FALSE);

      ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

      CREATE INDEX "IDX_session_expire" ON "session" ("expire");
      `,
    );
  },
  down: async (queryInterface) => {
    log.inform('Migrating DOWN User Sessions...', 'migration');

    return queryInterface.dropTable('UserSessions');
  },
};
