class OrderController{
    createOrder =  (req,res,next) =>{
        try{
            let payLoad = req.body;
            let order_data = {
                buyer_id : req.auth_user._id,
                cart : [],
                sub_total : 0,
                discount: {
                    ...payLoad.discount
                },
                delivery_charge : payLoad.delivery_charge || 0,
                service_charge : payLoad.service_charge || 0,
                vat : 0,
                order_date : Date.now(),
                total_amount : 0,
                status: "pending",
                is_paid: {
                    paid : payLoad.is_paid,
                    mode: payLoad?.transaction ? 'online' : 'cod', 
                    transaction : payLoad?.transaction_code ? transaction_code : null
                },
                created_by : req.auth_user._id

            }
            let cart_detail = []
            let sub_total = 0;
            payLoad.cart((item,ind)=>{
                //TODO: Product Detail , price * qty  = total amount
                //let product_id
            })

        }catch(excep){
            next({statu: 400,msg: excep})
        }
    }
}
module.exports = OrderController;