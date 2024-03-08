const jwt= require('jsonwebtoken')
const config= require('./config')

module.exports=(req,res,next)=>{
    const token=req.body.token || req.query.token || req.headers['x-access-token']
    //decode token
    if(token){
        jwt.verify(token,config.secret,function(err,decoded){
            if(err){
                return res.status(401).json({"error":true,"message":"Unauthorized Access"})
            }
            req.decoded=decoded
            next()
        })
    }else{
        res.status(403).send({
            "error":true,
            "message":"No Token Found"
        })
    }
}






const express= require('express')
var bp= require('body-parser')
const jwt= require('jsonwebtoken')
const config= require('./config')
const router= express.Router()

const app= express()

router.use(require('./tokenChecker'))
router.get('/secure',(req,res)=>{
    res.send('I am secured...!')
})
app.use('/api',router)
app.listen(4000,()=>{
    console.log('server is ready');
})
