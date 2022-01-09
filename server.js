const express = require("express")
const app = express();
const http = require('http').createServer(app);
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require('path');

app.use(cors());
app.use(bodyParser.json({limit: '10mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
app.use(express.static(path.join(__dirname, 'react-chat/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/react-chat/build/index.html'));
});

const io = require('socket.io')(http, {
    cors: {
      origin: "*",
      credentials: true
    }
  });

const PORT = process.env.PORT || 8080;

let messages=["Hello!", "How are you", "Whats your name"]

http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});

io.on('connection', (socket) => {
    socket.emit('connection', messages);
});

app.get("/api/get", (req, res) => {res.send(messages)})

app.post("/api/post", (req,res) => {
  messages=[req.body.newMessage, ...messages];
  res.send(messages);
  io.emit("newMessages", messages);
})