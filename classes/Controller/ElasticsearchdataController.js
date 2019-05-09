
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
            return "error => model not found",e;
        }
    }
    
    async Get(index,type,id){
        return await this.modelinstance.Get(index,type,id);
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
            return await this.modelinstance.Insert(index,type,body,id);
        }else{
            return await this.Update(index,type,body,id);
        }
    }
    async Delete(index,type,id){
        return await this.modelinstance.Delete(index,type,id);
    }
    async Search(index,type,body){
        return await this.modelinstance.Search(index,type,body);
    }
    async Update(index,type,body,id){
        return await this.modelinstance.Update(index,type,body,id);
    }
    
    
};



