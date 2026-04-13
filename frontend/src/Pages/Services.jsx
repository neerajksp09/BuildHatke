import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Link } from 'react-router-dom'

import lg1 from "../assets/lg1.svg"
import lg2 from "../assets/lg2.svg"
import lg3 from "../assets/lg3.svg"
import lg4 from "../assets/lg4.svg"
import ServiceCard from '../Component/ServiceCard'


function Services() {
  return (
    <>
      <Navbar button={<div class="dropdown ">
        <button class="btn px-3 py-2  " type="submit" style={{ borderRadius: "0px" }}>
          Login <i class="fa-solid fa-arrow-right"></i>
        </button>
        <ul class="dropdown-menu  rounded-0 bg-dark boder-none" style={{ right: "0" }}>

          <li><Link to="Login" className='btn btn-dark p-2 rounded-0 dropdown-item' >Login</Link></li>
          <li><Link to="conreg" class="btn btn-dark p-2 rounded-0  dropdown-item" >Become a Contractor</Link></li>

          <li><Link to={"sitemanagerlogin"} class="btn btn-dark p-2 rounded-0  dropdown-item" >Site Manager</Link></li>
        </ul>
      </div>} />
      <div className="row">
        <div className="col-sm-12 p-0">
          <div className="conbanner d-flex align-items-center ">
            <h3 className='ms-5' ><Link to={'/'} >Home</Link> <i class="fa-solid fa-angles-right"></i> <Link to={"/services"}>Services</Link> </h3>
          </div>
        </div>
      </div>



    
         {/* service section */}
            <div className="row">
                <div className="col-md-10 mx-auto my-5 text-center our-service">
                    <h3 className='heading'><span>BuildHakte</span> Services</h3>
                    <div className="line d-flex justify-content-center my-3">
                        <div className="line1"></div>
                        <div className="line2"></div>
                    </div>
                    <p  > <strong>BuildHatke</strong> : Build Your 'Dream Home' India's No.1 tech powered construction company. One-stop Tech-Based Construction and Design Services</p>

                    <div className="row ">
                        <div className="col-12 my-5 d-flex justify-content-evenly flex-wrap gap-5">

                            <ServiceCard icon={<i class="fa-solid fa-house-flood-water"></i>} heading="Residential Construction" para1="You Dream, We Deliver! " para2=" Let us, build your ‘Dream Home’" />
                            <ServiceCard icon={<i class="fa-solid fa-city"></i>} heading="Commercial Construction" para1="Hassle-Free Execution by" para2=" Our Expert Team" />
                            <ServiceCard icon={<i class="fa-brands fa-intercom"></i>} heading="Interiors & Smart Home" para1="Get Beautiful, Smart &  " para2="  Customized Homes." />
                            <ServiceCard icon={<i class="fa-solid fa-compass-drafting"></i>} heading="Architecture & Structure" para1="Get Tailored Fit Designs " para2=" By our In-house Architects" />


                        </div>
                    </div>

                </div>
            </div>

            {/* number section */}
            <div className="row our-num-row ">
                <div className="col-md-10 mx-auto our-number my-3">
                    <div className="row">
                        <div className="col-md-3 text-center p-2">
                            <img src={lg1} alt="" />
                            <h3 className='mt-3'>10,142+ <br />Homes</h3>
                            <p>Built and handed over</p>
                        </div>
                        <div className="col-md-3 text-center p-2">
                            <img src={lg2} alt="" />
                            <h3 className='mt-3'>10+<br />Cities</h3>
                            <p>Operational presence</p>
                        </div>
                        <div className="col-md-3 p-2 text-center">
                            <img src={lg3} alt="" />
                            <h3 className='mt-3'>8 <br />Months</h3>
                            <p>Express execution</p>
                        </div>
                        <div className="col-md-3 p-2 text-center">
                            <img src={lg4} alt="" />
                            <h3 className='mt-3'>114,247 <br />Design Plans</h3>
                            <p>Ready-to-build options</p>
                        </div>
                    </div>
                </div>
            </div>
      <Footer />
    </>
  )
}

export default Services
