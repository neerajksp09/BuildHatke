import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Link } from 'react-router-dom'
import cos1 from "../assets/cos1.png"
import cos2 from "../assets/cos2.png"
import cos3 from "../assets/cos3.png"
import TestimonialCard from '../Component/TestimonialCard'


function Testimonial() {
  return (
    <>
      <Navbar button={<div class="dropdown ">
        <button class="btn px-3 py-2  " type="submit" style={{ borderRadius: "0px" }}>
          Login <i class="fa-solid fa-arrow-right"></i>
        </button>
        <ul class="dropdown-menu  rounded-0 bg-dark boder-none" style={{ right: "0" }}>

          <li><Link to="/Login" className='btn btn-dark p-2 rounded-0 dropdown-item' >Login</Link></li>
          <li><Link to="/conreg" class="btn btn-dark p-2 rounded-0  dropdown-item" >Become a Contractor</Link></li>

          <li><Link to={"/sitemanagerlogin"} class="btn btn-dark p-2 rounded-0  dropdown-item" >Site Manager</Link></li>
        </ul>
      </div>} />
      <div className="row">
        <div className="col-sm-12 p-0">
          <div className="conbanner d-flex align-items-center ">
            <h3 className='ms-5' ><Link to={'/'} >Home</Link> <i class="fa-solid fa-angles-right"></i> <Link to={"/testimonials"}>Testimonial</Link> </h3>
          </div>
        </div>
      </div>
   
   {/* testimonial */}


      <div className="row row testimonial-row-top">
                <div className="col-md-10 mx-auto my-5">
                    <h2 className='heading' ><span>Homeowner</span> Stories</h2>
                     <div className="line d-flex justify-content-start my-3">
                        <div className="line1"></div>
                        <div className="line2"></div>
                    </div>
                    <p>Hear from our happy homeowners</p>
                     <div className="row testimonial-row">
                        <div className="col-md-4 p-2">
                          <TestimonialCard img={cos1} name="Subodh" location="Delhi-NCR" review="Building our home with Brick & Bolt was smooth and stress-free. Their tech-driven approach and real-time updates gave us full transparency and control throughout the entire construction journey from start." />
                        </div>
                        <div className="col-md-4 p-2">
                             <TestimonialCard img={cos2} name="Ashutosh" location="Delhi-NCR" review="After disappointment with local builders, I rebuilt my home with Brick & Bolt. Their professionalism, transparent payments, and prompt issue resolution ensured a smooth, stress-free construction experience throughout the project." />
                        </div>
                        <div className="col-md-4 p-2">
                             <TestimonialCard img={cos3} name="Ajay" location="Delhi-NCR" review="For a single mother, homebuilding can feel daunting but Brick & Bolt made it feel effortless. Their trust and transparency turned my dream into a place I now call home." />
                        </div>
                     </div>
                </div>
            </div>


      <Footer />
    </>
  )
}

export default Testimonial
