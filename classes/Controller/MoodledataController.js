module.exports  =  class MoodledataController{
    
    constructor(){
        try{
            let path = require("path");
            let fs = require("fs");
            let model = path.resolve('./../../classes/Model/ElasticsearchDataModel.js');

            if (fs.existsSync(model)) {
                let classname = require(model);
                this.modelinstance = new classname();
            }
            
        }catch(e){
            console.log("error => model not found",e);
        }
    }
  
    async getData(table,fields,id){
        const results = await this.modelinstance.getData(table,fields,id);
        return results;
    }
    
};

