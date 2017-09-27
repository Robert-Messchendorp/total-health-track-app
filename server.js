// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
// const favicon = require('serve-favicon');
// const logger = require('morgan');
// const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

// Get our API routes
const api = require('./server/routes/api');
const userRoutes = require('./server/routes/user');
const applicationComponentRoutes = require('./server/routes/page');
const recipesRoutes = require('./server/routes/recipe');

const app = express();

mongoose.Promise = global.Promise; // To make the db connect even though User model is already called



var db = mongoose.connection;
console.log("DB Connection: " + db);

// Parsers for POST dataß
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS'); // PATCH Updates a resource, PUT entirely replaces a resource
  next();
});

// Set our api routes
app.use('/api', api);
app.use('/users', userRoutes);
app.use('/ams', applicationComponentRoutes);
app.use('/recipes', recipesRoutes);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));