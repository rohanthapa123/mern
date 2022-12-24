const jwt = require("jsonwebtoken");
const Config = require("../../config/config");
const UserService = require('../service/user.service')
let user_svc = new UserService;

const auth = async (req, res, next) => {
  //  console.log(req.headers);
  try {
    let token = null;
    if (req.headers["authorization"]) {
      token = req.headers["authorization"];
    } else if (req.headers["x-xsrf-token"]) {
      token = req.headers["x-xsrf-token"];
    } else if (req.query["token"]) {
      token = req.query["token"];
    }
    if (token === null) {
      // console.log("oops");
      next({ status: 401, msg: "No token" });
    } else {
      //verify the token
      //Bearer token
      ///token
      let str_split = token.split(" ");
      token = str_split.pop();
      if (token === null) {
        next({ status: 401, msg: "No token" });
      } else {
        let data = jwt.verify(token, Config.JWT_SECRET);
        let auth_user = await user_svc.getUserById(data.user_id)
        console.log(auth_user)
        if(auth_user){
            req.auth_user = auth_user;
            next()
        }else{
            next({status:401,msg:"Token/payload invalid"})
        }


    } 
    }
  } catch (excep) {
    console.log("Auth :", excep);
    next({ status: 401, msg: excep });
  }
};
module.exports = auth;
