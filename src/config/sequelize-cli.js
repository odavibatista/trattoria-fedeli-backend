require('dotenv').config();

module.exports = {
    db_je3k: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres'
    },

    development: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres'
    },
}