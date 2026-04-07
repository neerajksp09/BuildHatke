import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import axios from 'axios';

function ConDash() {

    const [projectData ,setProjectData]=useState([]);

    const getprojectData= async ()=>{
      const res = await axios.get('http://localhost:3000/api/user/project')
      // console.log(res);
    if(res.data.msg=="success"){
      setProjectData(res.data.project)
    }
    }

    const updateStatus = async (id, status) => {
  const res = await axios.put(`http://localhost:3000/api/user/project/status/${id}`,{ status });

  if (res.data.msg === "updated") {
    getprojectData(); 
  }
};



useEffect(()=>{
  getprojectData()
  updateStatus();
},[])
  return (
   <>
 <div className="container-fluid">
    <div className="row">
        <div className="col-lg-4">
              <Link to={'/condash'}>Dash</Link> <br /> <br />
              <Link to="projectreport">projectreport</Link>
              <br /><br />
              <Link to="bids">bids</Link>
        </div>
        <div className="col-lg-8">
           <h3> Contractor Dash</h3>

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
     {/* <td>
  <button 
    className='btn btn-success'
    onClick={() => updateStatus(e._id, "accepted")}
  >
    Accept
  </button> 

  <button 
    className='btn btn-danger'
    onClick={() => updateStatus(e._id, "rejected")}
  >
    Reject
  </button>
</td> */}
<td>
  {e.status !== "accepted" && (
    <button 
      className='btn btn-success'
      onClick={() => updateStatus(e._id, "accepted")}
    >
      Accept
    </button>
  )}

  {e.status !== "rejected" && (
    <button 
      className='btn btn-danger ms-2'
      onClick={() => updateStatus(e._id, "rejected")}
    >
      Reject
    </button>
  )}
</td>
    </tr>
    ))
  }
  </tbody>
</table>

<Outlet />
        </div>
        
    </div>
 </div>

   </>
  )
}

export default ConDash
