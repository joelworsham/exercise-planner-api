const Activity = require('./Activity');
const ActivityTag = require('./ActivityTag');
const Role = require('./Role');
const Session = require('./Session');
const SessionActivity = require('./SessionActivity');
const Tag = require('./Tag');
const User = require('./User');
const UserRole = require('./UserRole');

// ESTABLISH ALL MODEL RELATIONSHIPS
// @see https://sequelize.org/master/class/lib/associations/base.js~Association.html

// ACTIVITY

// Activity <-->> ActivityTag <<--> Tag
Activity.belongsToMany(Tag, { through: ActivityTag, foreignKey: 'activityId' });
Tag.belongsToMany(Activity, { through: ActivityTag, foreignKey: 'tagId' });

// SESSION

// Session <-->> SessionActivity <<--> Activity
Session.belongsToMany(Activity, {
  as: 'Activities',
  foreignKey: 'sessionId',
  through: SessionActivity,
});
Activity.belongsToMany(Session, {
  foreignKey: 'activityId',
  through: SessionActivity,
});

// USER

// Many-Many User <--> UserRole <--> Role
User.belongsToMany(Role, { through: UserRole, foreignKey: 'userId' });
Role.belongsToMany(User, { through: UserRole, foreignKey: 'roleId' });

module.exports = {
  Activity,
  ActivityTag,
  Role,
  Session,
  SessionActivity,
  Tag,
  User,
  UserRole,
};
