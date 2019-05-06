let path = require("path");
let fs = require("fs");
let esclient  = '';
let payload = {
    'cpf':'22091981869'
};

classpath = path.resolve('../Controller/PersonaldataController.js');
client = path.resolve('./../../Drivers/esconnection.js');

if (fs.existsSync(client)) {
    esclient = require(client);
}else{
    console.err("client elasticsearch not found");
}

if (fs.existsSync(classpath)) {
    let classname = require(classpath);
    let classinstance = new classname();
    classinstance.Get(esclient,payload);
}