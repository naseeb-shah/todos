 const mongoose= require('mongoose')



 var user =  new mongoose.Schema(
    {
        username:String,
    password: String,
    email: String,
   
    emailOTP:Number,
    todos:[Object]
    
    
     },{
        timestamps: true
     })
     var users= mongoose.model('username',user)
  module.exports=users