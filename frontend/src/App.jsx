

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Reg from './Pages/Reg'
import Login from './Pages/Login'
import UserDash from './user/UserDash'
import ConDash from './contractor/ConDash'
import ConReg from './contractor/ConReg'
import Userlayout from './user/Userlayout'
import Conlayout from './contractor/Conlayout'
import CreateProject from './user/CreateProject'
import { ToastContainer } from 'react-toastify'
import Myproject from './user/Myproject'

function App() {
 

  return (
    <>
     <div className="container-fluid">
          <ToastContainer/>
         <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home/>}/>
        <Route path="/conreg" element={<ConReg/>} />
       <Route path="/login" element={<Login />} >
            <Route path="reg" element={<Reg/>} />
           
         </Route>
         <Route path="/ulayout" element={<Userlayout/>} >
   <Route path="" element={<UserDash />} />   
   <Route path='cproject'  element={<CreateProject/>} />
   <Route path='myproject'  element={<Myproject/>} />

         </Route>

         

         <Route path="/conlayout" element={<Conlayout/>} > 
          <Route path='condash' element={<ConDash/>}/>
          {/* <Route path='bids' element={<Bids/>}/> */}
         </Route>

         </Routes>
         </BrowserRouter>
       
     

     </div>
    </>
  )
}

export default App

