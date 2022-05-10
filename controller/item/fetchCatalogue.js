// fetchCatalogue.js --- Function to fetch all items in database

// Libraries:

// None

// Modules:

const Item = require('./../../model/item');

// Code:

const fetchCatalogue = async (request, response) => {
  // Find catalogue in database
  const catalogue = await Item.find({});

  // Send catalogue in response
  response.json(catalogue);
};

module.exports = fetchCatalogue;

// fetchCatalogue.js ends here
