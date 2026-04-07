import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';

function ConReg() {
     const [email, setEmail] = useState('');
      const [pass, setPass] = useState('');

      const regcode = async (e)=>{
           e.preventDefault()
        const con ={email,pass}
        const res = await axios.post('http://localhost:3000/api/con/reg',con);
        if(res.data.msg=="success"){
            toast.success("contractor register")
           
              
        }
        else{
            toast.error("something went wrong")
        }
      }
  return (
    <>
     <h4 className='text-center'>Con reg </h4>
   <form onSubmit={regcode} className='mx-auto w-25 my-5 '>
    <label htmlFor="">Email </label>
    <input type="email" placeholder='Enter a email...' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <br /><br />
    <label htmlFor="">Password</label>
    <input type="password" placeholder='Enter a password...' className='form-control' value={pass} onChange={(e)=>setPass(e.target.value)}/> <br /><br />
    <button type='submit' className='btn btn-success mx-auto w-25 mt-2 d-flex justify-content-center'>Login</button>
   </form>
    </>
  )
}

export default ConReg
