const mongoose =require('mongoose')
const paymentSchema = mongoose.Schema({
    takepayment:{
        type:String,
        required:true
    },
    qrimage:{
        type:String
    },
    reportdetails:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"SiteManagerReport"
    }
})
module.exports=mongoose.model("payment",paymentSchema)