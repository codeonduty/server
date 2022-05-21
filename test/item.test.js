// item.test.js --- Test suite for item routes

// Libraries:

const supertest = require('supertest');
const mongoose = require('mongoose');

// Modules:

const config = require('./../config');
const application = require('./../application');
const database = require('./../database');

// Code:

describe('Item', () => {
  beforeAll(async () => {
    // Initialize database
    database.connect(config.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await database.disconnect();
    await database.connection.close();
  });

  describe('GET /api/item/:id', () => {
    describe('Given item does not exist...', () => {
      it('...returns 404 status status code', async () => {
        const itemID = mongoose.Types.ObjectId('reqwfdsfasfd');

        await supertest(application).get(`/api/item/${itemID}`).expect(404);
      });
    });

    describe('Given item exists...', () => {
      it('...returns item from database', async () => {
        const itemID = '6288745a63b40ec0ad80bb26';

        const itemName = 'Airpods Wireless Bluetooth Headphones';

        const { body, statusCode } = await supertest(application).get(
          `/api/item/${itemID}`
        );

        expect(statusCode).toBe(200);
        expect(body.name).toBe(itemName);
      });
    });
  });

  describe('GET /api/item/catalogue', () => {
    describe('Given...', () => {
      it('...returns catalogue from database', async () => {
        const { body, statusCode } = await supertest(application).get(
          '/api/item/catalogue'
        );

        console.log(body);
        expect(statusCode).toBe(200);
        //expect(body).toBe();
      });
    });
  });

  describe('PUT /api/item/:id', () => {
    describe('Given item does not exist...', () => {
      it('...returns 404 status status code', async () => {});
    });

    describe('Given item exists...', () => {
      it('...updates item in database', async () => {});
    });
  });
});

// item.test.js ends here
