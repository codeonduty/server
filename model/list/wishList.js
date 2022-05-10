// wishList.js --- Wishlist schema in the database

// Libraries:

const mongoose = require('mongoose');

// Modules:

// None

// Code:

const WishListSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      ref: 'Shopper',
    },

    items: [
      {
        item: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Item',
        },

        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const WishList = mongoose.model('Wishlist', WishListSchema);

module.exports = WishList;

// shoppingList.js ends here
