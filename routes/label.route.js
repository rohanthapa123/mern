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
router.get("/:type",validateType,label_ctrl.getLabel)
router.post("/:type",validateType,auth,isAdmin,uploader.single('image'),label_ctrl.labelStore)
router.get("/:type/:id",validateType,label_ctrl.getLabelById);
router.delete("/:type/:id",validateType,auth,isAdmin,label_ctrl.deleteById);
module.exports = router;