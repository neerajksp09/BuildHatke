

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './Component/Home'
import Navbar from './Component/Navbar'

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
import Profile from './contractor/Profile'
import Bids from './user/Bids'
import SMconstructors from './siteManager/SMconstructors'
import Assignproject from './contractor/Assignproject'
import City from './Pages/City'
import Proccess from './Pages/Proccess'
import Services from './Pages/Services'
import Testimonial from './Pages/Testimonial'
import Emonitoring from './Pages/Emonitoring'

function App() {


  return (
    <>
      <div className="container-fluid">
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/city" element={<City />} />
            <Route path="/process" element={<Proccess />} />
            <Route path="/services" element={<Services />} />
             <Route path="/testimonials" element={<Testimonial />} />
              <Route path="/e-monitoring" element={<Emonitoring />} />

            <Route path="/conreg" element={<ConReg />} />
            <Route path="/login" element={<Login />} >
            

            </Route>
            <Route path="/ulayout" element={<Userlayout />} >
              <Route path="" element={<UserDash />} />
              <Route path='cproject' element={<CreateProject />} />
              <Route path='myproject' element={<Myproject />} />
              <Route path='bids' element={<Bids/>} />
            </Route>



            <Route path="/conlayout" element={<Conlayout />} >
              <Route path="" element={<ConDash />} />
                  <Route path='assignproject' element={<Assignproject/>} />
              <Route path='profile' element={<Profile/>}/>
            </Route>
            <Route path="/sitemanagerlogin/" element={<SiteManagerLayout />} >
              <Route path='' element={<SMlogin />} />

            </Route>
            <Route path="/sitemanager/" element={<SMlayout />} >
              <Route path='dash' element={<SiteManagerDash />} />
              <Route path='project' element={<SMproject />} />
              <Route path='constructors' element={<SMconstructors />} />

            </Route>
           
       
         
          </Routes>

        </BrowserRouter>



      </div>
    </>
  )
}

export default App

