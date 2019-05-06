
module.exports  =  class ElasticsearchdataController{
    
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
    
    async Get(index,type,id){
        const results = await this.modelinstance.Get(index,type,id);
        return results;
    }
    
    async createIndices(index){
        return await this.modelinstance.createIndices(index);
    }
    
    async getIndices(index){
        return await this.modelinstance.getIndices(index);
    }
    
    async Insert(index,type,body,id){
        let exist = await this.getIndices(index);
        if(!exist){
            await this.createIndices(index); 
        }
        let getdata = await this.Get(index,type,id);
       
        if(!getdata){
            const insert = await this.modelinstance.Insert(index,type,body,id);
            return insert;
        }else{
            const update = await this.Update(index,type,body,id);
            return update;
        }
    }
    
    async Delete(index,type,id){
        const results = await this.modelinstance.Delete(index,type,id);
        return results;
    }
    async Search(index,type,body){
        const results = await this.modelinstance.Insert(index,type,body);
        return results;
    }
    async Update(index,type,body,id){
        const results = await this.modelinstance.Update(index,type,body,id);
        return results;
    }
    
    
};



