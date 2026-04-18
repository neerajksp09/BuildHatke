import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function SMproject() {
    const [userdata, setUserdata] = useState([]);
    const [proid, setProid] = useState("");
    const [yourreport, setYourreport] = useState([])
    const [sitemanager, setSitemanager] = useState('')
    const [budget, setBudget] = useState('')
    const [timeline, setTimeline] = useState('')
    const [length, setLength] = useState('')
    const [selecteddata, setSelecteddata] = useState([])
    const [qrimage,setQrimage]=useState('')
    const [takepayment,setTakepayment]=useState('')
    const [paylength,setpaylength]=useState('')

    const getuserdata = async () => {
        const res = await axios.get('http://localhost:3000/api/user/project')
        if (res.data.msg == "success") {
            setUserdata(res.data.project);
            // console.log(res.data.project);
            // const d= res.data.project.filter((e)=>e.uid._id==localStorage.getItem())
        }
    }
    var totalproject = userdata.length


    const sitemanagerdata = async () => {
        const res = await axios.get(`http://localhost:3000/api/sitemanager/reg/${localStorage.getItem('siteManagerId')}`)
        if (res.data.msg == "success") {
            setSitemanager(res.data.user)
            // console.log("manager", res.data.user)
        }
    }



    async function applycode(e) {
        e.preventDefault()
        // your report is send
        const report = {
            budget,
            timeline,
            smuid: sitemanager._id,
            uid: selecteddata.uid._id,
            projectId: selecteddata._id

        }



        const res = await axios.post('http://localhost:3000/api/sitemanager/report', report)
        if (res.data.msg == "success") {
            toast.success('Apply Success')
            console.log("send report", res.data.report)
            getyourreport();
        }
        else {
            toast.error('Something Went Wrong')
        }
    }


    //    your report is get
    const getyourreport = async () => {
        const res = await axios.get(`http://localhost:3000/api/sitemanager/report`);
        if (res.data.msg == "success") {
            setYourreport(res.data.report)
            setLength(res.data.report.length);
            getuserdata();


        }

    }


    const myReport = yourreport.filter((item) => {
        console.log("Hello");
        return (item.smuid._id == localStorage.getItem('siteManagerId') && item.projectId._id == proid)
    })
    //aproved report length
    const filterapprovedreport = myReport.filter((i) => i.status === "Aproved");

    console.log("filter report", filterapprovedreport)






    async function handleRow(id) {
        const filterdata = userdata.find((item) => item._id == id)
        setSelecteddata(filterdata)
        console.log(filterdata);
        setProid(filterdata._id);
        // console.log("My my filter report", filterdata)

    }

    // Get final report from  homeOwner
    const acceptproject = async (u) => {
        const status = { status: "Aproved" }

        if (u.status === "Aproved") {
            toast.error("you have already Aproved")
        }
        if (u.status == "in-progress") {
            const res = await axios.put(`http://localhost:3000/api/sitemanager/report/${u._id}`, status)
            if (res.data.msg == "success") {
                toast.success("Approved Success")


            }
            else {
                toast.error("something went wrong")
            }

        }
        else {
            toast.error("You can not approved")
        }


    }


 


    async function paymentcode(e,u) {
        e.preventDefault()
        // const data ={nowpayment,qrimage}

        
        const formdata = new FormData();
        formdata.append('takepayment',takepayment)
        formdata.append('qrimage',qrimage)
        formdata.append('reportdetails',u)
     
       
      

        const res = await axios.post('http://localhost:3000/api/payment',formdata)
        if( res.data.msg=="success"){
            toast.success("Budget Send SuccessFully")
            setpaylength(res.data.payment.length)
        }
        console.log(u)
    }


  console.log('paylength',paylength)


    useEffect(() => {
        getuserdata();
        sitemanagerdata()
        getyourreport()
    }, [])

    return (
        <>


            <div className="row">
                <div className="col-md-11 mx-auto my-4 ">

                    <div className="row project-card-row">
                        <div className="col-md-4 p-3">
                            <div className="card p-3  h-100 d-flex flex-column">
                                <h4> Total Projects</h4>
                                <h1 className='text-danger'>{totalproject}</h1>

                            </div>
                        </div>
                        <div className="col-md-4 p-3">
                            <div className="card p-3  h-100 d-flex flex-column">
                                <h4> Under Request Projects</h4>
                                <h1 className='text-warning'>{yourreport.filter((e)=>e.projectId.status=="in-progress").length}</h1>

                            </div>
                        </div>
                        <div className="col-md-4 p-3">
                            <div className="card p-3 h-100 d-flex flex-column">
                                <h4 > Aprroved Project</h4>
                                <h1 className='text-success'>{filterapprovedreport.length}</h1>

                            </div>
                        </div>
                    </div>

                    <div className="table-reponsive mt-4">
                        <table className="table table-bordered ">
                            <thead className='table-dark'>
                                <tr className='text-center'>
                                    <th>S no.</th>
                                    <th>Name</th>
                                    <th>Contact</th>
                                    <th>Location</th>
                                    <th>Budgets</th>
                                    <th colSpan={2}>Action</th>

                                </tr>
                            </thead>
                            <tbody >
                                {
                                    userdata.map((e, i) => (
                                        <tr className='text-center' key={i}>
                                            <td>{i + 1}</td>
                                            <td>{e.uid.name}</td>
                                            <td>{e.uid.number}</td>
                                            <td>{e.location}</td>
                                            <td>{e.budget}</td>
                                            <td>
                                                <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleRow(e._id)}>
                                                    View Project
                                                </button>
                                            </td>

                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>





                </div>
            </div>


            {/* modal */}
            <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                                    <li>Image : <img src={`http://localhost:3000/upload/${selecteddata?.img}`} height={50} alt="Nahi hai" /></li>
                                                   

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

                                            <button type="submit" className="btn btn-danger w-100 mt-4" data-bs-dismiss="modal" disabled={myReport?.length > 0} >Apply</button>



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
                                                    <th>S.no</th>
                                                    <th>User Name</th>
                                                    <th>Plot Location</th>
                                                    <th>Your Budget</th>
                                                    <th>Your Timeline</th>
                                                    <th>Project Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    myReport.map((u, j) => (
                                                        <tr key={j}>
                                                            <td>{j + 1}</td>
                                                            <td>{u.uid?.name}</td>
                                                            <td>{u.projectId?.location}</td>
                                                            <td>{u.budget}</td>
                                                            <td>{u.timeline}</td>
                                                            <td>{u?.status}</td>
                                                            <td><button className='btn btn-danger' onClick={() => acceptproject(u)}>Accept Project</button></td>
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

                            {/* take payment */}
                            <div className="row">
                                <div className="col-md-12 p-4">
                                    <h3 className='text-center py-2'>Take Payment</h3>
                                    <div className="card table-responsive p-3">
                                       <form action="">
                                         <table class="table">
                                            <thead className='text-center'>
                                                <tr>
                                                    <th scope="col">S.no</th>
                                                    <th scope="col">User Name</th>
                                                    <th scope="col">Ploat location</th>
                                                    <th scope="col">Total Payment</th>
                                                    <th scope="col">Payment to be taken</th>
                                                    <th scope="col">Upload Qr</th>
                                                    <th scope="col">Payment to be Left</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                         
                                             <tbody className='text-center'>
                                               {
                                                    myReport.map((u, j) => (
                                                        <tr key={j}>
                                                            <td>{j + 1}</td>
                                                            <td>{u.uid?.name}</td>
                                                            <td>{u.projectId?.location}</td>
                                                            <td>{u.budget}</td>
                                                            <td><input type="text" className='form-control' value={takepayment} onChange={(e)=>setTakepayment(e.target.value)}/></td>
                                                            <td><input type="file" onChange={(e)=>setQrimage(e.target.files[0])} className='form-control' /></td>
                                                            <td>Payment Left</td>
                                                            <td><button className='btn btn-success' type='submit' onClick={(e)=>paymentcode(e,u._id)} disabled={paylength>1}>Take Payment </button></td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                      
                                        </table>
                                       </form>
                                        
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
