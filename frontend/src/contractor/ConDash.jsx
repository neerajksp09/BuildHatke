import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import axios from 'axios';

function ConDash() {

    const [projectData ,setProjectData]=useState([]);

    const getprojectData= async ()=>{
      const res = await axios.get('http://localhost:3000/api/user/project')
      // console.log(res);
    if(res.data.msg=="success"){
      setProjectData(res.data.project)
    }
    }

    const updateStatus = async (id, status) => {
  const res = await axios.put(`http://localhost:3000/api/user/project/status/${id}`,{ status });

  if (res.data.msg === "updated") {
    getprojectData(); 
  }
};



useEffect(()=>{
  getprojectData()
  updateStatus();
},[])
  return (
   <>
<div className="row" >
    <div className="col-md-12 ">
         <div className="p-3" >

            {/* Cards */}

             {/* Row-1 */}
            <div className="row g-3 mb-3">
              <div className="col-lg-3 col-md-6">
                <div className="card stat green">
                  <h2>5</h2>
                  <p>Active Project</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="card stat orange">
                  <h2>20</h2>
                  <p>Constractors on Site</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="card stat red">
                  <h2> <i className="fa-solid fa-triangle-exclamation" style={{color:" rgb(0, 0, 0);"}}></i> 3 </h2>
                  <p>  Low Stock Materials</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="card stat blue">
                  <h2>2</h2>
                  <p>Pending Tasks</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="card stat blue">
                  <h2>$ 10000000</h2>
                  <p>Today Expense</p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="row g-3">

              {/* Tasks */}
              <div className="col-lg-6">
                <div className="card p-3">
                  <h6>Today's Tasks</h6>

                  <ul className="list">
                    <li>✔ Inspect Foundation Work <span>Rajesh</span></li>
                    <li>✔ Cement Delivery Arriving <span>11:00am</span></li>
                    <li>⬜ Electrical Wiring Inspection <span>3:00pm</span></li>
                    <li>⬜ Install Kitchen Cabinets <span>Tomorrow</span></li>
                  </ul>
                </div>
              </div>

              {/* Inventory */}
              <div className="col-lg-6">
                <div className="card p-3">
                  <h6>Material Inventory</h6>

                  <ul className="list">
                    <li>Steel Rods <span className="text-danger">Low</span></li>
                    <li>Cement Bags <span className="text-warning">Reorder</span></li>
                    <li>Wooden Planks <span className="text-success">In Stock</span></li>
                    <li>Electrical Wiring <span className="text-success">In Stock</span></li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Row 3 */}
            <div className="row g-3 mt-1">

              {/* Attendance */}
              <div className="col-lg-6">
                <div className="card p-3">
                  <h6>Worker Attendance</h6>

                  <ul className="list">
                    <li>Rajesh - Present</li>
                    <li>Amit - Present</li>
                    <li>Suresh - <span className="text-danger">Absent</span></li>
                  </ul>
                </div>
              </div>

              {/* Photos */}
              <div className="col-lg-6">
                <div className="card p-3">
                  <h6>Site Photos</h6>

                  <div className="row g-2">
                    <div className="col-6">
                      <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e" className="img-fluid rounded"/>
                    </div>
                    <div className="col-6">
                      <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511" className="img-fluid rounded"/>
                    </div>
                  </div>

                  <button className="btn btn-light w-100 mt-2">+ Add Photo</button>
                </div>
              </div>

            </div>

          
          </div>
    </div>
   </div>

   </>
  )
}

export default ConDash
