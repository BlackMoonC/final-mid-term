const {
  submitComment,
  getListComment,
} = require("./controllers/comments.controller");

module.exports = (io) => {
  io.on("connection", (socket) => {
    socket.on("id rooms", async (id_room) => {
      socket.join(id_room);
      const allComment = (await getListComment(id_room)).reverse();
      io.to(id_room).emit("received history comments", allComment);
    });

    socket.on("send message", async (comment) => {
      //   io.emit();\
      const data = await submitComment(comment);
      console.log(data);
      /*
       *Important: Disini salah Awal using socket.to.kwrkewhr
       *Seharusnya: io.to.wjekwjr
       */
      io.to(comment.id_video).emit("received comment", data);
    });
  });
};
