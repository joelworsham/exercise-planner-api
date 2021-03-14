const { Model } = require('sequelize');
const getDefaultModelOptions = require('../../util/sequelize/getDefaultModelOptions');
const getDefaultModelAttributes = require('../../util/sequelize/getDefaultModelAttributes');
const initializeModel = require('../../util/sequelize/initializeModel');

/**
 * ExerciseTag model.
 *
 * Provides the "belongsToMany" association between an exercise and a tag.
 *
 * @docs https://sequelize.org/v5/manual/getting-started.html#modeling-a-table
 * @docs https://sequelize.org/v5/manual/models-definition.html
 * @type {Model}
 */
class ExerciseTag extends Model {
}

module.exports = initializeModel(
  getDefaultModelAttributes(),
  getDefaultModelOptions(),
  {
    description: 'Provides the "belongsToMany" association between an exercise and a tag.',
  },
)(ExerciseTag);
