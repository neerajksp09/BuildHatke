const express = require('express');
const userRegRouter = express.Router();
const userRegModal= require('../Modal/userRegModal');
const contractorModal = require('../Modal/contractorModal');
const upload = require('../upload');

userRegRouter.get('/',async (req,res)=>{
    const user = await userRegModal.find();
    
    res.json({"msg":"success","user":user})
})

userRegRouter.post("/", async (req,res)=>{
    
   const user= await userRegModal.create(req.body);
    res.json({"msg":"success","user":user})
})
userRegRouter.get('/:id',async (req,res)=>{
    const id = req.params.id;
 const user = await userRegModal.findById(id);
res.json({ "msg": "success", "user": user });
})
userRegRouter.put('/:id',upload.single('img'),async (req,res)=>{
    const data = {...req.body,
    img: req.file.filename}
    const id = req.params.id;
  const user =  await userRegModal.findByIdAndUpdate(id,data);
    res.json({ msg: "success", user: user });
})
userRegRouter.delete('/:id',async (req,res)=>{
    const id = req.params.id
    await userRegModal.findByIdAndDelete(id);
    res.json({ msg: "success"});
})


// login code 

userRegRouter.post("/login", async (req, res) => {
    const { email, pass, cpass } = req.body;
   
    const user = await userRegModal.findOne({ email });
   
if(user){
     if (user.pass !== pass ) {
        return res.json({ msg: "invalid password" });
    }
    // if(cpass !== pass){
    //      return res.json({ msg: "Does not Confirm password" });
    // }
    
    res.json({ msg: "success",user,role: user.role});
    
}

else{
     return res.json({ msg: "user not found" });
}

   
});

module.exports=userRegRouter