// database.js --- Mongoose database entry point

// Commentary:

// `database.js' is the entry point for modules that define the database
// base of the shopping list server.

// Libraries:

const mongoose = require('mongoose');

// Modules:

// None

// Code:

// Use JavaScript Promise instead
mongoose.Promise = global.Promise;

// Handle database connection response
mongoose.connection
  .once('open', function () {
    console.log('Database connection successful...');
  })
  .on('error', () => {
    console.log('Database connection failure...', error);
  });

module.exports = mongoose;

// database.js ends here
