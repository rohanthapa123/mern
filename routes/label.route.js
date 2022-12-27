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
router.route("/:type")
    .get(validateType,label_ctrl.getLabel)
    .post(validateType,auth,isAdmin,uploader.single('image'),label_ctrl.labelStore)
router.route("/:type/:id")
    .get(validateType,label_ctrl.getLabelById)
    .delete(validateType,auth,isAdmin,label_ctrl.deleteById)
    .put(validateType,auth,isAdmin,uploader.single("image"),label_ctrl.categoryUpdate)
module.exports = router;