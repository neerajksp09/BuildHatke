const express =require('express')
const materialModel = require('../Modal/materialModel');
const upload = require('../upload');
const MaterialRouter =express.Router()

MaterialRouter.get('/',async(req,res)=>{
    const material = await materialModel.find();
    res.json({"msg":"success",material})
})
MaterialRouter.get('/:smId',async(req,res)=>{
    const smId =req.params.smId
    const material = await materialModel.find({ smId: smId });
    res.json({"msg":"success",material})
})
MaterialRouter.post('/', upload.single('materialImage'),async(req,res)=>{
   const data ={...req.body,
     materialImage:req.file.filename
   }
    const material = await materialModel.create(data);
    res.json({"msg":"success",material})
})
MaterialRouter.put('/:id', upload.single('materialImage'), async (req, res) => {
  const id = req.params.id;

  const data = {
    ...req.body,
    ...(req.file && { materialImage: req.file.filename })
  };

  const material = await materialModel.findByIdAndUpdate(id, data);
  res.json({ "msg": "success", material });
});
MaterialRouter.delete('/:id',async(req,res)=>{
    const id =req.params.id
    const material = await materialModel.findByIdAndDelete(id);
    res.json({"msg":"success",material})
})
module.exports=MaterialRouter;