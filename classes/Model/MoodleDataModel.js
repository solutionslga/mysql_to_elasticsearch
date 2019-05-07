module.exports  =  class MoodleDataModel{
  
    constructor() {
        let path = require("path");
        let fs = require("fs");
        this.mysqlclient = path.resolve('./../../Drivers/mysqlconnection.js');

        try{
            if (fs.existsSync(this.mysqlclient)) {
                const  conn = require(this.mysqlclient);
                this.connect = this.setConn(conn);
            }
        }catch(e){
            console.log("Error => mysql driver not found");
        }

    }
    setConn(conn){
        this.conn = conn;
    }
    getConn(){
        return this.conn;
    }
  
    async getData(table,fields,id){
        try{
            
            let posfix = (typeof id !== "undefined") ? `where id= ${id}`  : '';
            let query = ` SELECT ${fields} FROM ${table} ${posfix}`;
            let rows = await this.getConn().query(query);
            this.getConn().end();
            return rows;
            
        }catch(e){
            console.log("error => mysql connect found or query error",e);
        }
    }
    
    async connect(conn){
        
        try{
            
            return await conn.connect(function(err){
                if(err) return console.log(err);
                console.log("connected");
            });
          
        }catch(e){
            console.log("error => invalid mysql connect",e);
        }
    }
    
};

