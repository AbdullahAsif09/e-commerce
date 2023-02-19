const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    des: {
      type: String,
      require: true,
    },
    img: { type: String, require: true },
    categories: { type: Array },
    size: { type: Array },
    price: { type: String },
    rating: { type: Array },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", productSchema);
