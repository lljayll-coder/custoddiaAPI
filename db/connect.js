import mysql from 'mysql';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'jason',
    password: 'mvb93ECF#',
    database: 'nodemysql123'
});

export default db
