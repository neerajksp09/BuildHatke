import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function SMprofile() {
    

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [qualification, setQualification] = useState('');
    const [skill, setSkill] = useState('');
    const [experience, setExperience] = useState('');
    const [img, setImg] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [pin, setPin] = useState('');
    const [smId,setSmId]=useState('')
    const [smdata, setSmdata] = useState('');

    const sitemanagerData= async ()=>{
        const res = await axios.get(`http://localhost:3000/api/sitemanager/reg/${localStorage.getItem('siteManagerId')}`)
        if(res.data.msg=="success"){
           setSmdata(res.data.user)
        }
    }





     async function RegisterData(e) {
        e.preventDefault()
        // console.log("form work")
         const formdata =new FormData();
         formdata.append("name",name)
         formdata.append("number",number)
         formdata.append("email",email)
         formdata.append("city",city)

        formdata.append("qualification",qualification)
         formdata.append("skill",skill)
         formdata.append("experience",experience)
         formdata.append("pin",pin)
         formdata.append("img",img)




        const res = await axios.put(`http://localhost:3000/api/sitemanager/reg/${smId}`, formdata)
        console.log(res);

        if (res.data.msg == "success") {
           toast.success("Update Success")
            // console.log(res.data.user)
            sitemanagerData()
        }
        else{
            toast.error("Something went Wrong")
        }

    }


   useEffect(()=>{
sitemanagerData()
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
                  src={`http://localhost:3000/upload/${smdata.img}`}
                  alt=""
                  height={80}
                  width={80}
                  className="rounded-circle border border-3"
                />
                <div>
                  <h4 className="mb-0">{smdata.name}</h4>
                  <small className='text-warning'>{smdata.role}</small>
                </div>
              </div>

              <button
                className="btn btn-light"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => {
                  setSmId(smdata._id);
                  setNumber(smdata.number);
                  setName(smdata.name);
                  setAddress(smdata.address);
                  setCity(smdata.city);
                  setQualification(smdata.qualification)
                  setSkill(smdata.skill)
                  setExperience(smdata.experience);
                  setEmail(smdata.email);
                  setPin(smdata.pin)
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
                    <p><strong>Email:</strong> {smdata.email}</p>
                    <p><strong>Phone:</strong> {smdata.number}</p>
                    <p><strong>Address:</strong> {smdata.address}</p>
                  </div>
                </div>

                {/* Professional Info */}
                <div className="col-md-6">
                  <div className="p-3 border rounded h-100">
                    <h6 className="text-muted mb-3">Professional Info</h6>
                    <p><strong>Experience:</strong> {smdata.exp} years</p>
                    <p><strong>License:</strong> {smdata.licenseNumber}</p>
                    <p><strong>Certification:</strong> {smdata.certification}</p>
                  </div>
                </div>

                {/* Site Manager */}
                <div className="col-12">
                  <div className="p-3 border rounded d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="text-muted mb-1">Site Manager</h6>
                      <strong>{smdata.siteman}</strong>
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







<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <div className="row">
        <div className="col-md-10 mx-auto">
                  <form action="" className='' onSubmit={RegisterData}>
                        <div className="row">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={img?URL.createObjectURL(img):`http://localhost:3000/upload/${smdata.img}`} alt="" style={{height:"200px",width:"200px"}} />
                                </div>
                                <div className="col-md-6">
                                    <input type="file" onChange={(e)=>setImg(e.target.files[0])} />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="" className='label-control'>Name:</label>
                                <input type="text" className='form-control' placeholder='Enter  Your Name' value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="" className='label-control'>Phone:</label>
                                <input type="number" className='form-control' placeholder='Enter  Your Mobile Number' value={number} onChange={(e) => setNumber(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="" className='label-control'>Email:</label>
                                <input type="email" className='form-control' placeholder='Enter  Your Emaill' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="" className='label-control'>Qualification:</label>
                                <input type="text" className='form-control' placeholder='Enter  Your Qualification' value={qualification} onChange={(e) => setQualification(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="" className='label-control'>Skill:</label>
                                <input type="text" className='form-control' placeholder='Enter  Your Skill' value={skill} onChange={(e) => setSkill(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="" className='label-control'>Exprerince:</label>
                                <input type="text" className='form-control' placeholder='Enter  Your Experience' value={experience} onChange={(e) => setExperience(e.target.value)} />
                            </div>
                           
                            <div className="col-md-6">
                                <label htmlFor="" className='label-control'>Address:</label>
                                <textarea name="" id="" className='form-control' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Enter  Your Address' >

                                </textarea>

                            </div>
                            <div className="col-md-6">
                                <label htmlFor="" className='label-control'>City:</label>
                                <input type="text" className='form-control' placeholder='Enter  Your City' value={city} onChange={(e) => setCity(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="" className='label-control'>Pin:</label>
                                <input type="number" className='form-control' placeholder='Enter  Your Pin Code' value={pin} onChange={(e) => setPin(e.target.value)} />
                            </div>
                            

                        </div>



                        <button className='btn w-100 mt-4' type='submit'>Update</button>

                


                    </form>
        </div>
     </div>
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

export default SMprofile
