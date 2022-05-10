// shopper.js --- Shopper schema in the database

// Libraries:

const mongoose = require('mongoose');

// Modules:

// None

// Code:

const ShopperSchema = mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      unique: true,
      required: [true, 'Username is required!'],
    },

    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      match: [/.+\@.+\..+/, 'Please fill a valid email address.'],
      required: [true, 'Email is required!'],
    },

    password: {
      type: String,
      trim: true,
      minLength: [8, 'Minimum password length is 8 characters'],
      required: false, // Since a person can also use Google account
    },

    googleID: {
      type: String,
      required: false, // Since a person can register without using Google
    },
  },
  {
    timestamps: true,
  }
);

const Shopper = mongoose.model('Shopper', ShopperSchema);

module.exports = Shopper;

// shopper.js ends here
