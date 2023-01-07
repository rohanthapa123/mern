const Joi = require('joi');
const productModel = require('../model/product.model');

class ProductService{
    storeValidate = (data, created_by) =>{
        let schema = Joi.object({
            name : Joi.string().required().min(2),
            slug : Joi.string(),
            images : Joi.array().items(Joi.string().allow(null).allow('')).default(null),
            description: Joi.string(),
            category_id : Joi.array().items(Joi.string().allow(null).allow('')).default(null),
            price: Joi.number().required().min(1),
            discount: Joi.number().min(0).max(100),
            actual_price: Joi.number().required().min(1),
            is_featured: Joi.boolean().default(false),
            seller: Joi.string().allow(null,""),
            status : Joi.string().valid('active',"inactive").default("inactive"),
            brand: Joi.string().allow(null, '').default(null)
        });
        let response = schema.validate(data);
        
        if(response.error){
            throw response.error.details[0].message;
        }else{
            // console.log(data)
            this.data = data;
            this.data.created_by = created_by;
            // this.data.brand = data.brand.split(",");
            // return data;
        }
    }
    createProduct = async ()=>{
        // console.log(datas)
        let product_obj = new productModel(this.data);
        return await product_obj.save();

    }
    getProducts = async (skip,limit) =>{

        return await productModel.find()
                    .populate("category_id")
                    .populate("brand")
                    .populate("seller")
                    .populate("created_by")
                    .skip(skip)
                    .limit(limit)
    }
    getAllCounts = async () =>{
        
        let all_data = await productModel.find();
        return all_data.length;
    }
    findById = async ( id) =>{
        return await productModel.findById(id)
                    .populate("brand")
                    .populate("category_id")
                    .populate("seller")
                    .populate("created_by");
    }
    deleteById = async ( id) =>{
        
        return await productModel.findByIdAndRemove(id);
    }
    updateProduct = async (id) =>{
        let status = await productModel.findByIdAndUpdate(id,{
            $set : this.data
        });
        return status;
    }
}
module.exports = ProductService;