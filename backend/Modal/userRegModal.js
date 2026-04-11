const mongoose = require('mongoose');
const userSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
    type:String,
         required:true
    },
    number:{
        type:String,
        required:true
    },city:{
        type:String,
        required:true
    }
    ,cpass:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    },role:{
        type:String,
        default:"user"
    }
})

module.exports=mongoose.model("user",userSchema);