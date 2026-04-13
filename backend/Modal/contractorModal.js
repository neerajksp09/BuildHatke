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
    cpass:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    address:{
        type:String,required:true
    },
    licenseNumber:{
        type:String,required:true
    },
    exp:{
        type:String,required:true
    },
    certification:{
        type:String,required:true
    },
    siteman:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"Contractor"
    },
    img:{
        type:String
    }
})

module.exports= mongoose.model("contractor",contractorSchema);