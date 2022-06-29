const express = require("express");
const cors = require('cors');
const app = express();
const port = 8888;

const server = app.listen(8888, function(){
  console.log("Node.js is listening to PORT:" + server.address().port);
});
app.use(cors());
app.use(express.json());


const messages = [
  {
    "id": 1,
    "message": "hoge"
  },
  {
    "id": 2,
    "message": "fuga"
  },
  {
    "id": 3,
    "message": "piyo"
  }
]

app.get("/", (req, res) => {
  res.status(200).send("Express!!");
});

app.get("/api/messages", function(req, res, next){
  res.json(messages);
});

app.post('/api/messages', function (req, res, next) {
  console.log(req.body.message)
  const data = { id: messages.length + 1, message: req.body.message }
  messages.push(data)
  res.json(data)
})