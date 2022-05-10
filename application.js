// application.js --- Express entry point

// Commentary:

// `application.js' is the entry point for modules that define the business
// logic of the shopping list server.

// Libraries:

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Modules:

// Routes
const shopperRoutes = require('./route/shopper');
const itemRoutes = require('./route/item');
const shoppingListRoutes = require('./route/shoppingList');
const wishListRoutes = require('./route/wishList');

// Code:

const app = express(); // Instantiate express application

// Pre-routing middleware
app.use(morgan('dev'));
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// Routing
app.use('/api', shopperRoutes);
app.use('/api', itemRoutes);
app.use('/api', shoppingListRoutes);
app.use('/api', wishListRoutes);
app.get('/', (request, response) => {
  response.send('API is running...');
});

module.exports = app;

// application.js ends here
