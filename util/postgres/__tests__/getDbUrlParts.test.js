const getDbUrlParts = require('../getDbUrlParts');

const parts = {
  user: 'user',
  pass: 'pass',
  host: 'host',
  port: '1234',
  name: 'name'
};

let dbUrl = `postgres://${parts.user}:${parts.pass}@${parts.host}:${parts.port}/${parts.name}`

describe('Get DB URL Parts', () => {
  it('returns an object with individual parts', () => {
    expect(getDbUrlParts(dbUrl)).toEqual({
      dbBaseUrl: `postgres://${parts.user}:${parts.pass}@${parts.host}:${parts.port}`,
      dbPassword: parts.pass,
      dbHost: parts.host,
      dbName: parts.name,
      dbPort: parts.port,
      dbUser: parts.user,
    });
  });
});
