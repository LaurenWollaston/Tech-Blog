const User = require('./User');
const Story = require('./Post');

User.hasMany(Post, {
  foreignKey: 'poster_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Project };
