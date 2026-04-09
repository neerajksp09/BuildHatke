import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Profile() {
const [con, setCon] = useState({});
   const[manager,setManager]=useState([]);

    const getcondata = async()=>{
        const res = await axios.get(`http://localhost:3000/api/con/reg/${localStorage.getItem('conId')}`)
        // console.log(res);
        if(res.data.msg=="success"){
            setCon(res.data.con);
        }
    }

      const getmanager= async()=>{
    const res = await axios.get("http://localhost:3000/api/sitemanager/reg")
    if(res.data.msg=="success"){
      setManager(res.data.user);
    }
  }
 const filterdata = manager.find(
  (m) => m.name === con?.siteman
);
// console.log(filterdata);

    useEffect(()=>{
getcondata();
getmanager();
    },[])
  return (
   <>
     <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow w-75">
        
        
        <div className="card-header user-dash text-white">
          <h4 className="mb-0">Contractor Profile</h4>
          <small className="text-warning">{con.role}</small>
        </div>

   
        <div className="card-body">
          <div className="row g-3">

            <div className="col-md-6">
              <label className="form-label text-muted">Name</label>
              <div className="fw-bold">{con.name}</div>
            </div>

            <div className="col-md-6">
              <label className="form-label text-muted">Email</label>
              <div className="fw-bold">{con.email}</div>
            </div>

            <div className="col-md-6">
              <label className="form-label text-muted">Phone Number</label>
              <div className="fw-bold">{con.number}</div>
            </div>

            <div className="col-md-6">
              <label className="form-label text-muted">Experience</label>
              <div className="fw-bold">{con.exp} years</div>
            </div>

            <div className="col-md-6">
              <label className="form-label text-muted">License Number</label>
              <div className="fw-bold">{con.licenseNumber}</div>
            </div>

            <div className="col-md-6">
              <label className="form-label text-muted">Certification</label>
              <div className="fw-bold">{con.certification}</div>
            </div>

            <div className="col-md-6 ">
              <label className="form-label text-muted">Site Manager</label>
              <div className="fw-bold d-flex gap-3">
                {con.siteman}
          <button class="btn btn-outline-success" type="button" 
          data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
           aria-controls="offcanvasRight">View Profile</button>


                 
              </div>
              <div className=""></div>
            </div>

            <div className="col-12">
              <label className="form-label text-muted">Address</label>
              <div className="fw-bold">{con.address}</div>
            </div>

          </div>
        </div>

      </div>
    </div>


{/* offcanvas */}
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
 {filterdata ? (
    <div className="card shadow-sm">
      <div className="card-body">

        <h5 className="mb-3 text-primary">Site Manager Profile</h5>

        <p><strong>Name:</strong> {filterdata.name}</p>
        <p><strong>Email:</strong> {filterdata.email}</p>
        <p><strong>Phone:</strong> {filterdata.number}</p>
        <p><strong>Experience:</strong> {filterdata.experience} years</p>

        <p><strong>Role:</strong> {filterdata.role}</p>
        <p><strong>Address:</strong> {filterdata.address}</p>

      </div>
    </div>
  ) : (
    <p className="text-danger">No Site Manager Found</p>
  )}
  </div>
</div>
   </>
  )
  
}

export default Profile
