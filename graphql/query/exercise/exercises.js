const { Exercise } = require('../../../sequelize/models');
const ExerciseType = require('../../types/Exercise/Exercise');
const ExerciseInput = require('../../types/Exercise/ExerciseInputFactory');
const pluralQuery = require('../../../util/graphql/pluralQueryFactory');

module.exports = pluralQuery(
  Exercise,
  ExerciseType,
  ExerciseInput('ExerciseQueryInput', { require: [] }),
  {
    noneFoundMessage: (exercise) => `No exercises exist with the state: ${JSON.stringify(exercise)}`,
  },
);
