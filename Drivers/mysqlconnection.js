const mysql = require('promise-mysql');
const config = {
    host: '192.168.16.150',
    port: 3306,
    user: 'laraujo',
    password: '10asterix',
    database: 'dev_kls_1901_0320',
    connectionLimit: 100
};
const pool = mysql.createPool(config);

module.exports = pool;


