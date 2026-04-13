import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Link } from 'react-router-dom'

import lp1 from "../assets/lp1.svg"
import lp2 from "../assets/lp2.svg"
import lp3 from "../assets/lp3.svg"
import lp4 from "../assets/lp4.svg"
import lp5 from "../assets/lp5.svg"


function Proccess() {
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
            <h3 className='ms-5' ><Link to={'/'} >Home</Link> <i class="fa-solid fa-angles-right"></i> <Link to={"/process"}>Proccess</Link> </h3>
          </div>
        </div>
      </div>

    {/* process */}

    
      <div className="row">
                      <div className="col-md-10 mx-auto my-5">
                          <h3 className=' text-center heading'> <span>How</span> It Works ?</h3>
                           <div className="line d-flex justify-content-center my-3">
                              <div className="line1"></div>
                              <div className="line2"></div>
                          </div>
                          <p className=' text-center'>Wehouse - has been using cutting-edge technology from the outset to address challenges faced by the regular house construction contractors.</p>
      
                          <div className="row ournum-row process-row mt-5">
                              <div className="col-md-6 col-lg-4 p-2">
                                  <div className="card bg-muted p-3 py-4">
                                      <div>
                                          <img src={lp1} alt="" />
                                          <h3 className='mt-4'>Connect with Us</h3>
                                          <p className='mt-4'>Share your basic details through a quick form. Our team contacts you within 20 minutes for a free technical consultation.</p>
      
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-6 col-lg-4 p-2">
                                  <div className="card bg-muted p-3 py-4">
                                      <div>
                                          <img src={lp2} alt="" />
                                          <h3 className='mt-4'>Define Your Requirements</h3>
                                          <p className='mt-4'>Discuss your plot details, budget, and timeline with our experts. We craft a clear project plan tailored to your goals.</p>
      
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-6 col-lg-4 p-2 ">
                                  <div className="card bg-muted p-3 py-4">
                                      <div>
                                          <img src={lp3} alt="" />
                                          <h3 className='mt-4'>Approve Designs</h3>
                                          <p className='mt-4'>Review floor plans, drawings, and 3D views. Work closely with our architects until every detail is finalized.</p>
      
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-6 col-lg-4 p-2">
                                  <div className="card bg-muted p-3 py-4">
                                      <div>
                                          <img src={lp4} alt="" />
                                          <h3 className='mt-4'>Live Progress</h3>
                                          <p className='mt-4'>Track construction in real time via our app with daily photos, quality reports, and payment updates.</p>
      
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-6 col-lg-4 p-2">
                                  <div className="card bg-muted p-3 py-4">
                                      <div>
                                          <img src={lp5} alt="" />
                                          <h3 className='mt-4'>Move In</h3>
                                          <p className='mt-4'>Take possession of your fully completed home. Move in with confidence, backed by a 10year warranty.</p>
      
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-6 col-lg-4 p-2">
                                  <div className="card bg-muted p-0 ">
                                      <div className='d-flex p-0 m-0'>
                                          <div className='card-left' style={{ height: "270px", width: "50%" }}>
      
                                      </div>
                                      <div className='card-right p-4' style={{ height: "270px", width: "50%" }} >
                                          <h4 className='mt-4'>Talk to our Construction Advisor</h4>
                                          <button className='btn mt-5'>Talk to an Expert</button>
                                      </div>
                                      </div>
                                  </div>
                              </div>
      
                          </div>
      
                      </div>
                  </div>

      <Footer />
    </>
  )
}

export default Proccess
