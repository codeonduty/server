// createShoppingList.js --- Function to create shopping list entry in database

// Libraries:

// Modules:

const ShoppingList = require('../../../model/list/shoppingList');

// Code:

const createShoppingList = async (request, response) => {
  // Extract shopping list details from request body
  const { username, items } = request.body;

  // Instantiate new shopping list
  const shoppingList = new ShoppingList({ username, items });

  // Create new shopping list entry in the database
  await ShoppingList.create(shoppingList)
    .then(() => {
      response.json({ error: 'Shopping list saved!' });
    })
    .catch((error) => {
      console.log(error);
      response
        .status(400)
        .json({ error: "Error! Shopping list couldn't be saved!" });
    });
};

module.exports = createShoppingList;

// createShoppingList.js ends here
