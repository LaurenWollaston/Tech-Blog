const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {
  foreignKey: 'poster_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Post };
