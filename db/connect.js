import mysql from 'mysql';

const db = mysql.createConnection({
    host: 'xxxxxxx',
    port: 25060,
    user: 'jasonm',
    password: 'xxxxxxx',
    database: 'xxxxxxx'
});

export default db
