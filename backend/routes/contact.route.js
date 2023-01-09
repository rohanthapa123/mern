const express = require('express');
const contact_route = express.Router();

let verify = (req,res,next)=>{
    next();
}
contact_route.route('/')
    .get(verify,(req,res,next)=>{
        res.send("Contact Added")

    })
    .delete(verify,(req,res,next)=>{
        res.send("Contact Deleted")
    })


module.exports = contact_route;