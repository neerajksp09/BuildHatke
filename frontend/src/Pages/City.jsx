import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Link } from 'react-router-dom'
import lg1 from "../assets/lg1.svg"
import lg2 from "../assets/lg2.svg"
import lg3 from "../assets/lg3.svg"
import lg4 from "../assets/lg4.svg"
import lc1 from "../assets/lc1.svg"
import lc2 from "../assets/lc2.svg"
import lc3 from "../assets/lc3.svg"
import lc4 from "../assets/lc4.svg"
import lc5 from "../assets/lc5.svg"
import lc6 from "../assets/lc6.svg"
import lc7 from "../assets/lc7.svg"
import lc8 from "../assets/lc8.svg"
import lc9 from "../assets/lc9.svg"
import lp1 from "../assets/lp1.svg"
import lp2 from "../assets/lp2.svg"
import lp3 from "../assets/lp3.svg"
import lp4 from "../assets/lp4.svg"
import lp5 from "../assets/lp5.svg"


function City() {
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
            <h3 className='ms-5' ><Link to={'/'} >Home</Link> <i class="fa-solid fa-angles-right"></i> <Link to={"/city"}>City</Link> </h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 mx-auto my-5 ">
          <h3 className='heading text-center' > <span>BuildHatke</span> available in 10+ cities</h3>
          <div className="line d-flex justify-content-center my-3">
            <div className="line1"></div>
            <div className="line2"></div>
          </div>

          <div className="row ournum-row mt-5">
            <div className="col-md-6 col-lg-4 p-2">
              <div className="card bg-muted p-3 py-4">
                <div>
                  <img src={lc1} alt="" />
                  <span className='ms-4 '>Banglore</span>

                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 p-2">
              <div className="card bg-muted p-3 py-4">
                <div>
                  <img src={lc2} alt="" />
                  <span className='ms-4 '>Delhi</span>

                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 p-2 ">
              <div className="card bg-muted p-3 py-4">
                <div>
                  <img src={lc3} alt="" />
                  <span className='ms-4 '>Chennai</span>

                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 p-2">
              <div className="card bg-muted p-3 py-4">
                <div>
                  <img src={lc4} alt="" />
                  <span className='ms-4 '>Hyderabad</span>

                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 p-2">
              <div className="card bg-muted p-3 py-4">
                <div>
                  <img src={lc5} alt="" />
                  <span className='ms-4 '>Pune</span>

                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 p-2">
              <div className="card bg-muted p-3 py-4">
                <div>
                  <img src={lc6} alt="" />
                  <span className='ms-4 '>Mysuru</span>

                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 p-2">
              <div className="card bg-muted p-3 py-4">
                <div>
                  <img src={lc7} alt="" />
                  <span className='ms-4 '>Noida</span>

                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 p-2">
              <div className="card bg-muted p-3 py-4">
                <div>
                  <img src={lc8} alt="" />
                  <span className='ms-4 '>Faridabad</span>

                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 p-2">
              <div className="card bg-muted p-3 py-4">
                <div>
                  <img src={lc9} alt="" />
                  <span className='ms-4 '>Gurugram</span>

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

export default City
