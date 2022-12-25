const Joi = require('joi');
const labelModel = require('../model/label.model');

class LabelService{
    storeValidate = (data) =>{
        let schema = Joi.object({
            title: Joi.string().required().min(2),
            link: Joi.string(),
            image: Joi.string().required(),
            type: Joi.string().valid("brand","banner"),
            status: Joi.string().valid('active',"inactive").default("inactive")
        });
        let response = schema.validate(data);
        
        if(response.error){
            throw response.error.details[0].message;
        }else{
            return data;
        }
    }
    createLabel = async ()=>{
        console.log(this.data)
        let label_obj = new labelModel(this.data);
        return await label_obj.save();

    }
}
module.exports = LabelService;