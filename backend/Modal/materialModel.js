const mongoose =require('mongoose')
const materialSchema =mongoose.Schema({
    materialName:{
        type:String,
        required:true
    },
     materialQnty:{
        type:String,
        required:true
    },
     materialPrice:{
        type:String,
        required:true
    },
     materialImage:{
        type:String,
        required:true
    },
    smId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SiteManager"
    }
},{
    timestamps:true
})
module.exports=mongoose.model("material",materialSchema)