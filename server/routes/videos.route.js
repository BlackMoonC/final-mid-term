const express = require("express");
const router = express.Router();
const { getAllData, getDataById } = require("../controllers/videos.controller");

router.get("/getAllData", getAllData);
router.get("/getData/:id", getDataById);

module.exports = router;
