const mongoose = require("mongoose");

const contentSchema = mongoose.Schema(
  {
    seller: {
      type: "string",
      required: true,
    },
    id_video: {
      type: "string",
      required: true,
    },
    title: {
      required: true,
      type: "string",
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("Content", contentSchema);
