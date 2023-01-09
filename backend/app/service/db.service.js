const { MongoClient } = require("mongodb");
const {DB ,ENVIRONMENT} = require("../../config/config")

class DbService{
    constructor(){
        this.connect();
    }
    connect = async ()=>{
        try{
            
            //mongodb://127.0.0.1/27017
            // let client = await MongoClient.connect(DB_URL)
            // this.db = client.db(DB.NAME);
        }catch(err){
            throw err;
        }
    }
}

module.exports = DbService;