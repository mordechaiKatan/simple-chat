const express = require("express")
const app = express();
const http = require('http').createServer(app);
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require('path');

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(express.static(path.join(__dirname, 'react-chat/build')));

const io = require('socket.io')(http, {
    cors: {
      origin: "*",
      credentials: true
    }
  });

const PORT = process.env.PORT || 8080;

let messages=[];

http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});

app.get("/api/get", (req, res) => {res.send(messages)})

app.get("/api/clear", (req,res) => {
  messages=[];
  res.send(messages);
  io.emit("clear")
})

app.post("/api/post", (req,res) => {
  messages=[req.body, ...messages];
  res.send(messages);
  io.emit("newMessage", req.body);
})