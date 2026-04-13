import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';

function Bids() {
     const [projectData ,setProjectData]=useState([]);
    const [report ,setReport]=useState([]);

    const getprojectData= async ()=>{
      const res = await axios.get('http://localhost:3000/api/user/project')
      // console.log(res);
    if(res.data.msg=="success"){
const d = res.data.project.filter(
  (e) => e.uid?._id === localStorage.getItem('userId')
);      
setProjectData(d);

      // console.log(d);
// console.log(report[0])

    }
    }

    const getreport = async ()=>{
      const res = await axios.get(`http://localhost:3000/api/sitemanager/report`)
      if(res.data.msg=="success"){
        const d = res.data.report.filter(
  (e) => e.uid?._id === localStorage.getItem('userId')
);
        setReport(d)
        // console.log(res.data.report[0]);
      }
    }

   async function approved(e){
    const status= {status:"in-progress"};
      if(e.status=="Aproved"){
        toast.error("You have already approved")
      }
      if(e.status=="in-progress"){
        toast.error("Your Status is in progress")
      }

     if(e.status=="Deactive"){
      const res = await axios.put(`http://localhost:3000/api/sitemanager/report/${e._id}`,status);
      if(res.data.msg=="success"){
        toast.success("Status upadate success");
        console.log(res.data.report.status);
      }
      else{
        toast.error("Something wend Wrong")
      }
     }
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

       <th scope="col">Refrence</th>
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
      <td><img src={`http://localhost:3000/upload/${e.img}`} height={50} alt="" /></td>
      <td>{e.location}</td>
      <td>{e.plotsize}</td>
      <td>{e.budget}</td>
      <td>{e.timeline}</td>
      <td>{e.material}</td>
      <td> {
    report.find((u) => u.projectId?._id === e._id)?.status || "No Report"
  }</td>
 
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
      <th scope="col">status</th>
      <th scope="col">action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{i+1}</th>
      <td>{e.budget}</td>
      <td>{e.timeline}</td>
      <td>{e.status}</td>
      <td><button className='btn btn-outline-success' onClick={()=>approved(e)}>Approved</button></td>
      
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

export default Bids
