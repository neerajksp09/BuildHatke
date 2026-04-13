import React, { useState } from 'react'
import Navbar from '../Component/Navbar'
import './SiteManager.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify'
function SMlogin() {

    const [islogin, setIslogin] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [qualification, setQualification] = useState('');
    const [skill, setSkill] = useState('');
    const [experience, setExperience] = useState('');
    const [role, setRole] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [pin, setPin] = useState('');
   
    const navigate =useNavigate()

    async function RegisterData(e) {
        e.preventDefault()
        // console.log("form work")
        const user = { name, number, password, confirmPassword, qualification, skill, experience, role, address, city, pin, email }
        const res = await axios.post('http://localhost:3000/api/sitemanager/reg', user)
        console.log(res);

        if (res.data.msg == "success") {
           toast.success("Registation Success")
            // console.log(res.data.user)
        }
        else{
            toast.error("Something went Wrong")
        }

    }
async function logcode(e) {
        e.preventDefault()
        
        // console.log("form work")
        const user = { password, email }
        const res = await axios.post('http://localhost:3000/api/sitemanager/reg/login', user)
        console.log(res);

        if (res.data.msg == "success") {
            console.log(res.data.user)
            toast.success('login success')
            if(res.data.user){
                localStorage.setItem("siteManagerId",res.data.user._id)
            }
            navigate("/sitemanager/dash")
        }
        if(res.data.msg=="user not found"){
            toast.error("User not Found")
        }


    }















    let form;
    if (islogin) {
        form = (
            <div className="row">
                <div className="col-sm-9 mx-auto px-2 ">
                    <h2 className='my-5 text-center'>Login</h2>
                    <h3>Welcome Back to BuildHatke !</h3>
                    <p >Sign in your account</p>

                    <form action="" className='' onSubmit={logcode}>
                        <label htmlFor="" className='label-control'>Email:</label>
                        <input type="email" className='form-control' placeholder='Enter  Your Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <label htmlFor="" className='label-control'>Password:</label>
                        <input type="password" className='form-control' placeholder='Enter  Your Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                        <div className="row ">
                            <div className="col-sm-6 mt-2">

                                <input type="checkbox" name="" id="" />
                                <label htmlFor="" className='px-2'> Remember Me</label>
                            </div>
                            <div className="col-sm-6 text-end mt-2">
                                <Link>Forget Password ?</Link>
                            </div>
                        </div>

                        <button className='btn w-100 mt-4' type='submit'>Login</button>

                        <p className='text-center my-5'>Don't have any account <Link onClick={() => setIslogin(false)} >Register</Link></p>


                    </form>


                </div>

            </div>
        )
    }














    if (islogin === false) {

        form = (
            <div className="row">
                <div className="col-sm-10 mx-auto px-2 register ">
                    <h2 className='my-5 text-center'>Register</h2>
                    <h3>Welcome Back to BuildHatke !</h3>
                    <p >Signup your account</p>

                    <form action="" className='' onSubmit={RegisterData}>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="" className='label-control'>Name:</label>
                                <input type="text" className='form-control' placeholder='Enter  Your Name' value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="" className='label-control'>Phone:</label>
                                <input type="number" className='form-control' placeholder='Enter  Your Mobile Number' value={number} onChange={(e) => setNumber(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="" className='label-control'>Email:</label>
                                <input type="email" className='form-control' placeholder='Enter  Your Emaill' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="" className='label-control'>Qualification:</label>
                                <input type="text" className='form-control' placeholder='Enter  Your Qualification' value={qualification} onChange={(e) => setQualification(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="" className='label-control'>Skill:</label>
                                <input type="text" className='form-control' placeholder='Enter  Your Skill' value={skill} onChange={(e) => setSkill(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="" className='label-control'>Exprerince:</label>
                                <input type="text" className='form-control' placeholder='Enter  Your Experience' value={experience} onChange={(e) => setExperience(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="" className='label-control'>Role:</label>
                                <select name="" id="" className='form-control' value={role} onChange={(e) => setRole(e.target.value)}>
                                    <option value="">--Select Role--</option>
                                    <option value="Site Manager">Site Manager</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="" className='label-control'>Address:</label>
                                <textarea name="" id="" className='form-control' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Enter  Your Address' >

                                </textarea>

                            </div>
                            <div className="col-md-6">
                                <label htmlFor="" className='label-control'>City:</label>
                                <input type="text" className='form-control' placeholder='Enter  Your City' value={city} onChange={(e) => setCity(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="" className='label-control'>Pin:</label>
                                <input type="number" className='form-control' placeholder='Enter  Your Pin Code' value={pin} onChange={(e) => setPin(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="" className='label-control'>Password:</label>
                                <input type="password" className='form-control' placeholder='Enter  Your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="" className='label-control'>Confirm Password:</label>
                                <input type="password" className='form-control' placeholder='Enter  Your Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>

                        </div>

                       

                        <button className='btn w-100 mt-4' type='submit'>Register</button>

                        <p className='text-center my-5'>Do you have existing account? <Link onClick={() => setIslogin(true)} >Login</Link></p>


                    </form>



                </div>

            </div>
        )

    }

    return (
        <>
            <div className="row">
                <div className="col-md-6 home-slider p-0">


                    <div id="carouselExampleCaptions" class="carousel slide " data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item ">
                                <img src="/src/assets/home1.jpg" class="d-block w-100  img-fluid" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="/src/assets/home2.jpg" class="d-block w-100  img-fluid" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                            <div class="carousel-item active">
                                <img src="/src/assets/home3.jpg" class="d-block w-100 img-fluid" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>




                </div>
                <div className="col-md-6 SMlogin-form">
                    {form}



                </div>
            </div>
        </>
    )
}

export default SMlogin
