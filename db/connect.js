import mysql from 'mysql';

const db = mysql.createConnection({
    host: 'db-mysql-tor-custoddia-do-user-8358132-0.b.db.ondigitalocean.com',
    port: 25060,
    user: 'jasonm',
    password: 'mvb93ECF#',
    database: 'custoddia'
});

export default db
