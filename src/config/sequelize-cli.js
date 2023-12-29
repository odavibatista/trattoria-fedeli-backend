require('dotenv').config();

module.exports = {
    development: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres'
    },
    
    test: {
        url: process.env.DATABASE_URL?.replace(/_development/, '_test')
    }
}