import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function SMproject() {
    const [userdata, setUserdata] = useState([]);
    const [yourreport, setYourreport] = useState([])
    const [sitemanager, setSitemanager] = useState('')
    const [budget, setBudget] = useState('')
    const [timeline, setTimeline] = useState('')
    const [length, setLength] = useState('')
    const [selecteddata, setSelecteddata] = useState([])

    const getuserdata = async () => {
        const res = await axios.get('http://localhost:3000/api/user/project')
        if (res.data.msg == "success") {
            setUserdata(res.data.project);
            console.log(res.data.project);
            // const d= res.data.project.filter((e)=>e.uid._id==localStorage.getItem())
        }
    }

    const sitemanagerdata = async () => {
        const res = await axios.get(`http://localhost:3000/api/sitemanager/reg/${localStorage.getItem('siteManagerId')}`)
        if (res.data.msg == "success") {
            setSitemanager(res.data.user)
            console.log("manager", res.data.user)
        }
    }



    async function applycode(e) {
        e.preventDefault()


        // your report is send

        const report = {
            budget,
   timeline,
   smuid:sitemanager._id,
   uid:selecteddata.uid._id,
   projectId:selecteddata._id

        }
        console.log(report)
        const res = await axios.post('http://localhost:3000/api/sitemanager/report', report)
        if (res.data.msg == "success") {
            toast.success('Apply Success')

        }
        else {
            toast.error('Something Went Wrong')
        }


    }
    //    your report is get
    const getyourreport = async () => {
        const res = await axios.get("http://localhost:3000/api/sitemanager/report");
        if (res.data.msg == "success") {
            setYourreport(res.data.report)
            setLength(res.data.report.length);
            getuserdata();
            console.log("My Project", res.data.report)

        }
    }

    const myReport = yourreport.filter((item) => {
       return item.smuid._id == localStorage.getItem('siteManagerId') &&
    item.projectId?._id == selecteddata?._id
    })



    async function handleRow(id) {
        const filterdata = userdata.find((item) => item._id == id)
        setSelecteddata(filterdata)

    }






    useEffect(() => {
        getuserdata();
        sitemanagerdata()
        getyourreport()
    }, [])

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
                                                <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleRow(e._id)}>
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

                        <div className="modal-body">
                            <div className="row g-3">

                                <div className="col-md-5">
                                    <div className="row">
                                        <div className="col-md-12 p-3">

                                            <div className="card p-3">
                                                <h4>Client Personal Details</h4>

                                                <ul className="list">
                                                    <li>Name: <strong>{selecteddata?.uid?.name}</strong></li>
                                                    <li>Email: <strong>{selecteddata?.uid?.email}</strong></li>
                                                    <li>Phone: <strong>{selecteddata?.uid?.number}</strong></li>
                                                    <li>City: <strong>{selecteddata?.uid?.city}</strong></li>

                                                </ul>
                                            </div>

                                        </div>
                                        <div className="col-md-12 p-3">

                                            <div className="card p-3">
                                                <h4>Client Rooms Requirements</h4>

                                                <ul className="list">
                                                    <li>Kitchen on each floor : <strong className="text-warning">{selecteddata?.kitchenoneach}</strong></li>
                                                    <li>Paking Area : <strong className="text-warning">{selecteddata?.parking}</strong></li>

                                                    <li>Balcony : <strong className="text-warning">{selecteddata?.balcony}</strong></li>

                                                    <li>Garden : <strong className="text-warning">{selecteddata?.garden}</strong></li>
                                                    <li>Out Door : <strong className="text-warning">{selecteddata?.outdoor}</strong></li>
                                                    <li>Basement: <strong className="text-warning">{selecteddata?.basement}</strong></li>
                                                    <li>Tarrace : <strong className="text-warning">{selecteddata?.terrace}</strong></li>

                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="row">
                                        <div className="col-md-12 p-3">
                                            <div className="card p-3">
                                                <h4>Client Requirement</h4>

                                                <ul className="list">
                                                    <li>Site Location : <strong className="text-warning">{selecteddata?.location}</strong></li>
                                                    <li>Plotsize : <strong className="text-warning">{selecteddata?.plotsize}</strong></li>
                                                    <li>Material : <strong className="text-warning">{selecteddata?.material}</strong></li>
                                                    <li>Cement Type <strong className="text-warning">{selecteddata?.cementType}</strong></li>
                                                    <li>Steel Quality : <strong className="text-warning">{selecteddata?.steelQuality}</strong></li>
                                                    <li>Home Type : <strong className="text-warning">{selecteddata?.tofhome}</strong></li>
                                                    <li>Material : <strong className="text-warning">{selecteddata?.material}</strong></li>
                                                    <li>Cement Type :<strong className="text-warning">{selecteddata?.cementType}</strong></li>



                                                    <li>Additional Room : <strong className="text-warning">{selecteddata?.addroom}</strong></li>


                                                    <li>Degin Style : <strong className="text-warning">{selecteddata?.designStyle}</strong></li>
                                                    <li>Home color : <strong className="text-warning">{selecteddata?.colorP}</strong></li>
                                                    <li>Interier Style: <strong className="text-warning">{selecteddata?.interiorstyle}</strong></li>

                                                    <li>Smart Features : <strong className="text-warning">{selecteddata?.smartFeatures}</strong></li>
                                                    <li>Special Requirment : <strong className="text-warning">{selecteddata?.specialreq}</strong></li>


                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>





                            </div>

                            <div className="row">
                                <div className="col-md-10 mx-auto">
                                    <div className="card p-3">
                                        <form action="" onSubmit={applycode}>
                                            <label htmlFor="" className='label-control'>Budget</label>
                                            <input type="text" className='form-control' value={budget} onChange={(e) => { setBudget(e.target.value) }} />
                                            <label htmlFor="" className='label-control'>TimeLine</label>
                                            <input type="text" className='form-control' value={timeline} onChange={(e) => { setTimeline(e.target.value) }} />

                                            <button type="submit" className="btn btn-danger w-100 mt-4" data-bs-dismiss="modal" >Apply</button>



                                        </form>
                                    </div>

                                </div>
                            </div>



                            <div className="row">
                                <div className="col-md-10 mx-auto my-4">
                                    <div className="table-responsive">
                                        <table className='table table-muted table-bordered '>
                                            <thead className='table-dark'>
                                                <tr>
                                                    <th>User Name</th>
                                                    <th>Plot Location</th>
                                                    <th>Your Budget</th>
                                                    <th>Your Timeline</th>
                                                    <th>Project Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    myReport.map((u, j) => (
                                                        <tr key={j}>
                                                            <td>{u.uid?.name}</td>
                                                            <td>{u.projectId?.location}</td>
                                                            <td>{u.budget}</td>
                                                            <td>{u.timeline}</td>
                                                            <td>{u.projectId?.status}</td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                            <tbody>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>












                        </div>

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
