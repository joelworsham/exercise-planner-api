const Exercise = require('./Exercise');
const ExerciseTag = require('./ExerciseTag');
const Role = require('./Role');
const Session = require('./Session');
const SessionActivity = require('./SessionActivity');
const SessionActivityExercise = require('./SessionActivityExercise');
const Tag = require('./Tag');
const User = require('./User');
const UserRole = require('./UserRole');

// ESTABLISH ALL MODEL RELATIONSHIPS
// @see https://sequelize.org/master/class/lib/associations/base.js~Association.html

// EXERCISE

// Exercise <-->> ExerciseTag <<--> Tag
Exercise.belongsToMany(Tag, { through: ExerciseTag, foreignKey: 'exerciseId' });
Tag.belongsToMany(Exercise, { through: ExerciseTag, foreignKey: 'tagId' });

// SESSION

// Session <-->> SessionActivity
Session.hasMany(SessionActivity, {
  as: 'Activities',
  foreignKey: 'sessionId',
});
SessionActivity.belongsTo(Session, {
  foreignKey: 'sessionId',
});

// SessionActivity <-->> SessionActivityExercise
SessionActivity.hasMany(SessionActivityExercise, {
  as: 'Exercises',
  foreignKey: 'sessionActivityId',
});
SessionActivityExercise.belongsTo(SessionActivity, {
  foreignKey: 'sessionActivityId',
});

// USER

// Many-Many User <--> UserRole <--> Role
User.belongsToMany(Role, { through: UserRole, foreignKey: 'userId' });
Role.belongsToMany(User, { through: UserRole, foreignKey: 'roleId' });

module.exports = {
  Exercise,
  ExerciseTag,
  Role,
  Session,
  SessionActivity,
  SessionActivityExercise,
  Tag,
  User,
  UserRole,
};
