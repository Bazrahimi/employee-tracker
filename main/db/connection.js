
const mysql = require('mysql2');
require('dotenv').config({path: '../../.env'});

const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_NAME:", process.env.DB_NAME);


// Test the connection
connection.connect(error => {
  if (error) {
    console.error('Error connecting to the database:', error.stack);
    return;
  }
  console.log('Successfully connected to the database as ID', connection.threadId);
});

module.exports = connection;
