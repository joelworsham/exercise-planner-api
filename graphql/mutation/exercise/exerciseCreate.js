const { GraphQLNonNull } = require('graphql');
const { Exercise } = require('../../../sequelize/models');
const ExerciseType = require('../../types/Exercise/Exercise');
const ExerciseInput = require('../../types/Exercise/ExerciseInputFactory');
const createResolver = require('../../resolvers/createResolverFactory');

module.exports = {
  type: ExerciseType,
  args: {
    exercise: {
      type: GraphQLNonNull(ExerciseInput('CreateExerciseInput')),
    },
  },
  resolve: createResolver(Exercise),
};
