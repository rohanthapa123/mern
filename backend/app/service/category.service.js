const Joi = require('joi');
const categoryModel = require('../model/category.model');

class CategoryService{
    storeValidate = (data) =>{
        let schema = Joi.object({
            name : Joi.string().required().min(2),
            slug : Joi.string(),
            image : Joi.string(),
            parent_id : Joi.string().allow(null,'').default(null),
            status : Joi.string().valid('active',"inactive").default("inactive"),
            brands: Joi.string().empty().default(null)
        });
        let response = schema.validate(data);
        
        if(response.error){
            throw response.error.details[0].message;
        }else{
            // console.log(data)
            this.data = data;
            this.data.brands = data.brands.split(",");
            // return data;
        }
    }
    createCategory = async ()=>{
        // console.log(datas)
        let category_obj = new categoryModel(this.data);
        return await category_obj.save();

    }
    getCategories = async (skip,limit) =>{

        return await categoryModel.find()
                    .populate("parent_id")
                    .populate("brands")
                    .skip(skip)
                    .limit(limit)
    }
    getAllCounts = async () =>{
        
        let all_data = await categoryModel.find();
        return all_data.length;
    }
    findById = async ( id) =>{
        return await categoryModel.findById(id).populate("parent_id")
        .populate("brands");
    }
    deleteById = async ( id) =>{
        
        return await categoryModel.findByIdAndRemove(id);
    }
    updateCategory = async (id) =>{
        let status = await categoryModel.findByIdAndUpdate(id,{
            $set : this.data
        });
        return status;
    }
}
module.exports = CategoryService;