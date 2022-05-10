// authenticateShopper.js --- Function to authenticate shopper

// Libraries:

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Modules:

const config = require('./../../config');
const Shopper = require('./../../model/shopper');

// Code:

const authenticateShopper = async (request, response) => {
  // Extract shopper details from  request body
  const { username, password } = request.body;

  try {
    // Find existing shopper in database
    const existingShopper = await Shopper.findOne({ username });

    // Handle non-existent shopper
    if (!existingShopper)
      return response
        .status(401)
        .json({ error: 'Invalid username or password!' });

    // Validate password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingShopper.password
    );
    if (!isPasswordCorrect)
      return response.json({ error: 'Invalid username or password!' });

    // Generate token
    const token = jwt.sign({ username: username }, config.JWT_SECRET, {
      expiresIn: config.MAXIMUM_TOKEN_AGE,
    });

    // Send success response
    response.status(200).json({
      result: existingShopper,
      token: token,
      error: null,
      message: 'Shopper login successful!',
    });
  } catch (error) {
    response.status(401).json({ error: 'Shopper login failed!' });

    console.log(error);
  }
};

module.exports = authenticateShopper;

// authenticateShopper.js ends here
