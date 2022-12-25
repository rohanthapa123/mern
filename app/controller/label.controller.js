const slugify = require('slugify');
const LabelService = require('../service/label.service')

class LabelController{
    constructor(){
        this.label_svc = new LabelService();
    }
    labelStore =async (req,res ,next)=>{
        // res.json(req.params);
        try{
            let data = req.body;
            if(req.file){
                data.image = req.file.filename;
            }
            // console.log(data)
            data.type = req.params.type;
            if(!data.link || data.link == 'null'){

                data.link = slugify(data.title,{
                    lower: true
                });
            }
            // console.log(data)
            let abc =this.label_svc.storeValidate(data);
            // console.log(abc)
            // console.log("hello")
            let response = await this.label_svc.createLabel(abc);
            res.json({
                result: response,
                msg: data.type + "Created successfully",
                status: true
            })
        }catch(excep){
            console.log("label store: ", excep)
            next({status:400, msg: excep})
        }

    }
    getLabel = async (req,res,next) =>{
        try{
        
            let paginate = {
                total_count : await this.label_svc.getAllCounts(req.params.type),
                per_page : parseInt(req.query.per_page) ? parseInt(req.query.per_page) : 10,
                current_page : req.query.page ? parseInt(req.query.page) : 1
            };
            let skip = (paginate.current_page-1) * paginate.per_page;
            let limit = paginate.per_page;
            let data =await this.label_svc.getLabel(req.params.type,skip,limit)
            res.json({
                result: data,
                status: true,
                paginate: paginate,
                msg: "data fetched"
            })
        }catch(excp){
            next({status: 400, msg: "hello from getLabel"})
        }
    }
    getLabelById = async (req,res,next)=>{
        try{
            let data = await this.label_svc.findById(req.params.type,req.params.id)
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
            let data = await this.label_svc.deleteById(req.params.type,req.params.id)
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
}
module.exports = LabelController;