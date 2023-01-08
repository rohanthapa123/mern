const UserService = require('../service/user.service')
const nodemailer = require('nodemailer');
const { SMTP } = require('../../config/Config');
const {MongoClient} = require('mongodb');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Config = require('../../config/Config');


class AuthController {
    constructor(){
        this.user_svc = new UserService();
    }
    registerUser = async (req, res, next) => {
        let body = req.body;
        if(req.file){
            body.image = req.file.filename;
        }
        try{
            // console.log(body)
            //data mapping 2 2way delete one by one or assign to object
            this.user_svc.validateUser(body);
            //DB store
            // let client = await MongoClient.connect("mongodb://127.0.0.1:27017")
            // let db = client.db("User");
            

            // let data = await db.collection("users").insertOne(body);
            
            body.password = bcrypt.hashSync(body.password, 10);
            let data = await this.user_svc.createUser(body);



            let transporter = nodemailer.createTransport({
                host: SMTP.HOST,
                port: SMTP.PORT,
                secure: SMTP.TLS,
                auth : {
                    user: SMTP.USER,
                    pass: SMTP.PASS
                }
            });
            let mail_response = await transporter.sendMail({
                to: body.email,
                from: SMTP.FROM,
                attachments: [
                    {
                        filename: 'register.jpg',
                        path : "https://www.legalzoom.com/sites/lz.com/files/styles/related_article/public/articles/how_to_register_a_business.jpg"
                    }
                ],
                subject:"Account Registered",
                text:`Dear ${body.name}, Your accouunt has been registered.`,
                html: `<b>Dear ${body.name},</b><br/><p>Your Account has been registered.</p><img src="https://www.legalzoom.com/sites/lz.com/files/styles/related_article/public/articles/how_to_register_a_business.jpg">`
                
            });


            
            res.json({
                result: body,
                status: true,
                msg: "Register data test"
            })
        }
        catch(excp){
            next({status: 400, msg: excp })
            console.log(excp)
        }
            
    }
    loginUser = async (req, res, next) => {
        let data = req.body;
        try{
            let loggedInUser = await this.user_svc.getUserByEmail(data);
            if(loggedInUser){
                if(bcrypt.compareSync(data.password,loggedInUser.password)){
                    let token = jwt.sign({
                        user_id: loggedInUser._id
                    },Config.JWT_SECRET)
                    res.json({
                        result:{
                            user:loggedInUser,
                            access_token: token
                        },
                        status: true,
                        msg: "logged in successfully"
                    })
                }else{
                    next({status:400,msg:"Incorrect Password"}) 
                }
                
            }else{
                next({status:400, msg:"Credentials does not match"})
            }

        }catch(excp){
            console.log('login:',excp)
            next({status:400,msg: excp})

        }
        
    }

    logOut = (req, res, next) => {
        res.send("logout success")
    }
}
module.exports = AuthController;