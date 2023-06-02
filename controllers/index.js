const express = require('express');
const session = require('express-session');
// const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const app = express();

// Routes
// app.use('/api', apiRoutes);
app.use('/', homeRoutes);


module.exports = app;
