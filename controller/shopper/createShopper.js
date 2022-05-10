// createShopper.js --- Function to create shopper entry in database

// Libraries:

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Modules:

const config = require('./../../config');
const Shopper = require('./../../model/shopper');

// Code:

const createShopper = async (request, response) => {
  // Extract shopper details from request body
  const { username, email, password } = request.body;

  try {
    // Find existing shopper in database
    const existingUser = await Shopper.findOne({ username });

    // Handle existing shopper collision
    if (existingUser)
      return response.status(400).json({ error: 'Shopper already exists!' });

    // Protect password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create new shopper entry in database
    const result = await Shopper.create({
      username: username,
      email: email,
      password: hashedPassword,
    });

    // Generate token
    const token = jwt.sign({ username: result.username }, config.JWT_SECRET, {
      expiresIn: config.MAXIMUM_TOKEN_AGE,
    });

    // Send response
    response.status(201).json({
      result,
      token: token,
      error: null,
      message: 'Shopper registration successful!',
    });
  } catch (error) {
    response.status(400).json({ error: 'Shopper registration failed!' });

    console.log(error);
  }
};

module.exports = createShopper;

// createShoppper.js ends here
