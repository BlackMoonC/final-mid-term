const Comment = require("../models/comments.model");

// todo: implement submit comment
const submitComment = async (req, res) => {
  try {
    console.log("Submit Comment");
    // console.log("Submit Comment: " + req.params.id_video);
    const comment = new Comment({
      username: req.body.username,
      comment: req.body.comment,
      id_video: req.params.id_video,
    });
    const commentSave = await comment.save();
    res.json(commentSave);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
// todo: implemnt get all comments
const getListComment = async (req, res) => {
  try {
    const idVideo = req.params.id_video;
    console.log(idVideo);
    const comments = await Comment.find({ id_video: idVideo });
    res.json(comments);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = {
  submitComment,
  getListComment,
};
