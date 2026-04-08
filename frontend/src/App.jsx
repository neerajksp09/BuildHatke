

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
import SiteManagerLayout from './siteManager/SiteManagerLayout'
import SMlogin from './siteManager/SMlogin'
import SiteManagerDash from './siteManager/SiteManagerDash'
import SMlayout from './siteManager/SMlayout'
import SMproject from './siteManager/SMproject'

function App() {


  return (
    <>
      <div className="container-fluid">
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conreg" element={<ConReg />} />
            <Route path="/login" element={<Login />} >
              <Route path="reg" element={<Reg />} />

            </Route>
            <Route path="/ulayout" element={<Userlayout />} >
              <Route path="dash" element={<UserDash />} />
              <Route path='cproject' element={<CreateProject />} />
              <Route path='myproject' element={<Myproject />} />

            </Route>



            <Route path="/conlayout" element={<Conlayout />} >
              <Route path='condash' element={<ConDash />} />
              {/* <Route path='bids' element={<Bids/>}/> */}
            </Route>
            <Route path="/sitemanagerlogin/" element={<SiteManagerLayout />} >
              <Route path='' element={<SMlogin />} />
              
            </Route>
            <Route path="/sitemanager/" element={<SMlayout />} >
               <Route path='dash' element={<SiteManagerDash/>}/>
               <Route path='project' element={<SMproject/>}/>
              
            </Route>
           
         </Route>
         <Route path="/ulayout" element={<Userlayout/>} >
   <Route path="" element={<UserDash />} />   
   <Route path='cproject'  element={<CreateProject/>} />
   <Route path='myproject'  element={<Myproject/>} />

</Route>
          </Routes>
        </BrowserRouter>



      </div>
    </>
  )
}

export default App

