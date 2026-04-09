import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Conlayout() {
  return (
   <>
    <div className="container-fluid">
       <div className="row">
           <div className="col-lg-2 p-3 user-dash">
               <h5 className='fw-bold text-white text-center'>BuildHatke</h5>
               <Link to="" className='btn-dash btn '><i class="fa-solid fa-house"></i> Dashboard</Link>
               <br /><br />
                 
               <Link to="cproject" className='btn btn-dash'><i class="fa-solid fa-circle-plus"></i> My project</Link>
               <br /><br />
               <Link to="myproject" className='btn btn-dash'><i class="fa-solid fa-list-check"></i> Bids</Link>
   
                <br /><br />
               <Link to="profile" className='btn btn-dash'><i class="fa-solid fa-arrow-right-arrow-left"></i>Profile</Link>
              
           </div>
   
           <div className="col-lg-10 overflow bg-color-user-dash">
   <div className="row mx-1 sticky-top">
       <div className="col-lg-12 d-flex justify-content-end rounded-2 " style={{background:"rgb(84, 35, 0)"}}>
           <i class="fa-solid fa-bell broder-end pt-3 pe-4 text-white" ></i>
           <div>
               <img src="/src/assets/cos1.png" height={50} className='rounded-circle my-1' alt="" />
           </div>
       </div>
   </div>
   
                   <Outlet/>
   
           </div>
       </div>
      </div>
   </>
  )
}
