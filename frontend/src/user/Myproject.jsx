import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';


function Myproject() {
      
    const [report ,setReport]=useState([]);


      const getreport = async ()=>{
      const res = await axios.get(`http://localhost:3000/api/sitemanager/report`)
      // console.log(res);
      if(res.data.msg=="success"){
        // console.log(res.data.report)
        const d = res.data.report.filter(
  (e) => e.uid?._id == localStorage.getItem('userId')
);


const filter= d.filter((e)=>e.status=="Aproved")
setReport(filter);
// console.log(filter);
       
      }
    }

    useEffect(()=>{
getreport()
    },[])
   
  return (
  <>
 <div className="row">
  <div className="col-lg-12">
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
      
      <th scope="col">Payment</th>
      

    </tr>
  </thead>
  <tbody>
  {
    report.map((e,i)=>(
        <tr key={i}>
      <th scope="row" >{i+1}</th>
      <td><img src={`http://localhost:3000/upload/${e.img}`} height={50} alt="" /></td>
      <td>{e.projectId.location}</td>
      <td>{e.projectId.plotsize}</td>
      <td>{e.budget}</td>
      <td>{e.timeline}</td>
      <td>{e.projectId.material}</td>
      <td> {
  e.status
  }</td>
 

<td>{e.material}</td>
   
    </tr>
    ))
  }
  </tbody>
</table>

  </div>
 </div>
  </>
  )
}

export default Myproject
