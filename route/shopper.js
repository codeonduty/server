// shopper.js --- API routes for the shopper model

// Commentary:

// `/route/shopper.js' defines the API endpoints that perform functions on the
// shopper model in the database.

// `/route/shopper.js' defines endpoints to:
//
//   - Create a shopper
//   - Authenticate a shopper

// Libraries:

const express = require('express');

// Modules:

// Controllers
const createShopper = require('./../controller/shopper/createShopper');
const authenticateShopper = require('./../controller/shopper/authenticateShopper');

// Code:

// Modules

// Instantiate router
const router = express.Router();

// @desc Create a shopper
// @route POST /api/shopper/register
// @access Public
router.post('/shopper/register', createShopper);

// @desc Authenticate a shopper (fetch token)
// @route POST /api/shopper/login
// @access Public
router.post('/shopper/login', authenticateShopper);

module.exports = router;

// shopper.js ends here
