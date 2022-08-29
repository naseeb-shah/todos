 const express =require('express')
var jwt = require('jsonwebtoken');
var body= require('body-parser');
const cors=require("cors")
const app=express()
const  {register,login,loged,addtask,task}= require("./controllers/user")
 const bcrypt =require('bcrypt')
const { decode } = require('punycode');
const exp = require('constants');
const { application } = require('express');
const bodyParser = require('body-parser');
app.use(cors())
const dataconnect = require('./database/index');
// app.use(express.json())
app.use(bodyParser.json())
app.get('/loged',loged)

 app.post('/reg',register)
 app.post('/login',login)
 app.post('/add/:id',addtask)
 app.get('/task/:id',task)


dataconnect().then(()=>{

   app.listen(5000,(err,res)=>{
      if(err)
      console.log(err)
      else
      console.log(`Server is Started at 5000`)
   })
})


