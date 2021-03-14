const { GraphQLNonNull } = require('graphql');
const { Exercise } = require('../../../sequelize/models');
const ExerciseType = require('../../types/Exercise/Exercise');
const ExerciseInput = require('../../types/Exercise/ExerciseInputFactory');
const updateResolver = require('../../resolvers/updateResolverFactory');

module.exports = {
  type: ExerciseType,
  args: {
    exercise: {
      type: GraphQLNonNull(ExerciseInput(
        'UpdateExerciseInput',
        { exclude: ['createdAt', 'updatedAt'], require: ['id'] },
      )),
    },
  },
  resolve: updateResolver(Exercise),
};
