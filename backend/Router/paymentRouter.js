const express =require('express')
const paymentModel = require('../Modal/paymentModel');
const upload = require('../upload');
const paymentRouter =express.Router()
paymentRouter.get('/',async(req,res)=>{
    const payment =await paymentModel.find().populate('reportdetails');
    res.json({"msg":"success",payment})
})
paymentRouter.get('/:id',async(req,res)=>{
    const id =req.params.id
    const payment =await paymentModel.findById(id);
    res.json({"msg":"success",payment})
})
paymentRouter.post('/',upload.single('qrimage'),async(req,res)=>{
    const data = {...req.body,
        qrimage:req.file.filename}
    
    const payment =await paymentModel.create(data);
    res.json({"msg":"success",payment})
    
})
paymentRouter.post('/:id',async(req,res)=>{
    const id =req.params.id
    const payment =await paymentModel.create(id,req.body);
    res.json({"msg":"success",payment})
})
paymentRouter.put('/:id',async(req,res)=>{
    const id =req.params.id
    const payment = await paymentModel.findByIdAndUpdate(id,req.body);
    res.json({"msg":"success",payment})
})

module.exports=paymentRouter