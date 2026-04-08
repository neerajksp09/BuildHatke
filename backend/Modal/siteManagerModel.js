const mongoose = require('mongoose')
const siteManagerSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
     number:{
        type:String,
        required:true
    },
     email:{
        type:String,
        required:true,
        unique:true
             
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
         type:String,
         required:true,
    },
    qualification:{
     type:String,
     required:true
    },
    skill:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    rating:{
        type:String,
      
    },
    role:{
    type:String,
    default:"Site Manager"
    },
    address:{
        type:String,
        required:true
    },
     city:{
        type:String,
        required:true
    },
     pin:{
        type:String,
        required:true
    },
    status:{
        type:String,
        
    }

},{
    timestamps:true
})

module.exports= mongoose.model("SiteManager",siteManagerSchema)