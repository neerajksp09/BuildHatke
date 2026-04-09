import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Myproject() {
    const [projectData ,setProjectData]=useState([]);
    const [report ,setReport]=useState([]);

    const getprojectData= async ()=>{
      const res = await axios.get('http://localhost:3000/api/user/project')
      // console.log(res);
    if(res.data.msg=="success"){
      setProjectData(res.data.project)
    }
    }

    const getreport = async ()=>{
      const res = await axios.get(`http://localhost:3000/api/sitemanager/report`)
      if(res.data.msg=="success"){
        setReport(res.data.report)
      }
    }

    function approved(){
    
    }

    useEffect(()=>{
getprojectData();
getreport();
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
      <th scope="col">Status</th>
      
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
      <td>{e.status}</td>
 
{/* <td style={{color:`${e.status=='accepted'? "green" : "red"}`}}>{e.status=="accepted"?"Accept":"Reject"}</td> */}
   
   {/* <td>
  {e.status === "accepted" && (
    <Link to={`bid/${e._id}`} className="btn btn-primary">
      Place Bid
    </Link>
  )}
</td> */}

<td>
  <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
view report
</button>
</td>
   
    </tr>
    ))
  }
  </tbody>
</table>






{/* <!-- Modal --> */}
<div class="modal fade modal-lg" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body ">
       
         {
          report.map((e,i)=>(
            <>
                
      <div className="card p-3 mb-3">
          <div className="card mt-2 p-2" key={i}>
           <div className=""> <b>Name:- {e.smuid.name}</b>  <br />
            <b>number:-  {e.smuid.number}</b> <br />
            <b>Email:-  {e.smuid.email}</b> <br />
            <b>Role:-  {e.smuid.role}</b> <br />
            
            </div>
           

            </div>

            <div className="card mt-2">
            <div className="">
              <table class="table">
  <thead>
    <tr>
      <th scope="col">sr no</th>
      <th scope="col">budget</th>
     
      <th scope="col">timline</th>
      <th scope="col">action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{i+1}</th>
      <td>{e.budget}</td>
      <td>{e.timeline}</td>
      <td><button className='btn btn-outline-success' onClick={approved}>Approved</button></td>
      
    </tr>
  
  </tbody>
</table>
            </div>
            </div>
            
        
      </div>
    
     
      </>
  
        ))
        }
         
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  </>
  )
}

export default Myproject
