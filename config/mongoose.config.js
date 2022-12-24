const mongoose = require("mongoose");
const {ENVIRONMENT,DB} = require('./config')
let DB_URL = "";

if(ENVIRONMENT === 'dev'){
    DB_URL = `${DB.PROTOCOL}://${DB.HOST}:${DB.PORT}/${DB.NAME}`;
}
else if(ENVIRONMENT === 'prod'){
    DB_URL = `${DB.PROTOCOL}://${DB.USER}:${DB.PwD}@${DB.HOST}:${DB.PORT}`;
}
mongoose.set('strictQuery', false);
mongoose.connect(DB_URL,{
    autoCreate: true,
    autoIndex : true
},(err) =>{
    if(err){
        console.log("DB connection error: ",err);
    }else{
        console.log("DB connected successfully....")
    }
});

