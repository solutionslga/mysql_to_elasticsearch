let path = require("path");
let fs = require("fs");

const classpath = path.resolve('../Controller/ElasticsearchdataController.js');

if (fs.existsSync(classpath)) {
    let classname = require(classpath);
    let classinstance = new classname();
    main(classinstance,'students','default','27fsantos');
}   
    
async function main(classinstance,index,type,id){
    let result = await classinstance.Delete(index,type,id);
    console.log(result);
}