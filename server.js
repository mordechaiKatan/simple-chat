const express = require("express")
const app = express();
const http = require('http').createServer(app);
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require('path');
const { port } = require('./config');
const connect = require('./db');

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(express.static(path.join(__dirname, 'react-chat/build')));

const io = require('socket.io')(http, {
    cors: {
      origin: "*",
      credentials: true
    }
  });

let messages=[];

http.listen(port, () => {
    console.log(`listening on *:${port}`);
});

// connect().then(() => {
//   console.log('MONGO DB is connected');
//   http.listen(port, () => {
//     console.log('Server is up with express on port: ', port);
//   });
// });

app.get("/api/get", (req, res) => {res.send(messages)})

app.get("/api/clear", (req,res) => {
  messages=[];
  res.send(messages);
  io.emit("clear")
})

app.post("/api/post", (req,res) => {
  messages=[req.body, ...messages];
  res.send(req.body);
  io.emit("newMessage", req.body);
})