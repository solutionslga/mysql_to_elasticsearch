const path = require("path");
const fs = require("fs");
const classpath = path.resolve('../Controller/ElasticsearchdataController.js');

if (fs.existsSync(classpath)) {
    let classname = require(classpath);
    let classinstance = new classname();
    let body = {
        "username" : "luisaraujo",
        "firstname" : "Luis G",
        "lastname" : "de Araujo",
        "email" : "luis.araujo@plus-it.com.br",
        "password" : "202cb962ac59075b964b07152d234b70",
        "institution" : "OLIM-20",
        "department" : "Administração - N"
    };
    main(classinstance,'students','default',body,'luisaraujo');
}

    
async function main(classinstance,index,path,body,id){
    let result = await classinstance.Insert(index,path,body,id);
    console.log(result);
}
