// updateItem.js --- Function to update item in database

// Libraries:

// None

// Modules

const Item = require('./../../model/item');

// Code:

const updateItem = async (request, response) => {
  // Extract item from request
  const { _id, stock } = request.body;

  // Handle non-existent item
  const existingItem = await Item.findById(_id);
  if (!existingItem)
    response.status(404).json({ message: 'Item does not exist!' });

  // Find + update item in databse
  const oldItem = await Item.findOneAndUpdate({ _id }, { stock });

  // Handle failed update
  if (!oldItem) console.log('Item update failed');
};

module.exports = updateItem;

// updateItem.js ends here
