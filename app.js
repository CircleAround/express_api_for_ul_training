const express = require("express");
const cors = require('cors');
const app = express();
const port = 8888;

const server = app.listen(port, function(){
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

const todos = [
  {id: 1, text: 'task1', done: false },
  {id: 2, text: 'task2', done: false },
  {id: 3, text: 'task3', done: false }
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
});

app.get("/api/todos", function(req, res, next){
  res.json(todos);
});

app.post('/api/todos', function (req, res, next) {
  const data = { id: todos.length + 1, text: req.body.text, done: false  }
  todos.push(data)
  res.json(data)
});