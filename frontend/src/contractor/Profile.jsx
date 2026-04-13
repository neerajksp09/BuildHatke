import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {toast} from 'react-toastify';

function Profile() {
const [con, setCon] = useState({});
   const[manager,setManager]=useState([]);
const [editId,setEditId]=useState(null);
   const [img,setImg]=useState('');
    const [name,setName]=useState('');
       const [number,setNumber]=useState('');
       const [address,setAddress]=useState('');
       const [licenseNumber,setLicenseNumber]=useState('');
       const [exp,setExp]=useState('');
       const [certification,setCertification]=useState('');
        const [email, setEmail] = useState('');


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

const updatecode = async(e)=>{
   e.preventDefault();
   const formData = new FormData();
  formData.append("name", name);
  formData.append("number", number);
  formData.append("email", email);
  formData.append("certification", certification);
  formData.append("licenseNumber", licenseNumber);
  formData.append("exp", exp);
  formData.append("address", address);
  formData.append("img", img);

  if(editId){

 const res = await  axios.put(`http://localhost:3000/api/con/reg/${editId}`,formData)
 if(res.data.msg =="success"){
   toast.success("User Updated Successfully");
            setEditId(null);
 }
 else {
            toast.error("Something went wrong");
        }
  }
 
}
// console.log(filterdata);


    useEffect(()=>{
getcondata();
getmanager();
    },[])
  return (
   <>
     <div className="container  d-flex justify-content-center">
      <div className="card shadow w-75">
  <div className="card shadow-lg border-0">
    
    {/* Header */}
    <div className="user-dash text-white text-white p-4 d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center gap-3 ">
        <img
          src={`http://localhost:3000/upload/${con.img}`}
          alt=""
          height={80}
          width={80}
          className="rounded-circle border border-3"
        />
        <div>
          <h4 className="mb-0">{con.name}</h4>
          <small className='text-warning'>{con.role}</small>
        </div>
      </div>

      <button
        className="btn btn-light"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => {
          setEditId(con._id);
          setNumber(con.number);
          setName(con.name);
          setAddress(con.address);
          setLicenseNumber(con.licenseNumber);
          setCertification(con.certification);
          setExp(con.exp);
          setEmail(con.email);
        }}
      >
        Edit Profile
      </button>
    </div>

    {/* Body */}
    <div className="card-body">
      <div className="row g-4">

        {/* Contact Info */}
        <div className="col-md-6">
          <div className="p-3 border rounded h-100">
            <h6 className="text-muted mb-3">Contact Info</h6>
            <p><strong>Email:</strong> {con.email}</p>
            <p><strong>Phone:</strong> {con.number}</p>
            <p><strong>Address:</strong> {con.address}</p>
          </div>
        </div>

        {/* Professional Info */}
        <div className="col-md-6">
          <div className="p-3 border rounded h-100">
            <h6 className="text-muted mb-3">Professional Info</h6>
            <p><strong>Experience:</strong> {con.exp} years</p>
            <p><strong>License:</strong> {con.licenseNumber}</p>
            <p><strong>Certification:</strong> {con.certification}</p>
          </div>
        </div>

        {/* Site Manager */}
        <div className="col-12">
          <div className="p-3 border rounded d-flex justify-content-between align-items-center">
            <div>
              <h6 className="text-muted mb-1">Site Manager</h6>
              <strong>{con.siteman}</strong>
            </div>

            <button
              className="btn btn-outline-success"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
            >
              View Profile
            </button>
          </div>
        </div>

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



{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body px-4 py-3">

  <form onSubmit={updatecode}>

    {/* Profile Image Preview */}
    <div className="text-center mb-4">
      <img
        src={img ? URL.createObjectURL(img) : `http://localhost:3000/upload/${con.img}`}
        alt=""
        className="rounded-circle border"
        height={90}
        width={90}
      />
      <div className="mt-2">
        <input
          type="file"
          className="form-control"
          onChange={(e) => setImg(e.target.files[0])}
        />
      </div>
    </div>

    <div className="row g-3">

      {/* Full Name */}
      <div className="col-md-6">
        <label className="form-label">Full Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Phone */}
      <div className="col-md-6">
        <label className="form-label">Phone Number</label>
        <input
          type="number"
          className="form-control"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>

      {/* Email */}
      <div className="col-md-6">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Address */}
      <div className="col-md-6">
        <label className="form-label">Address</label>
        <input
          type="text"
          className="form-control"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      {/* License */}
      <div className="col-md-6">
        <label className="form-label">License Number</label>
        <input
          type="text"
          className="form-control"
          value={licenseNumber}
          onChange={(e) => setLicenseNumber(e.target.value)}
        />
      </div>

      {/* Experience */}
      <div className="col-md-6">
        <label className="form-label">Experience (Years)</label>
        <input
          type="number"
          className="form-control"
          value={exp}
          onChange={(e) => setExp(e.target.value)}
        />
      </div>

      {/* Certification */}
      <div className="col-12">
        <label className="form-label">Certification</label>
        <input
          type="text"
          className="form-control"
          value={certification}
          onChange={(e) => setCertification(e.target.value)}
        />
      </div>

    </div>

    {/* Buttons */}
    <div className="d-flex justify-content-end gap-2 mt-4">
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-dismiss="modal"
      >
        Cancel
      </button>

      <button
        type="submit"
        className="btn btn-primary px-4"
      >
        Update
      </button>
    </div>

  </form>

</div>
      
    </div>
  </div>
</div>
   </>
  )
  
}

export default Profile
