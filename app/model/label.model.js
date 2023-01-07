const mongoose = require("mongoose");
const commonSchema = require("./common.schema");

const LabelSchemaDef = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    link: String,
    image: {
      type: String,
      required: true
    },
    status: commonSchema.statusSchema,
    type: {
      type: String,
      enum: ["brand", "banner"],
      default: "banner",
    },
    created_by :commonSchema.created_by
  },
  commonSchema.trigger
);
const labelModel = mongoose.model("Label", LabelSchemaDef);

module.exports = labelModel;
