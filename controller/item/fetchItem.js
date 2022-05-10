// fetchItem.js --- Function to fetch item from database

// Libraries:

// None

// Modules:

const Item = require('./../../model/item');

// Code:

const fetchItem = async (request, response) => {
  // Find item in database
  const item = await Item.findById(request.params.id);

  // Send item in response
  if (item) {
    response.json(item);
  } else {
    // Handle non-existent item
    response.status(404).json({ message: 'Item not found!' });
  }
};

module.exports = fetchItem;

// fetchItem.js ends here
