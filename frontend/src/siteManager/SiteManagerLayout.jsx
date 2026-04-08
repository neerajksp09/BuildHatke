import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Component/Navbar'

function SiteManagerLayout() {
  return (
    <>
    <div className="row">
        <div className="col-12">
             <Navbar />
        </div>
    </div>
   
       <Outlet />

    </>
  )
}

export default SiteManagerLayout
