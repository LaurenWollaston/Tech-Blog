const express = require('express');
const router = express.Router();
const { User, Post } = require('../../models');

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

module.exports = router;
