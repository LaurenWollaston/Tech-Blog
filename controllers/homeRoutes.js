const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('homepage', { loggedIn: req.user });
});
router.get('/login', (req, res) => {
  res.render('login', { loggedIn: req.user });
});

module.exports = router;