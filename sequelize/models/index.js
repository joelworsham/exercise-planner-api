const Activity = require('./Activity');
const ActivityTag = require('./ActivityTag');
const Tag = require('./Tag');
const Role = require('./Role');
const User = require('./User');
const UserRole = require('./UserRole');

// ESTABLISH ALL MODEL RELATIONSHIPS
// @see https://sequelize.org/master/class/lib/associations/base.js~Association.html

// ACTIVITY

// Many-Many Activity <--> ActivityTag <--> Tag
Activity.belongsToMany(Tag, { through: ActivityTag, foreignKey: 'activityId' });
Tag.belongsToMany(Activity, { through: ActivityTag, foreignKey: 'tagId' });

// USER

// Many-Many User <--> UserRole <--> Role
User.belongsToMany(Role, { through: UserRole, foreignKey: 'userId' });
Role.belongsToMany(User, { through: UserRole, foreignKey: 'roleId' });

module.exports = {
  Activity,
  ActivityTag,
  Role,
  Tag,
  User,
  UserRole,
};
