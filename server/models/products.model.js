const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  link_product: {
    required: true,
    type: "string",
  },
  title: {
    required: true,
    type: "string",
  },
  price: {
    required: true,
    type: "string",
  },
  id_video: {
    required: true,
    type: "string",
  },
});

module.exports = mongoose.model("Product", productSchema);
