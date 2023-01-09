const express = require('express')
const register_route = express();
const uploader = require('../app/middleware/uploader.middleware')
const AuthController = require('../app/controller/auth.controller')
const auth_ctrl = new AuthController();


register_route.get('/register',uploader.single("image"),auth_ctrl.registerUser)


module.exports = register_route;