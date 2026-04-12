import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'

function SMconstructors() {
    const [allconstructor, setAllconstructor] = useState([])
    const [sitemanager, setSitemanager] = useState([])
    const [allproject, setAllproject] = useState([])
    const [selectedConstructor, setSelectedConstructor] = useState(null);

    // all constructor
    const getallconstructor = async () => {
        const res = await axios.get('http://localhost:3000/api/con/reg')
        if (res.data.msg == "success") {
            setAllconstructor(res.data.con)
            console.log("All Constructor", res.data.con)
        }

    }
    // sitemanager from localStorage
    const getsitemanager = async () => {
        const res = await axios.get(`http://localhost:3000/api/sitemanager/reg/${localStorage.getItem('siteManagerId')}`)
        if (res.data.msg == "success") {
            setSitemanager(res.data.user)
            console.log("Sitemanager", res.data.user)
        }
    }
    const myconstractor = allconstructor.filter((u) => u?.siteman == sitemanager?.name)
    console.log("myconstuctor", myconstractor)

    //get all project 
    const getallproject = async () => {
        const res = await axios.get('http://localhost:3000/api/sitemanager/report')
        if (res.data.msg = "success") {
            setAllproject(res.data.report)
        }
    }
   //Total project to be assigned
    const assiginedproject = allproject.filter((e) => e?.status == "Aproved" && e?.smuid?._id == sitemanager._id)
    console.log("assigend project",typeof assiginedproject)
    

    //assin project to constructor
async function sendassignproject(projectId,constractorId) {
     const res = await axios.put(`http://localhost:3000/api/sitemanager/report/assign/${projectId}`,{constractorId:constractorId})
     if(res.data.msg=="success"){
        toast.success("Project Assign Success")
     }
     else{
        toast.error("Something went wrong")
     }
     console.log("Asssign data",res.data.report)
} 
    //total project assigend to contractor
    


    useEffect(() => {
        getallconstructor()
        getsitemanager()
        getallproject();

    }, [])



    return (
        <>
            <div className="row">
                <div className="col-md-11 mx-auto my-4">
                    <div className="row project-card-row">
                        <div className="col-md-4 p-3">
                            <div className="card p-3  h-100 d-flex flex-column">
                                <h4>My Constructors</h4>
                                <h1 className='text-danger'>{myconstractor.length}</h1>

                            </div>
                        </div>
                        <div className="col-md-4 p-3">
                            <div className="card p-3  h-100 d-flex flex-column">
                                <h4>Assigned Works Constructors</h4>
                                <h1 className='text-warning'>20</h1>

                            </div>
                        </div>
                        <div className="col-md-4 p-3">
                            <div className="card p-3 h-100 d-flex flex-column">
                                <h4>Not Assigned Works Constructors</h4>
                                <h1 className='text-success'>10</h1>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col-md-11 mx-auto">
                    <div className="table-responsive">
                        <table className='table table-bordered'>
                            <thead className='table-dark text-center'>
                                <tr>
                                    <th>S.no</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Number</th>
                                    <th>Address</th>
                                    <th>Experience</th>
                                    <th>Work Assiged</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                {
                                    myconstractor.map((e, i) => (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{e.name}</td>
                                            <td>{e.email}</td>
                                            <td>{e.email}</td>
                                            <td>{e.address}</td>
                                            <td>{e.exp}</td>
                                            <td>no</td>
                                            <td>
                                                <button className='btn btn-outline-danger' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={()=>setSelectedConstructor(e)} >Assign Project</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* assigin project off canvas */}
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel">All Project</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div className="row">
                        <div className="col-md-12  p-3">
                            {
                                assiginedproject.map((e,i) => (
                                   
                                       
                                        <ul class="list-group"  key={1}>
                                             
                                            <li class="list-group-item d-flex justify-content-between align-items-center"> <h5 className='text-center' >Project {i+1}</h5> </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center"> Homeower Name: <strong>{e?.uid?.name}</strong> </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center"> Homeower Email: <strong>{e?.uid?.email}</strong> </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center"> Homeower Number: <strong>{e?.uid?.number}</strong> </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center"> Project Location: <strong>{e?.projectId?.location}</strong> </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center"> Homeower Plot Size: <strong>{e?.projectId?.plotsize}</strong> </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center"> Our Budget: <strong>{e?.budget}</strong> </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center"> Our timeline Email: <strong>{e?.timeline}</strong> </li>
                                            <li class="list-group-item d-flex justify-content-center align-items-center">
                                                 {e.constractorId?<button className='btn btn-success' onClick={()=>sendassignproject(e?._id,selectedConstructor?._id)} disabled > <i class="fa-solid fa-circle-check"></i> Assigend</button>:<button className='btn btn-danger' onClick={()=>sendassignproject(e?._id,selectedConstructor?._id)} >Assign</button>}
                                           </li>
                                            
                                        </ul>
                               
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default SMconstructors
