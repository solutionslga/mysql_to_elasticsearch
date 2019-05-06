
  
module.exports  =  class PersonaldataController{
    
    async Insert(client,payload){
        try{
            const result = await client.index({
                index: 'students',
                type: 'default',
                id: payload.username,
                body: payload
            });
            console.log(result);
            return true;
        }catch(e){
            console.log(e.toString());
            return false;
        }
    }
    async Delete(client,payload){
        try{
            const result = await client.delete({
                index: 'students',
                type: 'default',
                id: payload.username
            });
            console.log(result);
        }catch(e){
            console.log(e.toString());
        }
    }
    
    async Get(client,payload){
        try{
            const result = await client.get({
                index: 'students',
                type: 'default',
                id: payload.cpf
            });
            console.log(result);
        }catch(e){
            console.log(e.toString());
        }   
    }
    
    async Search(client,body){
        try{
            const result = await client.search({
                index: 'students',
                type: 'default',
                body: body
            });
            console.log(result);
        }catch(e){
            console.log(e.toString());
        }   
    }
    
    async Update(client,payload){
        try{
            const result = await client.get({
                index: 'students',
                type: 'default',
                id: payload.cpf
            });
            if(result._source != undefined){
                const result = await client.update({
                index: 'students',
                type: 'default',
                id: payload.cpf,
                body: {doc:payload}
            });
                console.log(result);   
            }
        }catch(e){
            console.log(e.toString());
        }
    }
    
};



