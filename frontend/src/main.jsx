import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

function Auth() {

  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [role, setRole] = useState('');

  // LOGIN FUNCTION
  const logcode = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/reg/login', { email, pass });

      if (res.data.msg === "success") {
        toast.success("Login success");
      } else if (res.data.msg === "user not found") {
        toast.error("User not found");
      } else {
        toast.error("Wrong password");
      }
    } catch (err) {
      toast.error("Server error");
    }
  };

  // REGISTER FUNCTION
  const regcode = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/reg/register', {
        name, email, pass, role
      });

      if (res.data.msg === "success") {
        toast.success("Registration success");
        setIsLogin(true); // back to login
      } else {
        toast.error("Something went wrong");
      }
    } catch (err) {
      toast.error("Server error");
    }
  };

  return (
    <>
      <h4 className='text-center'>
        {isLogin ? "Login" : "Register"}
      </h4>

      <form 
        onSubmit={isLogin ? logcode : regcode} 
        className='mx-auto w-25 my-5'
      >

        {/* REGISTER ONLY FIELD */}
        {!isLogin && (
          <>
            <label>Name</label>
            <input 
              type="text" 
              className='form-control'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
          </>
        )}

        <label>Email</label>
        <input 
          type="email" 
          className='form-control'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label>Password</label>
        <input 
          type="password" 
          className='form-control'
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <br />

        {/* REGISTER ONLY FIELD */}
        {!isLogin && (
          <>
            <label>Role</label>
            <select 
              className='form-control'
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select Role</option>
              <option value="User">User</option>
              <option value="Contractor">Contractor</option>
            </select>
            <br />
          </>
        )}

        <button className='btn btn-success w-50 d-flex mx-auto justify-content-center'>
          {isLogin ? "Login" : "Register"}
        </button>

        <br />

        {/* TOGGLE LINK */}
        <p className='text-center'>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span 
            style={{ color: "blue", cursor: "pointer", marginLeft: "5px" }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Register" : "Login"}
          </span>
        </p>

      </form>
    </>
  )
}

export default Auth;