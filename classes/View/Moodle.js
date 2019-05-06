const path = require("path");
const fs = require("fs");
const moodleclasspath = path.resolve('../Controller/MoodledataController.js');
const personaldatapath = path.resolve('../Controller/PersonaldataController.js');
const esclientpath = path.resolve('./../../Drivers/esconnection.js');


if (fs.existsSync(personaldatapath)) {
    let pclassname = require(personaldatapath);
    var pclient = new pclassname();
}

if (fs.existsSync(esclientpath)) {
    var esclient = require(esclientpath);
}
 
if (fs.existsSync(moodleclasspath)) {
    let mclassname = require(moodleclasspath);
    const mclient = new mclassname();
    main(mclient,pclient,esclient);
}
 
async function main(mclient,pclient,esclient){
    console.log(pclient);
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
            let resp = await pclient.Insert(esclient,payload);
            
        }
    }
};
    
