import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function UserProfile() {
  const [userdata,setUserdata]=useState('');
   const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [img,setImg] = useState('');
    const [editId,setEditId] = useState(null);
   
  const getuserdata = async ()=>{
    const res = await axios.get(`http://localhost:3000/api/reg/${localStorage.getItem('userId')}`)
    if(res.data.msg== "success"){
      setUserdata(res.data.user)
    }
  }

  const updatecode =async (e)=>{
     e.preventDefault();

     const formadata= new FormData();
     formadata.append("name",name)
     formadata.append("number",number)
     formadata.append("email",email)
     formadata.append("city",city)
     formadata.append('img',img)


if(editId){
  const res = await  axios.put(`http://localhost:3000/api/reg/${editId}`,formadata)
 if(res.data.msg =="success"){
   toast.success("User Updated Successfully");
            setEditId(null);
 }
 else {
            toast.error("Something went wrong");
        }
  }
 
}
  

  useEffect(()=>{
getuserdata()
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
          src={`http://localhost:3000/upload/${userdata.img}`}
          alt=""
          height={80}
          width={80}
          className="rounded-circle border border-3"
        />
        <div>
          <h4 className="mb-0">{userdata.name}</h4>
          <small className='text-warning'>{userdata.role=="user"?"Homeowner":""}</small>
        </div>
      </div>

      <button
        className="btn btn-light"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => {
          setEditId(userdata._id);
          setNumber(userdata.number);
          setName(userdata.name);
          setAddress(userdata.address);
          setLicenseNumber(userdata.licenseNumber);
          setCertification(userdata.certification);
          setExp(userdata.exp);
          setEmail(userdata.email);
        }}
      >
        Edit Profile
      </button>
    </div>

    {/* Body */}
    <div className="card-body">
      <div className="row g-4 ">

        {/* Contact Info */}
        <div className="col-md-12 ">
          <div className="p-3 border rounded h-100">
            <h6 className="text-muted mb-3">Contact Info</h6>
            <p><strong>Email:</strong> {userdata.email}</p>
            <p><strong>Number:</strong> {userdata.number}</p>
            <p><strong>City:</strong> {userdata.city}</p>
          </div>
        </div>

        
       

  

      </div>
    </div>

  </div>


      </div>
    </div>



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
        src={img ? URL.createObjectURL(img) : `http://localhost:3000/upload/${userdata.img}`}
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
        <label className="form-label">City</label>
        <input
          type="text"
          className="form-control"
          value={city}
          onChange={(e) => setCity(e.target.value)}
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

export default UserProfile
