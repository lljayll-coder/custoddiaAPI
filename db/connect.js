import mysql from 'mysql';

const db = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'jason',
    password: 'mvb93ECF#',
    database: 'custoddia',
});

export default db
