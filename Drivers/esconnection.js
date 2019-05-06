const elasticsearch=require('elasticsearch');

const client = new elasticsearch.Client( {  
    hosts:'192.168.16.152:9200',
    log: "error",
    requestTimeout: 60000, // Tested
    keepAlive: false // Tested
});

module.exports = client;
