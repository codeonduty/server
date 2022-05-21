// seeder.js --- Script to import sample data into database

// Code:

// Libraries
const mongoose = require('mongoose');

// Modules
const config = require('../config');
const Shopper = require('./../model/shopper');
const Item = require('./../model/item');
//const List = require('./../model/list');
const shoppers = require('./shopper');
const items = require('./item');

// Initialize database
mongoose.Promise = global.Promise; // Uses JavaScript Promise instead
mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handle database connection response
mongoose.connection
  .once('open', function () {
    console.log('Database connection successful...');
  })
  .on('error', (error) => {
    console.log('Database connection failure...');
    console.log(error);
    process.exit(1);
  });

// Remove seed data from database
const unseedData = async () => {
  try {
    await Shopper.deleteMany();
    await Item.deleteMany();
    //await List.deleteMany();

    console.info('Seed data removed!');
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

// Add seed data from database
const seedData = async () => {
  try {
    await Shopper.deleteMany();
    await Item.deleteMany();
    //await List.deleteMany();

    const seededShoppers = await Shopper.insertMany(shoppers);

    const sampleItems = items.map((item) => {
      return { ...item, shopper: seededShoppers[0] };
    });

    await Item.insertMany(sampleItems);

    console.info('Seed data imported!');
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  unseedData();
} else {
  seedData();
}

// seeder.js ends here
