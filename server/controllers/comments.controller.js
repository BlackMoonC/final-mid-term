const Comment = require("../models/comments.model");

//implement submit comment
const submitComment = async (newComment) => {
  const comment = new Comment({
    username: newComment.username,
    comment: newComment.comment,
    id_video: newComment.id_video,
  });
  const comments = await comment.save();
  return comments;
};

const getListComment = async (id_video) => {
  const comments = await Comment.find({ id_video: id_video })
    .sort({ createdAt: -1 })
    .limit(50);
  return comments;
};

//implement submit comment
// const submitComment = async (req, res) => {
//   try {
//     console.log("Submit Comment");
//     // console.log("Submit Comment: " + req.params.id_video);
//     const comment = new Comment({
//       username: req.body.username,
//       comment: req.body.comment,
//       id_video: req.params.id_video,
//     });
//     const commentSave = await comment.save();
//     res.json(commentSave);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };
// todo: implemnt get all comments

// const getListComment = async (req, res) => {
//   try {
//     const idVideo = req.params.id_video;
//     console.log(idVideo);
//     const comments = await Comment.find({ id_video: idVideo });
//     res.json(comments);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

module.exports = {
  submitComment,
  getListComment,
};
