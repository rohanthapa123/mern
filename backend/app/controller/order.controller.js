const ProductModel = require("../model/product.model");
const OrderModel = require("../model/order.model");
class OrderController {
  createOrder = async (req, res, next) => {
    try {
      let payload = req.body;
      // console.log(payload)
      let order_data = {
        buyer_id: req.auth_user._id,
        cart: [],
        sub_total: 0,
        discount: {
          ...payload.discount,
        },
        service_charge: payload.service_charge || 0,
        delivery_charge: payload.delivery_charge || 0,
        vat: 0,
        total_amount: 0,
        order_date: Date.now(),
        status: "pending",
        is_paid: {
          paid: payload.is_paid,
          mode: payload?.transaction_CODE ? "online" : "cod",
          transaction: payload?.transaction_code || null,
        },
        created_by: req.auth_user._id,
      };

      let cart_detail = [];
      let sub_total = 0;
      let cart_product_ids = payload.cart.map((item) => item.product_id);
      let cart_product = await ProductModel.find({
        _id: {
          $in: cart_product_ids,
        },
      });
      // payload.cart((item,ind)=>{
      //     //TODO: Product Detail , price * qty  = total amount
      //     //let product_idg
      //
      // })
      // console.log(cart_product)
      let cart = [];
      cart_product.map((prod) => {
        let curr_qty = 0;
        // console.log(prod._id)
        // console.log(payload.cart)
        payload.cart.map((item) => {
          // console.log(item.product_id)
          if (prod._id.equals(item.product_id)) {
            // console.log(item.product_id)
            curr_qty = Number(item.qty);
          }
        });

        // console.log(curr_qty)
        let item_total = curr_qty * prod.actual_price;
        let single_item = {
          product_id: prod._id,
          qty: curr_qty,
          total_amt: item_total,
        };
        cart.push(single_item);
        sub_total += item_total;
      });
      order_data.cart = cart;
      order_data.sub_total = sub_total;
      let discount_amt = 0;
      if (order_data.discount) {
        if (order_data.discount.discount_type === "flat") {
          discount_amt = Number(order_data.discount.amount);
        } else {
          discount_amt = (sub_total * Number(order_data.discount.amount)) / 100;
        }
      }
    //   console.log(discount_amt);
      order_data.total_amount = Math.ceil(
        sub_total -
          discount_amt +
          Number(order_data.service_charge) +
          Number(order_data.delivery_charge) +
          Number(order_data.vat)
      );
    //   console.log(order_data);

      let order = new OrderModel(order_data);
      await order.save();
      if (order) {
        //order notification send
        //Online payment ==> trigger payment gateway SDK
        //success Response ==> json body, order id, transaction code

        res.json({
          result: order,
          status: true,
          msg: "Your order has been placed successfully",
        });
      } else {
        next({ status: 400, msg: order });
      }
    } catch (excep) {
      next({ status: 400, msg: excep });
    }
  };
}
module.exports = OrderController;
