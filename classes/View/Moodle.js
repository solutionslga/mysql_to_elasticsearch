const path = require("path");
const fs = require("fs");
const moodleclasspath = path.resolve('../Controller/MoodledataController.js');
const personaldatapath = path.resolve('../Controller/ElasticsearchdataController.js');

if (fs.existsSync(personaldatapath)) {
    let pclassname = require(personaldatapath);
    var pclient = new pclassname();
}

 
if (fs.existsSync(moodleclasspath)) {
    let mclassname = require(moodleclasspath);
    const mclient = new mclassname();
    main(mclient,pclient);
}
 
async function main(mclient,pclient){
    let rows = await mclient.getData('mdl_user','username,password,firstname,lastname,email,institution,department');
    if(rows.length > 2){
        for(let row in rows){
            let payload = {
                "username":  rows[row].username,
                "firstname":rows[row].firstname,
                "lastname" : rows[row].lastname,
                "email":rows[row].email,
                "password":rows[row].password,
                "institution":rows[row].institution,
                "department":rows[row].department
            };
            let resp = await pclient.Insert('students','default',payload,rows[row].username);
            console.log(resp);
        }
    }
};
    

