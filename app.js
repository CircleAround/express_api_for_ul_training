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

const customers = [
  { "id": 1,"name": "鈴木太郎", "gender": "男", "birthday": "1990/02/18", "organizationId": 1 },
  { "id": 2, "name": "田中次郎", "gender": "男", "birthday": "1996/12/08", "organizationId": 1 },
  { "id": 3, "name": "町田真美", "gender": "女", "birthday": "1993/05/11", "organizationId": 1 },
  { "id": 4, "name": "大田三郎", "gender": "男", "birthday": "1991/08/13", "organizationId": 1 },
  { "id": 5, "name": "松井花子", "gender": "女", "birthday": "1988/12/18", "organizationId": 2 },
  { "id": 6, "name": "村田四郎", "gender": "男", "birthday": "1998/07/12", "organizationId": 2 },
  { "id": 7, "name": "清田加奈子", "gender": "女", "birthday": "1997/06/19", "organizationId": 2 },
  { "id": 8, "name": "松井京子", "gender": "女", "birthday": "1992/06/19", "organizationId": 3 },
  { "id": 9, "name": "斎藤久美子", "gender": "女", "birthday": "1992/09/01", "organizationId": 3 },
  { "id": 10, "name": "松本五郎", "gender": "男", "birthday": "1987/01/27", "organizationId": 3 }
];

const organizations = [
  {　"id": 1,　"name": "A株式会社"　},
  {　"id": 2,　"name": "B商事(株)"　},
  {　"id": 3,　"name": "株式会社C"　}
];

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

app.get("/api/customers", function(req, res, next){
  res.json(customers);
});

app.get("/api/organizations", function(req, res, next){
  res.json(organizations);
});