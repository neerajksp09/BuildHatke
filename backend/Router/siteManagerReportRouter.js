const express =require('express');
const siteManagerModel = require('../Modal/siteManagerModel');
const SiteManagerReport = require('../Modal/SiteManagerReport');
const smReportRouter =express.Router();
smReportRouter.get('/',async(req,res)=>{
   const report = await SiteManagerReport.find().populate('smuid').populate('uid').populate('projectId')
   return res.json({
    msg:"success",
    "report":report
   })
})
smReportRouter.post('/',async(req,res)=>{
   const report = await SiteManagerReport.create(req.body)
   return res.json({
    msg:"success",
    "report":report
   })
   
})
smReportRouter.put('/:id',async(req,res)=>{
   const id =req.params.id
   const report = await SiteManagerReport.findByIdAndUpdate(id,req.body)
   return res.json({
    msg:"success",
    "report":report
   })
   
})
smReportRouter.delete('/:id',async(req,res)=>{
   const id =req.params.id
   const report = await SiteManagerReport.findByIdAndDelete(id)
   return res.json({
    msg:"success",
    "report":report
   })
   
})

module.exports=smReportRouter