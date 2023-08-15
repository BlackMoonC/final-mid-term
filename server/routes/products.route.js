const express = require("express");
const router = express.Router();
const {
  getAllData,
  postDataById,
} = require("../controllers/products.controller");

router.post("/post/:id_video", postDataById);

router.get("/getAllData/:id_video", getAllData);

module.exports = router;
