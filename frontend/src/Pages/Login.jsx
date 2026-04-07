import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link, Outlet, useNavigate } from 'react-router-dom';

function Login() {

  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');
  const [enq, setEnq] = useState('');

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

        if (res.data.role == "Contractor") {
          navigate('/condash');
        } else {
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
  
          const user ={name,email,pass,city,number,enq,};
          const res= await axios.post('http://localhost:3000/api/reg',user)
          if(res.data.msg=="success"){
              toast.success("Enquiry successfull...")
              setIsLogin(true); 
          }
          else{
              toast.error("Something went wrong...")
          }
      }

  let form;

  if (isLogin) {
    form = (
      <form onSubmit={logcode} className='mx-auto w-25 my-5 '>

        <label>Email</label>
        <input type="email" className='form-control'
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />

        <label>Password</label>
        <input type="password" className='form-control'
          value={pass} onChange={(e) => setPass(e.target.value)} />
        <br />

        <button className='btn btn-success w-50 mx-auto d-flex justify-content-center'>
          Login
        </button>

    
        <p className='text-center mt-3'>
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
      <form onSubmit={regcode} className='w-50 mx-auto '>

        <h4>Register</h4>

        <label>Name</label>
        <input type="text" className='form-control'
          value={name} onChange={(e) => setName(e.target.value)} />
        <br />

        <label>Number</label>
        <input type="number" className='form-control'
          value={number} onChange={(e) => setNumber(e.target.value)} />
        <br />

        <label>City</label>
        <input type="text" className='form-control'
          value={city} onChange={(e) => setCity(e.target.value)} />
        <br />

        <label>Email</label>
        <input type="email" className='form-control'
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />

        <label>Password</label>
        <input type="password" className='form-control'
          value={pass} onChange={(e) => setPass(e.target.value)} />
        <br />

        <label>Enquiry</label>
        <textarea className='form-control'
          value={enq} onChange={(e) => setEnq(e.target.value)} />
        <br />

        <button className='btn btn-success w-50 mx-auto d-flex justify-content-center'>
          Register
        </button>

    
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
      <h4 className='text-center'>
        {isLogin ? "Login" : "Register"}
      </h4>

      {form}

      <Outlet />
    </>
  )
}

export default Login