// shoppingList.js --- Shopping list schema in the database

// Libraries:

const mongoose = require('mongoose');

// Modules:

// None

// Code:

const ShoppingListSchema = mongoose.Schema(
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

const ShoppingList = mongoose.model('Shopping List', ShoppingListSchema);

module.exports = ShoppingList;

// shoppingList.js ends here
