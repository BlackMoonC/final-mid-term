const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    username: {
      type: "string",
      required: true,
    },
    comment: {
      type: "string",
      required: true,
    },
    id_video: {
      required: true,
      type: "string",
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
