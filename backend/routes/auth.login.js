const express = require('express');
const app_router = require('.');
const auth_routes = express();


const AuthController = require('../app/controller/auth.controller');
const login_ctrl = new AuthController();




auth_routes.post('/login',login_ctrl.loginUser)

auth_routes.post('/logout',login_ctrl.logOut)

module.exports = auth_routes;