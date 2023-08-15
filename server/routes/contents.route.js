const express = require("express");
const { getAllContent } = require("../controllers/contents.controller");
const router = express.Router();

router.get("/getAllData", getAllContent);

module.exports = router;
