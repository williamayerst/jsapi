const mysql = require('mysql');

// Set database connection credentials
const config = {
    host: process.env.CLIENT_DB_HOST,
    user: process.env.CLIENT_DB_USER,
    password: process.env.CLIENT_DB_PASSWORD,
    database: process.env.CLIENT_DB_NAME,
};


// Create a MySQL pool
const pool = mysql.createPool(config);

// Export the pool
module.exports = pool;

