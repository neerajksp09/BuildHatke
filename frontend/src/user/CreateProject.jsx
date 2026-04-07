import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';

function CreateProject() {

        const [location,setLocation]= useState('');
    const [plotsize,setPlotsize]= useState('');
    const [budget,setBudget]= useState('');
    const [material,setMaterial]= useState('');
    const [timeline,setTimeline]= useState('');

const projectcode = async (e)=>{
e.preventDefault()
const project ={location,plotsize,budget,material,timeline};
    const res = await axios.post("http://localhost:3000/api/user/project",project)
    if(res.data.msg=="success"){
        toast.success("project success");
    }
    else{
        toast.error("somthing went wrong");
    }
}
  return (
  <>
  <h4>Create Project</h4>
 <form  className='mx-start w-50' onSubmit={projectcode}>
        <label htmlFor="">Location</label>
        <input type="text" className='form-control ' value={location} onChange={(e)=>setLocation(e.target.value)}/>
        <br />
       
        <label htmlFor="">Plot Size</label>
        <input type="text" name="" id="" className='form-control ' value={plotsize} onChange={(e)=>setPlotsize(e.target.value)}/>
        <br /> 
        <label htmlFor="">Budget Details</label>
        <input type="text" className='form-control ' value={budget} onChange={(e)=>setBudget(e.target.value)}/>
        <br />
        <label htmlFor="">Timeline</label>
        <input type="text"className='form-control ' value={timeline} onChange={(e)=>setTimeline(e.target.value)}/>
        <br /> 
        <label htmlFor="">Material Quality</label>
        <select className='form-control ' value={material} onChange={(e)=>setMaterial(e.target.value)}>
            <option >Basic </option>
            <option>Standard</option>
            <option>Premium</option>
        </select>
<br />
        <button type='submit' className='btn btn-success w-50 d-flex justify-content-center'>Save</button>
        </form>
  </>
  )
}

export default CreateProject
