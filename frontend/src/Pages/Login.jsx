import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../Component/Navbar';

function Login() {

  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');
  const [cpass, setcpass] = useState('');

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const navigate = useNavigate();

  // LOGIN
  const logcode = async (e) => {
    e.preventDefault();
const user= { email, pass }
      const res = await axios.post('http://localhost:3000/api/reg/login',user);

      if (res.data.msg === "success") {
        toast.success("Login success");

        if (res.data.user) {
          localStorage.setItem("userId", res.data.user._id);
        }
        if (res.data.admin) {
          localStorage.setItem("adminId", res.data.admin._id);
        }

        if (res.data.role == "user") {
          navigate('/ulayout');
        } 
        else{
          navigate('/adlayout');
        } 

      } else if (res.data.msg === "user not found") {
        toast.error("User not found");
      } else {
        toast.error("Wrong password");
      }

   
  }


   const regcode=  async(e)=>{
          e.preventDefault()
          const user ={name,email,pass,city,number,cpass,};
          if(cpass!==pass){
            toast.error("Confirm password Does not Match")
          }else{
          const res= await axios.post('http://localhost:3000/api/reg',user)
          if(res.data.msg=="success"){
              toast.success("Registration successfull...")
              setIsLogin(true); 
          }
          else{
              toast.error("Something went wrong...")
          }
      }
 }
  let form;

  if (isLogin) {
    form = (
      <div className="row mt-5">
                <div className="col-sm-9 mx-auto px-2 ">
                    <h2 className='my-5 text-center'>Login</h2>
                    <h3>Welcome Back to BuildHatke !</h3>
                    <p >Sign in your account</p>

                    <form action="" className='' onSubmit={logcode}>
                        <label htmlFor="" className='label-control'>Email:</label>
                        <input type="email" className='form-control' placeholder='Enter  Your Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <label htmlFor="" className='label-control'>Password:</label>
                        <input type="password" className='form-control' placeholder='Enter  Your Password' value={pass} onChange={(e)=>setPass(e.target.value)} />
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

                        <p className='text-center my-5'>Don't have any account <Link onClick={() => setIsLogin(false)} >Register</Link></p>


                    </form>


                </div>

            </div>
    )
  }
  else {
    form = (
          <div className="row">
                      <div className="col-sm-10 mx-auto px-2 register ">
                          <h2 className='my-5 text-center'>Register</h2>
                          <h3>Welcome Back to BuildHatke !</h3>
                          <p >Signup your account</p>
      
                          <form action="" className='' onSubmit={regcode}>
                              <div className="row">
                                  <div className="col-md-6">
                                      <label htmlFor="" className='label-control'>Name:</label>
                                      <input type="text" className='form-control' placeholder='Enter  Your Name' value={name} onChange={(e) => setName(e.target.value)} />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="" className='label-control'>Email:</label>
                                      <input type="email" className='form-control' placeholder='Enter  Your Eamil' value={email} onChange={(e) => setEmail(e.target.value)} />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="" className='label-control'>Number:</label>
                                      <input type="number" className='form-control' placeholder='Enter  Your Number' value={number} onChange={(e) => setNumber(e.target.value)} />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="" className='label-control'>City:</label>
                                      <input type="text" className='form-control' placeholder='Enter  Your city' value={city} onChange={(e) => setCity(e.target.value)} />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="" className='label-control'>Password:</label>
                                      <input type="password" className='form-control' placeholder='Enter  Your password' value={pass} onChange={(e) => setPass(e.target.value)} />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="" className='label-control'>Confirm password:</label>
                                      <input type="password" className='form-control' placeholder='Enter  Your Confirm password' value={cpass} onChange={(e) => setcpass(e.target.value)} />
                                  </div>
                                
                                  
      
                              </div>
      
                             
      
                              <button className='btn w-100 mt-4' type='submit'>Register</button>
      
                              <p className='text-center my-5'>Do you have existing account? <Link onClick={() => setIsLogin(true)} >Login</Link></p>
      
      
                          </form>
      
      
      
                      </div>
      
                  </div>
    )
  }

  return (
    <>
    


<Navbar
/>

<div className="row">
                <div className="col-md-6 home-slider p-0">


                    <div id="carouselExampleCaptions" class="carousel slide " data-bs-ride="false">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
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
                            <div class="carousel-item">
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

export default Login