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
        required: true
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