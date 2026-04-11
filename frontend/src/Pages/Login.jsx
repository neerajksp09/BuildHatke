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

        if (res.data.role == "user") {
          navigate('/ulayout');
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
      <form onSubmit={logcode} className='mx-auto w-100 my-5 '>

        <div className="row">
          <div className="col-lg-12">
                <label className='label-control'>Your Email</label>
        <input type="email" className='form-control form-input' required
          value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="col-lg-12">
    <label>Password</label>
        <input type="password" className='form-control form-input' required
          value={pass} onChange={(e) => setPass(e.target.value)} />
          </div>
        </div>
        

       <div className="row mt-3">
        <div className="col-lg-12">
           <button className=' p-2 text-white btn-login w-100 mx-auto d-flex justify-content-center'>
          Login
        </button>
        </div>
       </div>

    
        <p className='text-center mt-5'>
          Don't have an account?
          <span
            style={{ color: "blue", cursor: "pointer", marginLeft: "5px" }}
            onClick={() => setIsLogin(false)}
          >
            Register
          </span>
        </p>

      </form>
    )
  }
  else {
    form = (
      <form onSubmit={regcode} className='mx-auto w-100  my-5'>

<div className="row">
  <div className="col-lg-6">
 <label  className='label-control ps-2 '>Name</label>
        <input type="text" className='form-control form-input' required
          value={name} onChange={(e) => setName(e.target.value)} />
  </div>
  <div className="col-lg-6">
    <label className='label-control ps-2 '>Number</label>
        <input type="number" className='form-control form-input' required
          value={number} onChange={(e) => setNumber(e.target.value)} />
  </div>
</div>
       
<div className="row">
  <div className="col-lg-6">
    
        <label className='label-control ps-2 pt-2'>City</label>
        <input type="text" className='form-control form-input' required
          value={city} onChange={(e) => setCity(e.target.value)} />
  </div>
  <div className="col-lg-6">

        <label className='label-control ps-2 pt-2'>Email</label>
        <input type="email" className='form-control form-input' required
          value={email} onChange={(e) => setEmail(e.target.value)} />
  </div>
</div>
       

        
<div className="row">
  <div className="col-lg-6">
    
        <label className='label-control ps-2  pt-2'>Password</label>
        <input type="password" className='form-control form-input' required
          value={pass} onChange={(e) => setPass(e.target.value)} />
    
  </div>
  <div className="col-lg-6">
     <label className='label-control ps-2 pt-4'>Confrim Password</label>
        <input type='password' className='form-control form-input' required
          value={cpass} onChange={(e) => setcpass(e.target.value)} />
  </div>
</div>

       
      

     <div className="row mt-3">
      <div className="col-lg-12">
           <button className=' p-2 text-white btn-login w-100 mx-auto d-flex justify-content-center'>
          Register
        </button>
      </div>
     </div>

    
        <p className='text-center mt-3'>
          Already have an account?
          <span
            style={{ color: "blue", cursor: "pointer", marginLeft: "5px" }}
            onClick={() => setIsLogin(true)}
          >
            Login
          </span>
        </p>

      </form>
    )
  }

  return (
    <>
    


<Navbar
/>


<div className="row">
  <div className="col-lg-6 p-0">
<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item h-50 active">
      <img src="/src/assets/site1.avif" h-100 class="d-block w-100 " alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className='slide-text'>First slide label</h5>
        <p className='slide-text'>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/src/assets/site2.avif" h-100 class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/src/assets/site3.avif" h-100 class="d-block w-100" alt="..."/>
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

  <div className="col-lg-6  bg-img">
      <h4 className='ms-5 ps-4 mt-5 text'>
        {isLogin ? "Login" : "Register"}
      </h4>
    <p className="  ms-5 ps-4 fw-bolder fs-4 text">Welcome Back to BuildHatke !</p>
    <span className='ms-5 ps-4'>{isLogin ? "Sign in your account":"Sign up your account"}</span>

  {form}

  </div>
</div>



      
    </>
  )
}

export default Login