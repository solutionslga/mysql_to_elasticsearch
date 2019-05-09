const elasticsearch=require('elasticsearch');
const mysql = require('promise-mysql');
/*Example elasticsearch connection*/
module.exports = new elasticsearch.Client( {  
    hosts:'xxxx:9200',
    log: "error",
    requestTimeout: 60000, // Tested
    keepAlive: false // Tested
});
/*Example mysql connection*/
const config = {
    host: 'xxx.xxx.xxx.xxx',
    port: 3306,
    user: 'xxxxxxx',
    password: 'xxx',
    database: 'xxxxxxxx',
    connectionLimit: 100
};

module.exports = mysql.createPool(config);