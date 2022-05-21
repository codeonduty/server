const bcrypt = require('bcryptjs');

const shopper = [
    {
        username: 'admin',
        email: 'admin@example.com',
        password: bcrypt.hashSync('11111111', 2),
    },

    {
        username: 'john',
        email: 'john@example.com',
        password: bcrypt.hashSync('11111111', 2),
    },

    {
        username: 'mary',
        email: 'mary@example.com',
        password: bcrypt.hashSync('11111111', 2),
    },
]

module.exports = shopper;
