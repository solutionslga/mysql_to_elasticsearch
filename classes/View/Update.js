let path = require("path");
let fs = require("fs");
let esclient  = '';
let payload = {
    'cpf':'22091981869',
    'email':'alterado@gmail.com'
};

classpath = path.resolve('../Controller/PersonaldataController.js');
client = path.resolve('./../../connection.js');

if (fs.existsSync(client)) {
    esclient = require(client);
}else{
    console.err("client elasticsearch not found");
}

if (fs.existsSync(classpath)) {
    let classname = require(classpath);
    let classinstance = new classname();
    classinstance.Update(esclient,payload);
}