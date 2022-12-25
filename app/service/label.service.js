const Joi = require('joi');
const labelModel = require('../model/label.model');

class LabelService{
    storeValidate = (data) =>{
        let schema = Joi.object({
            title : Joi.string().required().min(2),
            link : Joi.string(),
            image : Joi.string(),
            type : Joi.string().valid("brand","banner"),
            status : Joi.string().valid('active',"inactive").default("inactive")
        });
        let response = schema.validate(data);
        
        if(response.error){
            throw response.error.details[0].message;
        }else{
            // console.log(data)
            return data;
        }
    }
    createLabel = async (datas)=>{
        // console.log(datas)
        let label_obj = new labelModel(datas);
        return await label_obj.save();

    }
    getLabel = async (type,skip,limit) =>{
        let filter = {
            type: type
        }
        return await labelModel.find(filter).skip(skip).limit(limit)
    }
    getAllCounts = async (type) =>{
        let filter = {
            type:type
        }
        let all_data = await labelModel.find(filter);
        return all_data.length;
    }
    findById = async (type, id) =>{
        let filter = {
            type: type, 
            _id: id
        }
        return await labelModel.findOne(filter);
    }
    deleteById = async (type, id) =>{
        let filter = {
            type: type, 
            _id: id
        }
        return await labelModel.deleteOne(filter);
    }
}
module.exports = LabelService;