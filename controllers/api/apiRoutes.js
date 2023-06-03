const express = require('express');
const router = express.Router();
const { User, Post, Comment } = require('../../models');

router.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      const user = await User.findOne({ where: { username } });
  
      if (!user || !user.checkPassword(password)) {
        res.status(400).json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.username = user.username;
        req.session.user_id = user.id;
  
        res.status(200).json({ user: user, message: 'You are now logged in!' });
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
});

router.post('/post', async (req, res) => {
  try {
    const { title, post, userID } = req.body;
    var poster_id=userID;
    var text = post;
    const user = await User.findOne({ where: { id: userID } });
    if(!user){
      res.status(400).json({message:'ERROR: USER NOT FOUND'});
      return;
    }
    await Post.create({ title, text, poster_id });
    res.status(200).json({ message: 'Post successfully submitted!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/post/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    await Comment.destroy({ where: {parent_id: id} });
    await Post.destroy({where:{id}});
    res.status(200).json({ message: 'Post successfully deleted!' });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.put('/edit', async (req, res) => {
  try {
    const { title, post, post_id, userID } = req.body;
    var text = post;
    const user = await User.findOne({ where: { id: userID } });
    if(!user){
      res.status(400).json({message:'ERROR: USER NOT FOUND'});
      return;
    }
    await Post.update({ title, text},{where: {id: post_id}});
    res.status(200).json({ message: 'Post successfully updated!' });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.post('/comment', async (req, res) => {
  try {
    const { text, poster_id, parent_id} = req.body;
    const user = await User.findOne({ where: { id: poster_id } });
    const parent = await Post.findOne({where:{id:parent_id}});
    if(!user){
      res.status(400).json({message:'ERROR: USER NOT FOUND'});
      return;
    }
    if(!parent){
      res.status(404).json({message:'ERROR:THREAD NOT FOUND'})
    }
    await Comment.create({ text, poster_id, parent_id});
    res.status(200).json({ message: 'Comment successfully submitted!' });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
