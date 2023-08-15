const Video = require("../models/videos.model");

const getAllData = async (req, res) => {
  const data = await Video.find();
  try {
    res.json({ data: data, message: "Data telah dapatkan" });
  } catch (err) {
    res.status(404).send(err.message);
  }
};
const getDataById = async (req, res) => {
  const data = await Video.find({ _id: req.params.id });
  try {
    res.json({ data: data, message: "Data telah dapatkan" });
  } catch (err) {
    res.status(404).send(err.message);
  }
};
module.exports = {
  getAllData,
  getDataById,
};
