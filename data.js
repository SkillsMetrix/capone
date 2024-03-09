const express = require("express");
const bp = require("body-parser");
var _= require('underscore')
const mongoose= require('mongoose')
const empcrud=require('./model/model')
var app = express();
var middleware= require('./middleware')
app.use(express.static("public"));
app.use(bp.json());
uid = 1;
userdata = [];

const uri = "mongodb+srv://amar:amar123@cluster0.rle5i.mongodb.net/capdb?retryWrites=true&w=majority&appName=Cluster0";


app.use(middleware.logger)

app.get("/loadusers",middleware.requireAuth, async(req, res) => {
  const users= await empcrud.find()
  return res.send(users)
 });
app.get("/loaduser/:id", async(req, res) => {
  const uid = parseInt (req.params.id);
  const user= await empcrud.findById(uid)
  return res.send(user)
  
   
});
app.post("/adduser", (req, res) => {
   const user=new empcrud({...req.body})
   user.save().then(()=> res.send('user added'))
  
});

app.delete("/deleteuser/:id", (req, res) => {
    const uid = parseInt (req.params.id);
     var mtd=_.findWhere(userdata,{id:uid})
     if (mtd) {
      userdata=_.without(userdata,mtd)
      res.json(mtd)
    } else {
      res.status(404).send();
    }
  });

const startServer=async()=>{
  await mongoose.connect(uri)
  app.listen(4000, () => {
    console.log("server is ready...!");
  });
}

startServer()


