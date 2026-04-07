const express= require('express');
const contractorModal = require('../Modal/contractorModal');
const contractorRoute = express.Router();

contractorRoute.post('/',async (req,res)=>{
    const con = await contractorModal.create(req.body);
    res.json({"msg":"success","con":con})
})
contractorRoute.get('/',async (req,res)=>{
    const con = await contractorModal.find();
    res.json({"msg":"success","con":con})
})

module.exports=contractorRoute;