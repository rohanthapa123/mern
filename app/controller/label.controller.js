const slugify = require('slugify')
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
            
            this.label_svc.storeValidate(data);
            
            let response = await this.label_svc.createLabel();
            res.json({
                result: response,
                msg: data.type() + "Created successfully",
                status: true
            })
        }catch(excep){
            console.log("label store: ", excep)
            next({status:400, msg: excep})
        }

    }
}
module.exports = LabelController;