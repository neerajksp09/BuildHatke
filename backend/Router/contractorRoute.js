const express= require('express');
const contractorModal = require('../Modal/contractorModal');
const contractorRoute = express.Router();
const upload = require('../upload');

contractorRoute.post('/',async (req,res)=>{
    const con = await contractorModal.create(req.body);
    res.json({"msg":"success","con":con})
})
contractorRoute.put('/:id',upload.single('img'),async (req,res)=>{
    const id= req.params.id
    const data = {...req.body,
    img: req.file.filename}
    const con = await contractorModal.findByIdAndUpdate(id,data);
    res.json({"msg":"success","con":con})
})
contractorRoute.get('/',async (req,res)=>{
    const con = await contractorModal.find();
    res.json({"msg":"success","con":con})
})
contractorRoute.get('/:id',async (req,res)=>{
    const con = await contractorModal.findById(req.params.id);
    res.json({"msg":"success","con":con})
})
contractorRoute.post('/login', async (req,res)=>{
    const { email, pass , cpass} = req.body;
    const con = await contractorModal.findOne({email});

    if(con){
        if(con.pass !==pass){
             return res.json({ msg: "invalid password" });
        }
        res.json({ msg: "success", con, role:con.role });
    }
    else{
         return res.json({ msg: "user not found" });
    }
})

module.exports=contractorRoute;