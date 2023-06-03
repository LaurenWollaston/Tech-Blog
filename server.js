const path = require('path');
const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const helpers = require('./utils/helpers');
const routes = require('./controllers');
const exphbs = require('express-handlebars');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', exphbs({ helpers }));
app.set('view engine', 'handlebars');

// Express session
app.use(
  session({
    secret: 'Z@nmXEwsvR2/Zk0]LbqBE9Jop-dybZ',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, 
    },
    store: new SequelizeStore({
      db: sequelize,
    }),
  })
);



// Routes
app.use('/', routes);


// Start server
sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});