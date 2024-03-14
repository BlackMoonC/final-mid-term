require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const mongoString = process.env.DATABASE_URL;
const { join } = require("node:path");

//todo: Import WebSocket
const { createServer } = require("http");
const { Server } = require("socket.io");
const setupSocket = require("./socket");

// List routes
const productRoute = require("./routes/products.route");
const commentsRoute = require("./routes/comments.route");
const videosRoute = require("./routes/videos.route");
const contentsRoute = require("./routes/contents.route");

// Mongoose configuration
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("connected database");
});

const app = express();

//TODO: Create socket server
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

app.use(cors());
app.use(express.json());

// Setup body parser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

io.on("connection", (socket) => {
  // console.log(`⚡: ${socket.id} user just connected!`);
  socket.on("disconnect", () => {
    // console.log("🔥: A user disconnected");
  });
});

setupSocket(io);

app.use("/products", productRoute);
app.use("/comments", commentsRoute);
app.use("/videos", videosRoute);
app.use("/contents", contentsRoute);

server.listen(3001, () => {
  console.log(`Server listening on http://localhost:${3001}`);
});
