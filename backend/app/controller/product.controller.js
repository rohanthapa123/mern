const slugify = require('slugify');
const ProductService = require('../service/products.service')

class ProductController{
    constructor(){
        this.product_svc = new ProductService();
    }
    
    productStore =async (req,res ,next)=>{
        // res.json(req.params);
        try{
            let data = req.body;
            data.images = [];
            // console.log(req.file)
            if(req.files){
                req.files.map((item)=>{
                    data.images.push = item.filename;
                })
                
            }
            

            data.slug = slugify(data.name,{
                lower: true
            });
            if(!data.brand || data.brand == 'null' ){
                data.brand =null;
            }
            if(!data.category_id || data.category_id === 'null'){
                data.category_id = null;
            }else{
                data.category_id = data.category_id.split(",");
            }
            data.actual_price = Number(data.price) - Number(data.price) * Number(data.discount)/100;
            data.is_featured = !!data.is_featured;
            console.log(data);
            this.product_svc.storeValidate(data, req.auth_user._id);
            
            let response = await this.product_svc.createProduct();
            res.json({
                result: response,
                msg:  "Product Created successfully",
                status: true
            })
        }catch(excep){
            console.log("product store: ", excep)
            next({status:400, msg: excep})
        }

    }
    getProducts  = async (req,res,next) =>{
        try{
        
            let paginate = {
                total_count : await this.product_svc.getAllCounts(),
                per_page : parseInt(req.query.per_page) ? parseInt(req.query.per_page) : 10,
                current_page : req.query.page ? parseInt(req.query.page) : 1
            };
            let skip = (paginate.current_page-1) * paginate.per_page;
            let limit = paginate.per_page;
            let data =await this.product_svc.getProducts(skip,limit)
            res.json({
                result: data,
                status: true,
                paginate: paginate,
                msg: "data fetched"
            })
        }catch(excp){
            next({status: 400, msg: "hello from getProduct"})
        }
    }
    getProductById = async (req,res,next)=>{
        try{
            let data = await this.product_svc.findById(req.params.id)
            if(data){
                res.json({
                    result :data,
                    status: true,
                    msg : "Data fetched"
                })
            }else{
                next({status:404, mg: "Data does not match"})
            }
        }catch(excep){
            console.log("Fetch by Id: ",excep)
            next({status:400,msg: excep})
        }
    }
    deleteById = async( req, res, next)=>{
        try{
            let data = await this.product_svc.deleteById(req.params.id)
            if(data){
                res.json({
                    result :data,
                    status: true,
                    msg : "Data deleted"
                })
            }else{
                next({status:404, mg: "Data does not match"})
            }
        }catch(excep){
            console.log("Fetch by Id: ",excep)
            next({status:400,msg: excep})
        }
    }
    productUpdate = async (req,res,next) =>{
        try{
            let current_data = await this.product_svc.findById(req.params.id)
            let data = req.body;
            data.images = current_data.images;
            if(req.files){
                req.files.map((item)=>{
                    data.images.push(item.filename);
                })
            }
            
            
            data.slug = slugify(data.name,{
                lower: true
            });
            if(!data.brand || data.brand == 'null' ){
                data.brand =null;
            }
            if(!data.category_id || data.category_id === 'null'){
                data.category_id = null;
            }else{
                data.category_id = data.category_id.split(",");
            }
            data.actual_price = Number(data.price) - Number(data.price) * Number(data.discount)/100;
            data.is_featured = !!data.is_featured; 
                
            
            // console.log(data)
            this.product_svc.storeValidate(data);
            // console.log(abc)
            // console.log("hello")
            let response = await this.product_svc.updateProduct(req.params.id);
            res.json({
                result: response,
                msg: "Product updated successfully",
                status: true
            })
        }catch(excep){
            console.log("product store: ", excep)
            next({status:400, msg: excep})
        }

    }
}
module.exports = ProductController;