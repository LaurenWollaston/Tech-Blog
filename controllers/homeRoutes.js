const express = require('express');
const router = express.Router();
const { Post, User } = require('../models');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['username'],
        },
      ],
      order: [['date_created', 'DESC']],
    });

    const posts = await postData.map((post) =>
      post.get({ plain: true })
    );
    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/dashboard', async (req, res) => {
  if (req.session.loggedIn){
  try {
    const postData = await Post.findAll({
      where: { poster_id: req.session.user_id},
      order: [['date_created', 'DESC']],
    });
    const userData = await User.findOne({where: {id: req.session.user_id}});
    const user = userData.get({ plain: true });
    const posts = await postData.map((post) =>
      post.get({ plain: true })
    );
    var personalDashboard = true;
    res.render('dashboard', {
      posts, user,
      loggedIn: req.session.loggedIn,
      personalDashboard,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  }
  else{
    res.redirect(`/login`);
  }
});

router.get('/login', (req, res) => {
  res.render('login', { loggedIn: req.session.loggedIn });
});
router.get('/user/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const userData = await User.findOne({ where: { username } });
    const user = userData.get({ plain: true });
    const postData = await Post.findAll({
      where: { poster_id: user.id},
      order: [['date_created', 'DESC']],
    });
    const posts = await postData.map((post) =>
      post.get({ plain: true })
    );
    if (!userData) {
      res.status(404).render('error', { message: 'User profile not found', loggedIn: req.session.loggedIn });
      return;
    }
    res.render('dashboard', {
      posts, user,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/profile', async (req, res) => {
  if(req.session.loggedIn){
    try {
      const username = req.session.user_id;
      const userData = await User.findOne({ where: username});
      if (!userData) {
        res.status(404).render('error', { message: 'User not found', loggedIn: req.session.loggedIn });
        return;
      }
      const user = userData.get({ plain: true });
      res.render('profile', { user, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
} else{
  res.redirect('/login');
}
});

router.get('/post', async (req, res) => {
  if (req.session.loggedIn){
  try {
    const userID = req.session.user_id;
    res.render('post', {
      userID,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  }
  else{
    res.redirect(`/login`);
  }
});

module.exports = router;