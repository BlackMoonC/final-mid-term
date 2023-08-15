const Product = require("../models/products.model");

const postDataById = async (req, res) => {
  try {
    console.log("Loading", req.body.id_video);
    const product = new Product({
      link_product: req.body.link,
      title: req.body.title,
      price: req.body.price,
      id_video: req.params.id_video,
    });
    const productSave = await product.save();
    res.json(productSave);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getAllData = async (req, res) => {
  const data = await Product.find({ id_video: req.params.id_video });
  try {
    res.json({ data: data, message: "Data telah dapatkan" });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = {
  getAllData,
  postDataById,
};
