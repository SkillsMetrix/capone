const asyncHandler= require('express-async-handler')
const User= require('../models/userModel')
const bcrypt= require('bcrypt')
const registerUser=asyncHandler(async(req,res)=> {
    const {username,email,password} = req.body
    if(!username || !email || !password){
        res.status(400)
        throw new Error("All Fields are mandatory")
    }
    const userAvailable=await User.findOne({email})
    if(userAvailable){
        res.status(400)
        throw new Error("User already registered")
    }
    const hashedPassword=await bcrypt.hash(password,10)
    console.log('Hashed Password ' ,hashedPassword);
    res.json({message :'user registered'})
 })

const loginUser=asyncHandler((req,res)=> {
    res.json({message:' Login User'})
})

const currentUser=asyncHandler((req,res)=> {
    res.json({message:'Current User Information'})
})

module.exports={registerUser,loginUser,currentUser}






-----------

  const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_STRING);
    console.log("DB Connected");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectDB;


------------


  const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add username"],
    },
    email: {
      type: String,
      required: [true, "Please add email"],
      unique: [true, "Email is already taken"],
    },
    password: {
      type: String,
      required: [true, "Please add password"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);




-----------


  
const express= require('express')
const { registerUser, loginUser, currentUser } = require('../controllers/userController')
const router= express.Router()

router.post('/register',registerUser)

router.post('/login',loginUser)

router.get('/current',currentUser)

module.exports=router


---------------

  const express= require('express')
const connectDB= require('./config/dbConnection')
const dotenv= require('dotenv').config()

connectDB()
const app= express()


app.use(express.json())
app.use('/api/users',require('./routes/userRoutes'))
app.listen(4000,()=>{
    console.log('server is ready');
})
