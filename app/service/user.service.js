//inported joi
const Joi = require('joi');
const userModel = require('../model/user.model');
// const userModel = require('../model/user.model')

class UserService{
    
    //function that gets body as data and validate using joi
    validateUser = (data) =>{
        try{
            let userSchema = Joi.object({
                name: Joi.string().min(3),
                email: Joi.string().email().required(),
                password: Joi.string().min(8).required(),
                Cpassword: Joi.string().min(8).required(),
                role: Joi.string().required(),
                address: Joi.string(),
                image: Joi.string().empty(),
                status: Joi.string()
            })
            let response =userSchema.validate(data);
            if(response.error){
                throw response.error.details[0].message
            }
            console.log(response)
        }catch(err){
            console.log(err)
            throw err;
        }
        
        
    }

    createUser = async (data) =>{
        try{
            let user_obj = new userModel(data);
            return await user_obj.save();
            //return await this.db.collection('users').insertOne(data)
        }catch(excp){
            if(excp.code === 11000){
                let keys = Object.keys(excp.keyPattern);
                throw keys.join(", ")+" shoued be unique";
            }
            else{
                throw excp
            }
            
        }
    }
    getUserByEmail = async (data) =>{
        try{
            let result = await userModel.findOne({
                email: data.email
            });
            return result;
            console.log(result);
            
        }catch(err){
            console.log(err)
            throw err;
        }
        
    }
    getUserById = async (id) =>{
        try{
            // let user = await userModel.findOne({
            //     _id : ObjectId(id)
            // });
            let user = await userModel.findById(id);
            return user;
        }catch(excp){
            throw excp;
        }
    }
}

module.exports = UserService;