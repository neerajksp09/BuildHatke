import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function SMlayout() {
  return (
    <>
     <div className="row">
        <div className="col-xl-3 p-0">
          <div className="side-nav ">
            <div className='d-flex '>
              <img src="src/assets/logo.jpeg" alt="" className='img-fluid  m-4' />
              <h2 className=' mt-5 text-white '>BuildHatke</h2>
            </div>
            <div className="line"></div>
             <ul>
              <li>
                <Link to={'dash'}><i class="fa-solid fa-house"></i> Dashboard</Link>
              </li>
              <li>
                <Link to={"project"}><i class="fa-solid fa-briefcase"></i> Projects</Link>
              </li>
              <li>
                <a href=""><i class="fa-solid fa-helmet-safety"></i> Constructors</a>
              </li>
              <li>
                <a href=""><i class="fa-brands fa-bitbucket"></i> Materials</a>
              </li>
              <li>
                <a href=""><i class="fa-solid fa-calendar-check"></i> Tasks</a>
                </li>
              <li>
                <a href=""><i class="fa-solid fa-hand-holding-dollar"></i> Expenses</a>
              </li>
              <li>
                <a href=""><i class="fa-solid fa-chart-area"></i> Reports</a>
              </li>
             </ul>



          </div>
        </div>
        <div className="col-xl-9">
                <div className="row nav-row-2 py-2">
                  <div className="col-12">
                      <div className="row">
                        <div className="col-6">
                          <h3 className="mt-2" > Current Site: </h3>
                        </div>
                        <div className="col-6 d-flex gap-2 justify-content-end ">
                              <div className="icon fs-3 mt-2">
                                <i class="fa-solid fa-bell"></i>
                              </div>
                              <div className="hl"></div>
                              <div className="pic">
                                <img src="src/assets/cos2.png" alt="" className='img-fluid' />
                              </div>
                              <h5 className="mt-3 me-3" >Ashutosh</h5>
                        </div>
                      </div>
                  </div>
                </div>
                
                 <Outlet />
        </div>
      </div>
    </>
  )
}

export default SMlayout
