import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Userlayout() {
  return (
   <>
   <div className="container-fluid">
    <div className="row">
        <div className="col-lg-4">
            <Link to="dash">Dashboard</Link>
            <br /><br />
              
            <Link to="cproject">Create Project</Link>
            <br /><br />
            <Link to="myproject">My project</Link>

             <br /><br />
            <Link to="dash">Bids</Link>
           
        </div>

        <div className="col-lg-8">
                <Outlet/>

        </div>
    </div>
   </div>
   </>
  )
}

export default Userlayout
