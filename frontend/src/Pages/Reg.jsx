import React from 'react'
import { useState } from 'react'
import  {Link}  from 'react-router-dom'
import axios from 'axios'
import {toast}  from 'react-toastify';

function Reg() {
    const [name ,setName]=useState('');
    const [email ,setEmail]=useState('');
    const [pass ,setPass]=useState('');
    const [number ,setNumber]=useState('');
    const [city ,setCity]=useState('');
    const [enq ,setEnq]=useState('');

    const regcode=  async(e)=>{
        e.preventDefault()

        const user ={name,email,pass,city,number,enq,};
        const res= await axios.post('http://localhost:3000/api/reg',user)
        if(res.data.msg=="success"){
            toast.success("Enquiry successfull...")
        }
        else{
            toast.error("Something went wrong...")
        }
    }

  return (
   <>
   {/* <Link to="Login" className='btn btn-dark p-2 m-2'>Login</Link> */}
   <br />
    {/* <Link to="conreg" className='btn btn-dark p-2 m-2'>con regi</Link> */}
   <form onSubmit={regcode} className='w-50 mx-auto '>
    <h2>Registration Form</h2>
    
    <label htmlFor="">Name</label>
    <input type="text" placeholder='Enter name...' className='form-control' value={name} onChange={(e)=>setName(e.target.value)} />
    <br />
    <label htmlFor="">Number</label>
    <input type="number" placeholder='Enter number...' className='form-control' value={number} onChange={(e)=>setNumber(e.target.value)}/> <br />
    <label htmlFor="">City</label>
    <input type="text" placeholder='Enter city...' className='form-control' value={city} onChange={(e)=>setCity(e.target.value)}/> <br />
    <label htmlFor="">Email</label>
    <input type="email" placeholder='Enter email...'className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/> <br />
    <label htmlFor="">Password</label>
    <input type="password" placeholder='Enter password...'className='form-control' value={pass} onChange={(e)=>setPass(e.target.value)}/> <br />
    <label htmlFor="">Enquiry</label>
    <textarea placeholder='Enter enquiry' className='form-control' value={enq} onChange={(e)=>setEnq(e.target.value)}/>
    <button type='submit' className='btn btn-success mx-auto w-25 mt-2 d-flex justify-content-center'>Submit</button>
   </form>
   </>
  )
}

export default Reg
