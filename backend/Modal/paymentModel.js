const mongoose =require('mongoose')
const paymentSchema = mongoose.Schema({
    takepayment:{
        type:String,
        required:true
    },
    qrimage:{
        type:String
    },
    smid:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"SiteManager"
    }
})
module.exports=mongoose.model("payment",paymentSchema)