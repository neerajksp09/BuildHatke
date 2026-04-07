import React from 'react'

export default function Conlayout() {
  return (
   <>
    <div className="container-fluid">
    <div className="row">
        <div className="col-lg-4">
            <Link to="dash">Dashboard</Link>
            <Link to="dash">My project</Link>
            <Link to="dash">Bids</Link>
            <Link to="dash">Dashboard</Link>
        </div>

        <div className="col-lg-8">
                <Outlet/>

        </div>
    </div>
   </div>
   </>
  )
}
