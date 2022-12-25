const express = require('express');
const app = express();
require("./config/mongoose.config")
const port = 3005;
const route = require('./routes/')
// app.use()

app.use("/assets",express.static('/public/images/'))
app.set('view engine', 'pug');
app.set('views',process.cwd()+'/views')

app.use(express.json())
app.use(express.urlencoded({
    extended:false
}))

app.use(route);


app.use((req,res,next)=>{
    next({status:400,msg:"null",result:null});
})


app.use((error,req,res,next)=>{
    let status = error.status ?? 500;
    let msg = error.msg ?? error;
    res.status(status).json({
        result:null,
        status: false,
        msg: msg
    })
})
app.listen(port, (err)=>{
    if(!err){
    console.log("listening to port 3005");
    console.log("press ctrl + c to exit")
    }
    
})