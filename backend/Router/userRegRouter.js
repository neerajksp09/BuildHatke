const express = require('express');
const userRegRouter = express.Router();
const userRegModal= require('../Modal/userRegModal');
const contractorModal = require('../Modal/contractorModal');

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
userRegRouter.put('/:id',async (req,res)=>{
    const user = req.body;
    const id = req.params.id;
    await userRegModal.findByIdAndUpdate(id,user);
    res.json({ msg: "success", user: user });
})
userRegRouter.delete('/:id',async (req,res)=>{
    const id = req.params.id
    await userRegModal.findByIdAndDelete(id);
    res.json({ msg: "success"});
})


// login code 

userRegRouter.post("/login", async (req, res) => {
    const { email, pass } = req.body;
    // console.log("email"+ email);
    const user = await userRegModal.findOne({ email });
     const contractor = await contractorModal.findOne({ email });
    // console.log("user"+user);
if(user){
     if (user.pass !== pass) {
        return res.json({ msg: "invalid password" });
    }

    res.json({ msg: "success", user });
    
}

else if(contractor){
      if (contractor.pass !== pass) {
        return res.json({ msg: "invalid password" });
    }

    res.json({ msg: "success", role:contractor.role});

}

else{
     return res.json({ msg: "user not found" });
}

   
});

module.exports=userRegRouter