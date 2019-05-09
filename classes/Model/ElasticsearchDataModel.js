module.exports  =  class ElasticsearchDataModel{
  
    constructor() {
        let path = require("path");
        let fs = require("fs");
        let esclient = path.resolve('./../config.js');
        try{
            if (fs.existsSync(esclient)) {
                console.log(esclient);
                const conn = require(esclient);
                this.client =conn;
            }
        }catch(e){
            console.log("Error => elasticsearch driver not found");
            return;
        }

    }
    async createIndices(index){
        try{
            const result = await this.client.indices.create({
                index:index
                });
                return result;
        }catch(e){
            return e.toString();
        }
        
    }
    
    async Get(path,type,id){
        try{
            const result = await this.client.get({
                index: path,
                type: type,
                id: id
            });
            return result;
        }catch(e){
            return e.toString();
        }   
    }
    
    async Delete(index,type,id){
        try{
            const result = await this.client.delete({
                index: index,
                type: type,
                id: id
            });
            return result;
        }catch(e){
            return e.toString();
        }
    }
    
    async getIndices(index){
        try{
            const result = await this.client.indices.get({
                index:index
            });
            if(typeof result !== "undefined" ){
                return true;
            }
            return false;
        }catch(e){
            return e.toString();
        }
    }
    
    async Insert(index,type,body,id){
        try{
            const result = await this.client.index({
                index: index,
                type: type,
                id: id,
                body: body
            });
            return result;
        }catch(e){
            return e.toString();
        }
    }
    
    async Search(index,type,body){
        try{
            const result = await this.client.search({
                index: index,
                type: type,
                body: body
            });
            return result;
        }catch(e){
            return e.toString();
        }   
    }
    
    async Update(index,type,body,id){
        try{
            const result = await this.client.update({
             index: index,
             type: type,
             id: id,
             body: {doc:body}
            });
            return result;
        }catch(e){
            return e.toString();
        }
    }
    
    
};

