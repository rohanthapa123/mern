const router = require('express').Router();
const auth = require('../app/middleware/auth.middleware');
const uploader = require('..//app/middleware/uploader.middleware')
const { isAdmin } = require('../app/middleware/rbac.middleware');
const LabelController = require('../app/controller/label.controller')
const label_ctrl = new LabelController();
const validateType = (req,res,next)=>{
    if(req.params.type === 'brand' || req.params.type === 'banner'){
        next();
    }
    else{
        next({status:404, msg: 'Resource not found'})
    }
}
router.post("/:type",validateType,auth,isAdmin,uploader.single(''),label_ctrl.labelStore)

module.exports = router;