import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Myproject() {
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
   <table class="table">
  <thead>
    <tr>
      <th scope="col">Sr No</th>
      <th scope="col">location</th>
      <th scope="col">plotsize</th>
      <th scope="col">budget</th>
      <th scope="col">timeline</th>
      <th scope="col">material</th>
      <th scope="col">Action</th>
      

    </tr>
  </thead>
  <tbody>
  {
    projectData.map((e,i)=>(
        <tr key={i}>
      <th scope="row" >{i+1}</th>
      <td>{e.location}</td>
      <td>{e.plotsize}</td>
      <td>{e.budget}</td>
      <td>{e.timeline}</td>
      <td>{e.material}</td>
 
{/* <td style={{color:`${e.status=='accepted'? "green" : "red"}`}}>{e.status=="accepted"?"Accept":"Reject"}</td> */}
   
   <td>
  {e.status === "accepted" && (
    <Link to={`bid/${e._id}`} className="btn btn-primary">
      Place Bid
    </Link>
  )}
</td>
   
    </tr>
    ))
  }
  </tbody>
</table>
  </>
  )
}

export default Myproject
