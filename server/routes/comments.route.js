const express = require("express");
const {
  submitComment,
  getListComment,
} = require("../controllers/comments.controller");
const router = express.Router();

router.get("/getAllData/:id_video", getListComment);
router.post("/post/:id_video", submitComment);

module.exports = router;
