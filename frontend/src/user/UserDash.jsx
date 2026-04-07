import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, Links, Outlet } from 'react-router-dom'
import { toast } from 'react-toastify';

function UserDash() {
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

 const [projectData ,setProjectData]=useState([]);

    const getprojectData= async ()=>{
      const res = await axios.get('http://localhost:3000/api/user/project')
      // console.log(res);
    if(res.data.msg=="success"){
      setProjectData(res.data.project)
    }
    }

    useEffect(()=>{
getprojectData();
    },[])
    
  return (
   <>
  <div className="row mt-2">
    <div className="col-lg-3">
      <div className="bg-success p-2 rounded-2">
      <span className="fw-bold text-white">  65 %</span> <span className="text-white">Project Completion</span>
      </div>
    </div>
    <div className="col-lg-3">
       <div className="bg-danger p-2 rounded-2">
      <span className="fw-bold text-white">12</span> <span className="text-white">Days Until <br /> Deadline</span>
      </div>
    </div>
    <div className="col-lg-3">
       <div className="bg-warning p-2 rounded-2">
      <span className="fw-bold text-white">4</span> <span className="text-white">Unread <br /> Messages</span>
      </div>
    </div>
    <div className="col-lg-3">
       <div className="bg-primary p-2 rounded-2">
      <span className="fw-bold text-white">25200</span> <span className="text-white"> <br /> Total spent</span>
      </div>
    </div>
  </div>

  <div className="row">
    <div className="col-lg-3 my-3">
      <div className=" bg-light p-1 border ">
        <p className="fw-bold">Lakeview Residence</p>
      <hr />
      <p className=""><span className="fw-bold">Partire</span> : project</p>
      <hr />
      <p className=""><span className="fw-bold">End Date:</span> 07-04-2026</p>
      <hr />
      <p className=""><span className="fw-bold">Progress</span> : 65 %</p>
      </div>
      
    </div>
    <div className="col-lg-6 my-3">
      <div className="bg-light p-1 border">
         <p className="fw-bold px-3 pt-2">Project Overview</p>
         <img src="/src/assets/banner.png" className='img-fluid px-2 rounded-2' alt="" />
         <hr />
         <p className="d-flex justify-content-between"><span className="fw-bold">Estimated Budget</span> <span className="">20000</span></p> <hr />
               <p className="d-flex justify-content-between"><span className="fw-bold">spent so far</span> <span className="">25000</span></p> <hr />
         <p className="d-flex justify-content-between"><span className="fw-bold">Start Date </span> <span className="">07-04-2026</span></p> <hr />
         <p className="d-flex justify-content-between"><span className="fw-bold">Deadline </span> <span className="">08-4-2026</span></p>

      </div>
    </div>

    <div className="col-lg-3 my-3">
      <div className="bg-light p-1 border">         <p className="d-flex justify-content-between"><span className="fw-bold">Estimated Budget :</span> <span className="">20000</span></p> <hr />
               <p className="d-flex justify-content-between"><span className="fw-bold">spent so far :</span> <span className="">25000</span></p> <hr />
         <p className="d-flex justify-content-between"><span className="fw-bold">Start Date :</span> <span className="">07-04-2026</span></p> <hr />
         <p className="d-flex justify-content-between"><span className="fw-bold">Deadline :</span> <span className="">08-4-2026</span></p></div>
    </div>
  </div>

  <div className="row">
    <div className="col-lg-3">
      <div className=""><p className="">Recent Activity</p>
    <div className="">
      <img src="/src/assets/logo.jpeg" alt="" height={50} /> <span>abhishek (contractor)</span>
      <p className="">add site photo</p> <span>1 hour ago</span>
 
    </div>

      </div>
    </div>
    <div className="col-lg-6"></div>
    <div className="col-lg-3"></div>
  </div>
   </>
  )
}

export default UserDash
