// item.js --- API functions for the item model

// Commentary:

// `/route/item.js' defines API endpoints that perform functions on the
// item model in the database.

// `/route/item.js' defines endpoints to:
//
//   - Fetch an item
//   - Fetch the catalogue of items
//   - Update an item

// Libraries:

const express = require('express');

// Modules:

// Controllers
const fetchCatalogue = require('./../controller/item/fetchCatalogue');
const fetchItem = require('./../controller/item/fetchItem');
const updateItem = require('./../controller/item/updateItem');

// Code:

// Instantiate router
const router = express.Router();

// @desc Fetch all items
// @route GET /api/catalogue
// @access Public
router.get('/item/catalogue', fetchCatalogue);

// @desc Fetch item using item's ID
// @route GET /api/item/:id
// @access Public
router.get('/item/:id', fetchItem);

// @desc Update item using item's ID
// @route PUT /api/item/:id
// @access Public
router.put('/item/:id', updateItem);

module.exports = router;

// item.js ends here
