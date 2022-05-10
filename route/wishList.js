// wishList.js --- API routes for the shopping list model

// Commentary:

// `/route/wishList.js' defines API endpoints that perform functions on the
// wishlist model in the database.

// `/route/wishList.js' defines endpoints to:
//
//   - Fetch a shopper's wishlists
//   - Create a shopper's wishlist
//   - Update a shopper's wishlist
//   - Delete a shopper's wishlist

// Libraries:

const express = require('express');

// Modules:

// Controllers
const fetchWishList = require('../controller/list/wish/fetchWishList');
const createWishList = require('../controller/list/wish/createWishList');
const updateWishList = require('../controller/list/wish/updateWishList');
const deleteWishList = require('../controller/list/wish/deleteWishList');

// Code:

// Instantiate Express router
const router = express.Router();

// @desc Create a wishlist
// @route POST /api/shopper/list/wish
// @access Privileged
router.post('/shopper/list/wish', createWishList);

// @desc Fetch all wishlists
// @route GET /api/shopper/list/wish
// @access Priveleged
router.get('/shopper/list/wish', fetchWishList);

// @desc Update a wishlist
// @route PUT /api/shopper/list/wish
// @access Priveleged
router.put('/shopper/list/wish', updateWishList);

// @desc Delete a list using wishlist ID
// @route DELETE /api/shopper/list/:id
// @access Privileged
router.delete('/shopper/list/wish', deleteWishList);

module.exports = router;

// wishList.js ends here
