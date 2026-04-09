import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function SMproject() {
    const [userdata, setUserdata] = useState([]);
    const [yourreport ,setYourreport]=useState([])
    const [sitemanager, setSitemanager] = useState('')
    const [budget, setBudget] = useState('')
    const [timeline, setTimeline] = useState('')

    const [length,setLength]=useState('')

    const getuserdata = async () => {
        const res = await axios.get('http://localhost:3000/api/user/project')
        if (res.data.msg == "success") {
            setUserdata(res.data.project);
            console.log(res.data.project);
        }
    }

    const sitemanagerdata = async () => {
        const res = await axios.get(`http://localhost:3000/api/sitemanager/reg/${localStorage.getItem('siteManagerId')}`)
        if (res.data.msg == "success") {
            setSitemanager(res.data.user)
            console.log("manager", res.data.user)
        }
    }

    const getyourreport =async ()=>{
        const res =await axios.get("http://localhost:3000/api/sitemanager/report");
        if(res.data.msg=="success"){
            setYourreport(res.data.report)
             setLength(res.data.report.length);
            getuserdata();
            
        }
    }

    async function applycode(e) {
        e.preventDefault()

        const report = {
            budget, timeline, smuid: sitemanager._id
        }

        const res = await axios.post('http://localhost:3000/api/sitemanager/report', report)
        if (res.data.msg == "success") {
            toast.success('Apply Success')
            
            
            
        }
        else {
            toast.error('Something Went Wrong')
        }


    }






    useEffect(() => {
        getuserdata();
        sitemanagerdata()
        getyourreport()
    },[])

    return (
        <>


            <div className="row">
                <div className="col-md-11 mx-auto my-4 ">

                    <h2 className='my-4 text-center'>Project:</h2>

                    <div className="table-reponsive">
                        <table className="table table-striped table-bordered ">
                            <thead>
                                <tr className='text-center'>
                                    <th>S no.</th>
                                    <th>Name</th>
                                    <th>Contact</th>
                                    <th>Location</th>
                                    <th>Budgets</th>
                                    <th colSpan={2}>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userdata.map((e) => (
                                        <tr className='text-center'>
                                            <td>1</td>
                                            <td>{e.uid.name}</td>
                                            <td>{e.uid.number}</td>
                                            <td>{e.location}</td>
                                            <td>{e.budget}</td>
                                            <td>
                                                <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    View Project
                                                </button>
                                            </td>
                                            <td><button className='btn btn-outline-danger'>Reject</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>





                </div>
            </div>


            {/* modal */}
            <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl  ">
                    <div className="modal-content ">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Project Details</h1>
                            <button type="button" className="btn-close text-black" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        {
                            userdata.map((e)=>(
                                <div className="modal-body">
                            <div className="row g-3">

                                {/* Tasks */}
                                <div className="col-lg-6">
                                    <div className="card p-3">
                                        <h4>Client Personal Details</h4>

                                        <ul className="list">
                                            <li>Name: <span>{e.uid.name}</span></li>
                                            <li>Email: <span>{e.uid.email}</span></li>
                                            <li>Phone: <span>{e.uid.number}</span></li>
                                            <li>City: <span>{e.uid.city}</span></li>
                                           
                                        </ul>
                                    </div>
                                </div>

                                {/* Inventory */}
                                <div className="col-lg-6">
                                    <div className="card p-3">
                                        <h4>Client Requirement</h4>

                                        <ul className="list">
                                            <li>Site Location : <span className="text-warning">{e.location}</span></li>
                                            <li>Plotsize : <span className="text-warning">{e.plotsize}</span></li>
                                            <li>Material : <span className="text-warning">{e.material}</span></li>
                                            <li>Cement Type <span className="text-warning">{e.cementType}</span></li>


                                            <li>Steel Quality : <span className="text-warning">{e.steelQuality}</span></li>
                                            <li>Home Type : <span className="text-warning">{e.tofhome}</span></li>
                                            <li>Material : <span className="text-warning">{e.material}</span></li>
                                            <li>Cement Type <span className="text-warning">{e.cementType}</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card p-3">
                                        <h4>Client Requirement</h4>

                                        <ul className="list">
                                            <li>Site Location : <span className="text-warning">{e.location}</span></li>
                                            <li>Plotsize : <span className="text-warning">{e.plotsize}</span></li>
                                            <li>Material : <span className="text-warning">{e.material}</span></li>
                                            <li>Cement Type <span className="text-warning">{e.cementType}</span></li>


                                            <li>Steel Quality : <span className="text-warning">{e.steelQuality}</span></li>
                                            <li>Home Type : <span className="text-warning">{e.tofhome}</span></li>
                                            <li>Material : <span className="text-warning">{e.material}</span></li>
                                            <li>Cement Type <span className="text-warning">{e.cementType}</span></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>




                            <form action="" onSubmit={applycode}>
                                <label htmlFor="" className='label-control'>Budget</label>
                                <input type="text" className='form-control' value={budget} onChange={(e) => { setBudget(e.target.value) }} />
                                <label htmlFor="" className='label-control'>TimeLine</label>
                                <input type="text" className='form-control' value={timeline} onChange={(e) => { setTimeline(e.target.value) }} />

                                <button type="submit" className="btn btn-secondary" style={length>=1?{display:"none"}:{display:"inline-block"}}  data-bs-dismiss="modal" >Apply</button>
                               
                             

                            </form>

                             {console.log(length)}
                            <table className='table table-danger'>
                                <thead className='table-dark'>
                                    <tr>
                                        <th>User Name</th>
                                        <th>Plot Location</th>
                                        <th>Your Budget</th>
                                        <th>Your Timeline</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        yourreport.map((u,j)=>(
                                            <tr key={j}>
                                        <td>{e.uid.name}</td>
                                        <td>{e.location}</td>
                                        <td>{u.budget}</td>
                                        <td>{u.timeline}</td>
                                        <td>{u.status=="Deactive"?"Pending":"Approved"}</td>
                                    </tr>
                                        ))
                                    }
                                </tbody>
                                <tbody>

                                </tbody>
                            </table>








                        </div>
                            ))
                        }
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SMproject
