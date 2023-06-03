const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: 'poster_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'poster_id',
  as: 'user',
});

User.hasMany(Comment, {
  foreignKey: 'poster_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'poster_id',
  as: 'user',
});

Post.hasMany(Comment, {
  foreignKey: 'poster_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
  foreignKey: 'parent_id',
  as: 'parent',
});

module.exports = { User, Post, Comment };
