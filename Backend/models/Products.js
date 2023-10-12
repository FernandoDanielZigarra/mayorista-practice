const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    discount: {
      type: Boolean,
      default: false,
    },
    price: {
      type: Number,
      required: true,
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    image:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Image",

    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Product", productSchema);
