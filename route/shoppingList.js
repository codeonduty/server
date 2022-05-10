// shoppingList.js --- API routes for the shopping list model

// Commentary:

// `/route/shoppingList.js' defines API endpoints that perform functions on the
// shopping list model in the database.

// `/route/shoppingList.js' defines endpoints to:
//
//   - Fetch a shopper's shopping lists
//   - Create a shopper's shopping list
//   - Delete a shopper's shopping list

// Libraries:

const express = require('express');

// Modules:

// Controllers
const fetchShoppingLists = require('../controller/list/shopping/fetchShoppingLists');
const createShoppingList = require('../controller/list/shopping/createShoppingList');
const deleteShoppingList = require('../controller/list/shopping/deleteShoppingList');

// Code:

// Instantiate Express router
const router = express.Router();

// @desc Fetch all shopping lists
// @route GET /api/shopper/list/shopping
// @access Public
router.get('/shopper/list/shopping', fetchShoppingLists);

// @desc Create a shopping list
// @route POST /api/shopper/list/shopping
// @access Privileged
router.post('/shopper/list/shopping', createShoppingList);

// @desc Delete a list using shopping list ID
// @route DELETE /api/shopper/list/:id
// @access Privileged
router.delete('/shopper/list/shopping', deleteShoppingList);

module.exports = router;

// shoppingList.js ends here
