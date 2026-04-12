import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Assignproject() {
  const [assignproject, setAssignProject] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [step , setstep]=useState(1);

  const assignprojecttotal = async () => {
    const res = await axios.get(`http://localhost:3000/api/sitemanager/report/assign`);
    if (res.data.msg == "success") {
      // (res.assignproject.report);
      setAssignProject( res.data.report.filter((e) =>e.constractorId?._id ===localStorage.getItem("conId")));
    }
  }
  // console.log("fdgxfchvjbknl",assignproject.find((e)=>e.budget));

  useEffect(() => {
    assignprojecttotal();
  }, [])

  const next =()=>{
    setstep(step+1);
  }
   const pre =()=>{
    setstep(step-1);
  }
  return (
    <>
<div className="container mt-4">
    <div className="row">
    <div className="col-lg-12">
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Experience</th>
      <th scope="col">City</th>
      <th scope="col">Number</th>
      <th scope="col">Role</th>
      <th scope="col">Budget</th>
      <th scope="col">Timeline</th>
      <th scope="col">View Project</th>
    </tr>
  </thead>
  <tbody>
  {
    assignproject.map((e,i)=>(
        <tr>
      <th scope="row" key={i}>{i+1}</th>
      <td>{e.smuid.name}</td>
      <td>{e.smuid.email}</td>
      <td>{e.smuid.experience}</td>
      <td>{e.smuid.city}</td>
      <td>{e.smuid.number}</td>
      <td>{e.smuid.role}</td>
      <td>{e.budget}</td>
      <td>{e.timeline}</td>
      <td>
       <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>setSelectedProject(e)}>
 View Project
</button>
      </td>
    </tr>
    ))
  }
   
  </tbody>
</table>
    </div>
    </div>
    </div>



    {/* <!-- Modal --> */}
<div className="modal fade modal-xl" id="exampleModal" tabIndex="-1">
  <div className="modal-dialog ">
    <div className="modal-content ">

      <div className="modal-header  ">
        <h5 className="modal-title ">Project Details</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div className="modal-body bg-color-user-dash">
        <div className="row">
          <div className="col-lg-4">

            { selectedProject && (
              <div className="card shadow-lg mb-3 ">
                
                <div className="card-header user-card text-white text-center nav-row-2">
                  <h4 >Project & Manager Details</h4>
                </div>

                <div className="card-body">
                  
                  <span className='con-form'>Project Details</span>
                  <p className='mt-3'><strong>Budget:</strong> {selectedProject.budget}</p>
                  <p><strong>Timeline:</strong> {selectedProject.timeline}</p>

                  <hr />

                  <span className='con-form' >Site Manager Details</span>
                  <p className='mt-3'><strong>Name:</strong> {selectedProject.smuid.name}</p>
                  <p><strong>Phone:</strong> {selectedProject.smuid?.number}</p>
                  <p><strong>Email:</strong> {selectedProject.smuid?.email}</p>

                  <p><strong>City:</strong> {selectedProject.smuid?.city}</p>
                  <p><strong>Role:</strong> {selectedProject.smuid?.role}</p>

                </div>
              </div>
            )}

          </div>

          <div className="col-lg-8">
            {selectedProject && (
  <div className="card shadow-lg">

    <div className="card-header nav-row-2 text-center" >
      <h4>Project Full Details</h4>
    </div>

    <div className="card-body">

      {/* User Info */}
      {
        step==1 &&(
<>
<div className="row">
  <div className="col-lg-6 ">
     <span className='con-form'>User Details</span>
      <p className='mt-3 '><strong>Name:</strong> {selectedProject.uid.name}</p>
      <p><strong>Email:</strong> {selectedProject.uid.email}</p>
      <p><strong>Phone:</strong> {selectedProject.uid.number}</p>
  </div>
  <div className="col-lg-6">
     {/* Project Info */}
      <span className='con-form'>Project Details</span>
      <p className='mt-3'><strong>Location:</strong> {selectedProject.projectId?.location}</p>
      <p><strong>Plot Size:</strong> {selectedProject.projectId?.plotsize}</p>
      <p><strong>Budget:</strong> {selectedProject.projectId?.budget}</p>
      <p><strong>Timeline:</strong> {selectedProject.projectId?.timeline}</p>
      <div className="row">
        <div className="col-lg-12 d-flex justify-content-end">
       
          <button className='btn-login px-3 py-2' onClick={next}>Next</button>
        </div>
       </div>
  </div>
</div>
</>
        )
      }
     

{
  step==2 && (
<>
<div className="row">
  <div className="col-lg-6">
     <span className='con-form'>Material Details</span>
      <p className='mt-3'><strong>Material:</strong> {selectedProject.projectId?.material}</p>
      <p><strong>Cement Type:</strong> {selectedProject.projectId?.cementType}</p>
      <p><strong>Steel Quality:</strong> {selectedProject.projectId?.steelQuality}</p>
       <div className="row">
        <div className="col-lg-12 d-flex justify-content-start mt-5 d-none d-sm-block">
          <button className='btn-login px-3 py-2 mt-2 ' onClick={pre}>Previous</button>
        </div>
       </div>
      </div>
      <div className="col-lg-6">
         <span className='con-form'>Features</span>
      <p className='mt-3'><strong>Type of Home:</strong> {selectedProject.projectId?.tofhome}</p>
      <p><strong>Parking:</strong> {selectedProject.projectId?.parking}</p>
      <p><strong>Balcony:</strong> {selectedProject.projectId?.balcony}</p>
      <p><strong>Terrace:</strong> {selectedProject.projectId?.terrace}</p>
      <p><strong>Garden:</strong> {selectedProject.projectId?.garden || "No"}</p>
        <div className="row">
        <div className="col-lg-12 d-flex  justify-content-between justify-content-lg-end">
           <button className='btn-login px-3 py-2 mt-2 d-sm-none ' onClick={pre}>Previous</button>
          <button className='btn-login px-3 py-2' onClick={next}>Next</button>
        </div>
       </div>
      </div>
     
 
</div>
</>

  )
}
     
     {
      step==3 &&(
        <>
      
      <div className="row">
        <div className="col-lg-6">
  <span className='con-form'>Design & Style</span>
      <p className='mt-3'><strong>Design Style:</strong> {selectedProject.projectId?.designStyle}</p>
      <p><strong>Color Preference:</strong> {selectedProject.projectId?.colorP}</p>
      <p><strong>Interior Style:</strong> {selectedProject.projectId?.interiorstyle}</p>
      <p><strong>Smart Features:</strong> {selectedProject.projectId?.smartFeatures}</p>
        <div className="row">
        <div className="col-lg-12 d-flex justify-content-start d-none d-sm-block">
          <button className='btn-login px-3 py-2 mt-2' onClick={pre}>Previous</button>
        </div>
       </div>
        </div>
     
    

     

      {/* Extra */}
    
        <div className="col-lg-6 ">
 <span className='con-form'>Additional Info</span>
      <p className='mt-3'><strong>Extra Room:</strong> {selectedProject.projectId?.addroom}</p>
      <p><strong>Special Requirement:</strong> {selectedProject.projectId?.specialreq}</p>
      <p><strong>Status:</strong> {selectedProject.projectId?.status}</p>
     <div className="row">
        <div className="col-lg-12 d-flex justify-content-end d-sm-none ">
          <button className='btn-login px-3 py-2 mt-2' onClick={pre}>Previous</button>
        </div>
       </div>
        </div>
      </div>
     
        </>
      )
     }

    </div>
  </div>
)}
          </div>
        </div>
      </div>

      <div className="modal-footer ">
        <button className="btn-login px-3 py-2" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
    </>
  )
}

export default Assignproject
