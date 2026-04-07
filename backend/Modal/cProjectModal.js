const mongoose = require('mongoose')
const projectSchema = mongoose.Schema({
    location:{
        type:String,
        required:true
    },plotsize:{
        type:String,
        required:true
    },budget:{
         type:String,
        required:true
    },
    timeline:{
         type:String,
        required:true
    },material:{
         type:String,
        required:true
    },
    status: {
  type: String,
  default: "pending"
}
})

module.exports= mongoose.model("project",projectSchema);