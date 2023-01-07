const router = require('express').Router();
const auth = require('../app/middleware/auth.middleware');
const uploader = require('../app/middleware/uploader.middleware')
const { isAdmin } = require('../app/middleware/rbac.middleware');

const CategoryController = require('../app/controller/category.controller')
const category_ctrl = new CategoryController();

router.route('/')
    .get(category_ctrl.getCategories)
    .post(auth,isAdmin,uploader.single('image'),category_ctrl.categoryStore)
router.route("/:id")
    .get(category_ctrl.getCategoryById)
    .delete(auth,isAdmin,category_ctrl.deleteById)
    .put(auth,isAdmin,uploader.single("image"),category_ctrl.categoryUpdate)
    
module.exports = router;
