exports.handler = (event, context, callback) => {
    try {
        let path = require("path");
        let client = require('./connection.js');
        let fs = require("fs");
        let body = JSON.parse(event.Records[0].body);
        if ('' == body.Message) throw new Error('Bad Request');
        let dados = JSON.parse(body.Message);
        let classpath = '';
        let identify = dados.doc.identifyreports;
        let model = dados.doc.model.toLowerCase();
        classpath = path.resolve(`./classes/${identify}Class.js`);
        if (fs.existsSync(classpath)) {
            let classname = require(classpath);
            let classinstance = new classname();
            classinstance.prepareData(client, model, 'default', dados.doc, context, 0);
        }
    } catch (err) {
        context.fail(err.toString());
    }
};