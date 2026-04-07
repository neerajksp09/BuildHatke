const mongoose = require('mongoose');
const contractorSchema=  mongoose.Schema({
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
        default:"Contractor"
    }
})

module.exports= mongoose.model("contractor",contractorSchema);