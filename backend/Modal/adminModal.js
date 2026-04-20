const mongoose = require('mongoose')

const adminSchema= mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    },

    role:{
        type:String,
        default:"admin"
    },
    status:{
        type:String,
        default:"u"
    }
})

module.exports=mongoose.model("admin",adminSchema);