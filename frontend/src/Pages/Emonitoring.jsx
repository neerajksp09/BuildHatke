import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Link } from 'react-router-dom'

import monitor from '../assets/monitor.png'


function Emonitoring() {
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
            <h3 className='ms-5' ><Link to={'/'} >Home</Link> <i class="fa-solid fa-angles-right"></i> <Link to={"/e-monitoring"}>E-Monitoring</Link> </h3>
          </div>
        </div>
      </div>

    {/* Monitring */}

    
     <div className="row monitor-row">
                     <div className="col-md-10 mx-auto my-5 text-center">
                           <h3 className='heading'><span>E</span>-Monitoring</h3>
                            <div className="line d-flex justify-content-center my-3">
                             <div className="line1"></div>
                             <div className="line2"></div>
                         </div>
                           <button className='my-3 btn py-2 px-3 '>Book Our E Monitoring Service</button>
                           <div className="feature position-relative">
                             <p className='fs-5 fw-semi-bold' style={{position:"absolute", top:"31%", left:"15%"}}>Timeline Tracking</p>
                              <p className='fs-5 fw-semi-bold' style={{position:"absolute", top:"7%", left:"15%"}}>Workforce Report</p>
                              <p className='fs-5 fw-semi-bold' style={{position:"absolute", top:"59%", left:"10%"}}>Transparent Environment</p>
                              <p className='fs-5 fw-semi-bold' style={{position:"absolute", top:"86%", left:"10%"}}>Complete Material Report</p>
     
     
                               <p className='fs-5 fw-semi-bold' style={{position:"absolute", top:"31%", right:"15%"}}>Timeline Tracking</p>
                              <p className='fs-5 fw-semi-bold' style={{position:"absolute", top:"7%", right:"15%"}}>Workforce Report</p>
                              <p className='fs-5 fw-semi-bold' style={{position:"absolute", top:"59%", right:"10%"}}>Transparent Environment</p>
                              <p className='fs-5 fw-semi-bold' style={{position:"absolute", top:"86%", right:"10%"}}>Complete Material Report</p>
     
     
     
     
                             <img src={monitor} alt="" className='img-fluid' style={{height:"500px"}}/>
                             
                             
                           </div>
                     </div>
                 </div>

      <Footer />
    </>
  )
}

export default Emonitoring
