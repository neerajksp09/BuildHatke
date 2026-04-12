import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function Conlayout() {
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.removeItem("userId")
        navigate('/login')
    }
  return (
   <>
  <div className="row">
            <div className="col-xxl-3 p-0  d-none d-xxl-block ">
              <div className="side-nav ">
                <div className='d-flex '>
                  <img src="/src/assets/logo.jpeg" alt="" className='img-fluid  m-4' />
                  <h2 className=' mt-5 text-white '>BuildHatke</h2>
                </div>
                <div className="line"></div>
                <ul>
                              <li>
                            <Link to="" ><i class="fa-solid fa-house"></i> Dashboard</Link>
                              </li>
                      
                              <li>
                             <Link to="cproject"><i class="fa-solid fa-circle-plus"></i> Create Project</Link>
                              </li>
                              <li>
                                  <Link to="myproject"><i class="fa-solid fa-list-check"></i> My project</Link>
                              </li>
                              <li>
                                     <Link to="bids"><i class="fa-solid fa-arrow-right-arrow-left"></i> Bids</Link>
                              </li>
                              <li>
                              <button className='' onClick={logout}><i class="fa-solid fa-logout"></i>Logout</button>
                              </li>
                            </ul>
    
    
    
    
              </div>
            </div>
            <div className="col-xxl-9  "  style={{overflowY:"scroll",height:"100vh"}}>
              <div className="row  py-2" style={{position:"sticky",top:"0px",left:"0px",zIndex:"999",}}>
                <div className="col-12 px-4">
                  <div className='nav-row-2 px-3 py-3 rounded-4'style={{boxShadow:"2px 2px 10px rgb(48, 34, 25)"}} >
                    <div className="row">
                    <div className="col-4 ">
                      <button class="btn btn-primary fs-4 d-block d-xxl-none btn-toggle "  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="fa-solid fa-bars"></i></button>
    
                      <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                       
                        <div class="offcanvas-body p-0" > 
                          
                          <div className="side-nav ">
                            <div className='d-flex  '>
                              <img src="/src/assets/logo.jpeg" alt="" className='img-fluid  m-3' />
                              <h2 className='  text-white mt-4'>BuildHatke</h2>
                              <button type="button" class="btn-close mt-4 p-2 fs-4   ms-auto me-4" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="line"></div>
                            <ul>
                              <li>
                            <Link to="" ><i class="fa-solid fa-house"></i> Dashboard</Link>
                              </li>
                      
                              <li>
                              <Link to="cproject" ><i class="fa-solid fa-circle-plus"></i> My project</Link>
                              </li>
                              <li>
                                  <Link to="myproject" ><i class="fa-solid fa-list-check"></i> Bids</Link>
                              </li>
                              <li>
                                     <Link to="profile" ><i class="fa-solid fa-arrow-right-arrow-left"></i>Profile</Link>
                              </li>
                              <li>
                              <button className='' onClick={logout}><i class="fa-solid fa-logout"></i>Logout</button>
                              </li>
                            </ul>
    
    
    
                          </div>
                        </div>
                      </div>
                      <h3 className="mt-2 d-none d-xxl-block " > Current Site: </h3>
    
                    </div>
                    <div className="col-8  d-flex gap-2 justify-content-end ">
                      <div className="icon fs-3 mt-2">
                        <i class="fa-solid fa-bell"></i>
                      </div>
                      <div className="hl"></div>
                      <div className="pic">
                        <img src="/src/assets/cos2.png" alt="" className='img-fluid' />
                      </div>
                      <h5 className="mt-3 me-3" >Ashutosh</h5>
                    </div>
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
