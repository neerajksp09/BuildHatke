const express =require('express');
const siteManagerModel = require('../Modal/siteManagerModel');
const siteManagerRouter=express.Router()

siteManagerRouter.get('/',async(req,res)=>{
   const user = await siteManagerModel.find()
   return res.json({
    msg:"success",
    "user":user
   })
})
siteManagerRouter.get('/:id',async(req,res)=>{
   const id = req.params.id
   const user = await siteManagerModel.findById(id)
   return res.json({
    msg:"success",
    "user":user
   })
})
siteManagerRouter.post('/',async(req,res)=>{
   const user = await siteManagerModel.create(req.body)
   return res.json({
    "msg":"success",
    "user" :user
   })
})
// siteManagerRouter.post('/:id',async(req,res)=>{
//    const id =req.params.id;
//    const user = await siteManagerModel.create(req.body)
//    return res.json({
//     "msg":"success",
//     "user" :user
//    })
// })

siteManagerRouter.post('/login',async(req,res)=>{
    const { email, password } = req.body;

   const user = await siteManagerModel.findOne({email,password});
   if(user){
      if(user.password !==password ){
         res.json({"msg":"invaild"});
      }
      res.json({"msg":"success",user})
   }
   else{
      res.json({"msg":"user not found"});
   }
   
   
  
})

module.exports= siteManagerRouter