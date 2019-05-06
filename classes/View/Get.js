const path = require("path");
const fs = require("fs");
const classpath = path.resolve('../Controller/ElasticsearchdataController.js');

if (fs.existsSync(classpath)) {
    let classname = require(classpath);
    let classinstance = new classname();
    main(classinstance,'students','default','27fsantos');
}   
    
async function main(classinstance,index,path,id){
    let result = await classinstance.Get(index,path,id);
    console.log(result);
}
