const mongoose = require("mongoose");
const commonSchema = require("../../config/common.schema");

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
  },
  commonSchema.trigger
);
const labelModel = mongoose.model("Label", LabelSchemaDef);

module.exports = labelModel;
