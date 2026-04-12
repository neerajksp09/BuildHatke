const mongoose = require('mongoose')
const SiteManagerReport = mongoose.Schema({
    budget: {
        type: String,
        required: true
    },
    timeline: {
        type: String,
        required: true
    },
    smuid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SiteManager",
        
    },
    uid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    projectId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project"
    },
    constractorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"contractor"
    },

     status: {
        type: String,
        default:"Deactive"
    },
    accept:{
        type:String,
        default:"No"
    }
})


module.exports = mongoose.model("SiteManagerReport", SiteManagerReport)