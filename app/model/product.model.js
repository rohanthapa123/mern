const { number, boolean } = require("joi");
const mongoose = require("mongoose");
const commonSchema = require("./common.schema");

const ProductSchemaDef = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    slug: {
        type: String,
        unique: true
    },
    description:{
        type: String
    },
    category_id: {
        type: mongoose.Types.ObjectId,
        ref:"Category",
        default: null
    },
    price:{
        type: Number,
        min: 1,
        required: true
    },
    discount:{
        type: Number,
        min: 1,
        max: 100,
        default: 0
    },
    actual_price:{
        type: Number,
        default: 1,
        required: true
    },
    is_featured:{
        type: Boolean,
        default:false
    },
    images: [{
      type: String,
      required: true
    }],
    brand:{
        type: mongoose.Types.ObjectId,
        ref:"Label",
        default: null
    },
    seller : commonSchema.created_by,
    status: commonSchema.statusSchema,
    created_by :commonSchema.created_by
  },
  commonSchema.trigger
);
const ProductModel = mongoose.model("Product", ProductSchemaDef);

module.exports = ProductModel;
