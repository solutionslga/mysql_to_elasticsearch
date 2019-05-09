const elasticsearch=require('elasticsearch');
const mysql = require('promise-mysql');

const esconnect =  new elasticsearch.Client( {  
    hosts:'xxx.xxx.xxx.xxx:9200',
    log: "error",
    requestTimeout: 60000, // Tested
    keepAlive: false // Tested
});

const mysqlconfig = {
    host: 'xxx.xxx.xxx.xxx',
    port: 3306,
    user: 'xxxx',
    password: 'xxxx',
    database: 'xxxxxx',
    connectionLimit: 60
};

const mysqlconnect = mysql.createPool(mysqlconfig);

module.exports = {
    esconnect, 
    mysqlconnect
};