const { isCustomer } = require('../app/middleware/rbac.middleware');
const auth = require('../app/middleware/auth.middleware')
const router = require('express').Router();

const OrderController = require('../app/controller/order.controller');
const order_ctrl = new OrderController()
router.post('/',auth,isCustomer,order_ctrl.createOrder)




module.exports = router;