import React from 'react'
import l1 from '../assets/logo3.png'
import t1 from "../assets/t1.png"
import { Link } from 'react-router-dom'

function Navbar(p) {
  return (
    <>




      <div className="row nav-row">
        <div className="col-md-12 mx-auto ">
          <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
              <img src={l1} alt="" className='l1' />
              <img src={t1} alt="" className='t1' />
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto  mb-2 mb-lg-0 ">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">City</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Our Proccess</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Why Us</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Testimonials</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">E-Monitoring</a>
                  </li>

                </ul>
                <div class="d-flex">

                  {/* <button class="btn ></button> */}
                 {
                  p.button
                 }
                </div>



              </div>
            </div>
          </nav>
        </div>
      </div>







    </>
  )
}

export default Navbar
