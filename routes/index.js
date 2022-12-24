const express = require('express')
const app_router = express.Router();
const auth_login = require('./auth-login');
const contact_route = require('./contact.route')
const product_route = require('./product.route')
const register_route = require('./register.route')
const label_route = require('./label.route')


app_router.get('/home',(req,res,next)=>{
    res.render('home');
})
app_router.use('/',auth_login);
app_router.use('/contact',contact_route);
app_router.use('/product/',product_route);
app_router.use(register_route)
app_router.use('/',label_route)

module.exports = app_router;