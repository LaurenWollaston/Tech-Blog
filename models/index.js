const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {
  foreignKey: 'poster_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'poster_id',
  as: 'user',
});

module.exports = { User, Post };
