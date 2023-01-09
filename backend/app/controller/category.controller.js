const slugify = require('slugify');
const CategoryService = require('../service/category.service')

class CategoryController{
    constructor(){
        this.category_svc = new CategoryService();
    }
    
    categoryStore =async (req,res ,next)=>{
        // res.json(req.params);
        try{
            let data = req.body;
            // console.log(req.file)
            if(req.file){
                data.image = req.file.filename;
            }
            

            data.slug = slugify(data.name,{
                lower: true
            });
            if(!data.brands || data.brands == 'null' ){
                data.brands =null;
            }
            if(!data.parent_id || data.parent_id === 'null'){
                data.parent_id = null;
            }
            
            
            this.category_svc.storeValidate(data);
            
            let response = await this.category_svc.createCategory();
            res.json({
                result: response,
                msg:  "Category Created successfully",
                status: true
            })
        }catch(excep){
            console.log("category store: ", excep)
            next({status:400, msg: excep})
        }

    }
    getCategories  = async (req,res,next) =>{
        try{
        
            let paginate = {
                total_count : await this.category_svc.getAllCounts(),
                per_page : parseInt(req.query.per_page) ? parseInt(req.query.per_page) : 10,
                current_page : req.query.page ? parseInt(req.query.page) : 1
            };
            let skip = (paginate.current_page-1) * paginate.per_page;
            let limit = paginate.per_page;
            let data =await this.category_svc.getCategories(skip,limit)
            res.json({
                result: data,
                status: true,
                paginate: paginate,
                msg: "data fetched"
            })
        }catch(excp){
            next({status: 400, msg: "hello from getCategory"})
        }
    }
    getCategoryById = async (req,res,next)=>{
        try{
            let data = await this.category_svc.findById(req.params.id)
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
            let data = await this.category_svc.deleteById(req.params.id)
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
    categoryUpdate = async (req,res,next) =>{
        try{
            let current_data = await this.category_svc.findById(req.params.id)
            let data = req.body;
            if(req.file){
                data.image = req.file.filename;
            }
            // console.log(data)
            
            data.slug = current_data.slug
            if(!data.brands || data.brands == 'null' ){
                data.brands =null;
            }
            if(!data.parent_id || data.parent_id === 'null'){
                data.parent_id = null;
            }   
                
            
            // console.log(data)
            this.category_svc.storeValidate(data);
            // console.log(abc)
            // console.log("hello")
            let response = await this.category_svc.updateCategory(req.params.id);
            res.json({
                result: response,
                msg: "Category updated successfully",
                status: true
            })
        }catch(excep){
            console.log("category store: ", excep)
            next({status:400, msg: excep})
        }

    }
}
module.exports = CategoryController;