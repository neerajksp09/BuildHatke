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
    }
})

module.exports = mongoose.model("SiteManagerReport", SiteManagerReport)