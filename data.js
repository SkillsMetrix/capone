const express = require("express");
const bp = require("body-parser");
var app = express();
app.use(express.static("public"));
app.use(bp.json());
uid = 1;
userdata = [
  /*  {uname:'admin',email:'admin@mail.com'},
    {uname:'manager',email:'manager@mail.com'},
    {uname:'QA',email:'QA@mail.com'} */
];
app.get("/loadusers", (req, res) => {
  res.send(userdata);
});
app.get("/loaduser/:id", (req, res) => {
  const uid = parseInt (req.params.id);
   var mtd;
  userdata.forEach(function (todo) {
    if (uid === todo.id) {
      mtd = todo;
    }
  });
  if (mtd) {
    res.json(mtd);
  } else {
    res.status(404).send();
  }
});
app.post("/adduser", (req, res) => {
  const data = req.body;
  data.id = uid++;
  userdata.push(data);
  res.send(data);
});

app.listen(4000, () => {
  console.log("server is ready...!");
});
