module.exports = class MoodleDataModel {

    constructor() {
        let path = require("path");
        let fs = require("fs");
        this.mysqlclient = path.resolve('./../../config.js');
        try {
            if (fs.existsSync(this.mysqlclient)) {
                const  conn = require(this.mysqlclient);
                this.connect = this.setConn(conn.mysqlconnect);
            }
        } catch (e) {
            return "Error => mysql driver not found";
        }

    }
    
    setConn(conn) {
        this.conn = conn;
    }
    
    getConn() {
        return this.conn;
    }

    async getData(query) {
        
        try {
            let rows = await this.getConn().query(query);
            this.getConn().end();
            return rows;
        } catch (e) {
            return "error => mysql connect found or query error", e;
        }
    }

    async connect(conn) {

        try {
            return await conn.connect(function (err) {
                if (err)
                    return console.log(err);
                return "connected";
            });

        } catch (e) {
            return "error => invalid mysql connect", e;
        }
    }
};

