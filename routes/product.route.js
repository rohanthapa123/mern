const express = require('express');
const auth = require('../app/middleware/auth.middleware');
const product_route = express.Router();




product_route.route('/')
    .get((req,res,next)=>{
        
    })
    //create catogory garney route ho Yo
    .post(auth,(req,res,next)=>{
        //catogory create
        // res.send("Category Created")
        // console.log(req.auth_user)
        res.json({
            result: req.auth_user,
            status:true,
            msg: "done"
        })
    })

module.exports = product_route;