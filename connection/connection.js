const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '12345',
        database: 'employees_db'
    },
    console.log('Connected to the employees_db database.')
);

module.exports = db;