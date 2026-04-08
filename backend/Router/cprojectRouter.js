const express = require('express');
const cProjectModal = require('../Modal/cProjectModal');
const cprojectRouter  = express.Router();

cprojectRouter.get('/', async (req,res)=>{
    const project = await cProjectModal.find().populate('uid');
    
    res.json({"msg":"success","project":project})
})
cprojectRouter.post('/',async (req,res)=>{
    const project =await cProjectModal.create(req.body);
    // console.log(req.body.uid);
    res.json({"msg":"success"});
})
cprojectRouter.get('/:id',async (req,res)=>{
    const id = req.params.id
    const project =await cProjectModal.findById(id);
    res.json({"msg":"success","project":project});
})
cprojectRouter.put('/:id',async (req,res)=>{
    const id = req.params.id
    const project =await cProjectModal.findByIdAndUpdate(id,req.body);
    res.json({"msg":"success","project":project});
})
cprojectRouter.delete('/:id',async (req,res)=>{
    const id = req.params.id
    const project =await cProjectModal.findByIdAndDelete(id);
    res.json({"msg":"success"});
})
cprojectRouter.put('/status/:id', async (req, res) => {
  const { status } = req.body;

  await cProjectModal.findByIdAndUpdate(req.params.id, { status });
  res.json({ msg: "updated" });
});
module.exports= cprojectRouter;