const mongoose = require("mongoose");
const commonSchema = require("./common.schema");

const CategorySchemaDef = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    slug: {
        type: String,
        unique: true
    },
    parent_id: {
        type: mongoose.Types.ObjectId,
        ref:"Category",
        default: null
    },
    image: {
      type: String,
      required: true
    },
    brands:[{
        type: mongoose.Types.ObjectId,
        ref:"Label",
        default: null
    }],

    status: commonSchema.statusSchema,
    created_by :commonSchema.created_by
  },
  commonSchema.trigger
);
const CategoryModel = mongoose.model("Category", CategorySchemaDef);

module.exports = CategoryModel;
