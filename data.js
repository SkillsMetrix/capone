const express = require("express");
const bp = require("body-parser");
var _= require('underscore')
var app = express();
app.use(express.static("public"));
app.use(bp.json());
uid = 1;
userdata = [];
app.get("/loadusers", (req, res) => {
  res.send(userdata);
});
app.get("/loaduser/:id", (req, res) => {
  const uid = parseInt (req.params.id);
   var mtd=_.findWhere(userdata,{id:uid})
  
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
