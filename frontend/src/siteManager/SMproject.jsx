import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function SMproject() {
    const [userdata, setUserdata] = useState([]);
    const [sitemanager,setSitemanager] =useState('')
    const [budget,setBudget] =useState('')
    const [timeline,setTimeline] =useState('')

    const getuserdata = async () => {
        const res = await axios.get('http://localhost:3000/api/user/project')
        if (res.data.msg == "success") {
            setUserdata(res.data.project);
            console.log(res.data.project);
        }
    }
    
    const sitemanagerdata = async ()=>{
        const res = await axios.get(`http://localhost:3000/api/sitemanager/reg/${localStorage.getItem('siteManagerId')}`)
        if(res.data.msg=="success"){
           setSitemanager(res.data.user)
           console.log("manager",res.data.user)
        }
    }

    async function applycode(e) {
           e.preventDefault()
       
           const report ={
            budget,timeline,smuid: sitemanager._id
           }
        
           const res = await axios.post('http://localhost:3000/api/sitemanager/report',report)
           if(res.data.msg=="success"){
            toast.success('Apply Success')
            console.log("Report",report)
           }
           else{
            toast.error('Something Went Wrong')
           }

        
    }






    useEffect(() => {
        getuserdata();
        sitemanagerdata()
    }, [])

    return (
        <>


            <div className="row">
                <div className="col-md-11 mx-auto my-4 ">

                    <h2 className='my-4 text-center'>Project:</h2>

                    <div className="table-reponsive">
                        <table class="table table-striped table-bordered ">
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
                                                <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content ">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                           <table class="table table-striped table-bordered ">
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
                                                <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    View Project
                                                </button>
                                            </td>
                                            <td><button className='btn btn-outline-danger'>Reject</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>


                             

                            <form action="" onSubmit={applycode}>
                                <label htmlFor="" className='label-control'>Budget</label>
                                <input type="text" className='form-control'  value={budget} onChange={(e)=>{setBudget(e.target.value)}}/>
                                <label htmlFor="" className='label-control'>TimeLine</label>
                                <input type="text" className='form-control' value={timeline} onChange={(e)=>{setTimeline(e.target.value)}} />
                                 <button type="submit" class="btn btn-secondary" data-bs-dismiss="modal">Apply</button>

                            </form>








                        </div>
                        <div class="modal-footer">
                           
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SMproject
