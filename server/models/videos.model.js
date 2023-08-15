const mongoose = require("mongoose");

const videoSchema = mongoose.Schema({
  title: {
    type: "string",
    required: true,
  },
  url_image: {
    type: "string",
    required: true,
  },
  thumbnail: {
    type: "string",
    required: true,
  },
});

module.exports = mongoose.model("Video", videoSchema);
