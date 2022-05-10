// server.js --- Server entry point

// Commentary:

// `server.js' is the entry point for modules that define the server.

// - `server.js' initializes the `mongoose' database.
// - `server.js' initializes the `express' application.

// Libraries:

// None

// Modules:

const config = require('./config');
const database = require('./database');
const server = require('./application');

// Code:

// Initialize database
database.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Initialize server
server.listen(config.PORT, (error) => {
  if (error) console.log(error);

  console.info('Server initiated on port %s...', config.PORT);
});

// server.js ends here
