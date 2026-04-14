const express =require('express')
const materialModel = require('../Modal/materialModel')
const MaterialRouter =express.Router()

MaterialRouter.get('/',async(req,res)=>{
    const material = await materialModel.find();
    res.json({"msg":"success",material})
})
MaterialRouter.get('/:id',async(req,res)=>{
    const id =req.params.id
    const material = await materialModel.findById(id);
    res.json({"msg":"success",material})
})
MaterialRouter.post('/',async(req,res)=>{
    const material = await materialModel.create(req.body);
    res.json({"msg":"success",material})
})
MaterialRouter.put('/:id',async(req,res)=>{
    const id =req.params.id
    const material = await materialModel.findByIdAndUpdate(id,req.body);
    res.json({"msg":"success",material})
})
MaterialRouter.delete('/:id',async(req,res)=>{
    const id =req.params.id
    const material = await materialModel.findByIdAndDelete(id);
    res.json({"msg":"success",material})
})
module.exports=MaterialRouter;