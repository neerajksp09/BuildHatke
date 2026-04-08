import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';

function CreateProject() {

const [location,setLocation]= useState('');
const [plotsize,setPlotsize]= useState('');
const [budget,setBudget]= useState('');
const [material,setMaterial]= useState('');
const [timeline,setTimeline]= useState('');
const [cementType, setCementType] = useState('');
const [steelQuality, setSteelQuality] = useState('');
const [tofhome,setTofhome]=useState('');
const[kitchenoneach,setKitchenoneach]=useState('');
const [addroom,setAddroom]=useState('');
const [parking,setParking]=useState('');
const [balcony,setBalcony]=useState('');
const [garden,setGarden]=useState('');
const [outdoor,setOutdoor]=useState('');
const [basement,setBasement]=useState('');
const [terrace,setTerrace]=useState('');
const [designStyle,setdesignStyle]=useState('');
const [colorP,setColorP]=useState('');
const[interiorstyle,setInteriorStyle]=useState('');
const[smartFeatures,setSmartFeatures]=useState('');
const[specialreq,setSpecialReq]=useState('');
const [uid,setUid]=useState('');
// Plot Size (sq ft / sq yard)
// Location (City / Address)
// Budget (₹)
// Expected Start Date
// Expected Completion Time

// Type of House
// (Villa / Duplex / Apartment / Bungalow)
// Number of Floors
// Number of Bedrooms
// Number of Bathrooms
// Kitchen on Each Floor (Yes/No)
// Additional Rooms
// (Study Room / Guest Room / Office)
// Parking Area (Yes/No + number of vehicles)
// Balcony (Yes/No + count)
// Garden (Yes/No)
// Outdoor Area (Yes/No)
// Basement (Yes/No)
// Terrace (Yes/No)
// Red Brick
// AAC Block
// Cement Type
// Steel/Iron Quality
// Eco-Friendly Materials (Yes/No)




const projectcode = async (e)=>{
e.preventDefault()
// const project = {
//   location,
//   plotsize,
//   budget,
//   timeline,

// uid,
//   material,
//   cementType,
//   steelQuality,

  
//   tofhome,
//   kitchenoneach,
//   addroom,


//   parking,
//   balcony,
//   garden,
//   outdoor,
//   basement,
//   terrace,

//   designStyle,
//   colorP,
//   interiorstyle,

 
//   smartFeatures,

 
//   specialreq
// };
   
const uid = localStorage.getItem("userId");

const project = {
  uid,   

  location,
  plotsize,
  budget,
  timeline,

  material,
  cementType,
  steelQuality,

  tofhome,
  kitchenoneach,
  addroom,

  parking,
  balcony,
  garden,
  outdoor,
  basement,
  terrace,

  designStyle,
  colorP,
  interiorstyle,

  smartFeatures,
  specialreq
};


const res = await axios.post("http://localhost:3000/api/user/project",project)
    // const res2 = await axios.get(`http://localhost:3000/api/reg/${localStorage.getItem('userId')}`);
    if(res.data.msg=="success"){
        // setUid(res2.data.user);
        toast.success("project success");
    }
    else{
        toast.error("somthing went wrong");
    }
}



// const getproject = async()=>{
// const res = await axios.get(`http://localhost:3000/api/user/project`)
// console.log(res.data.project[2].uid);

// }

// useEffect(()=>{
// getproject();
// },[])
  return (
  <>
  {/* <h4>Create Project</h4> */}
<form className='w-100' onSubmit={projectcode}>
  <h5>Basic Project Info</h5>

  <div className="row">
    <div className="col-md-6">
      <label>Plot Size (sq ft / sq yard)</label>
      <input type="text" className='form-control'
        value={plotsize} onChange={(e)=>setPlotsize(e.target.value)} />
    </div>

    <div className="col-md-6">
      <label>Location (City / Address)</label>
      <input type="text" className='form-control'
        value={location} onChange={(e)=>setLocation(e.target.value)} />
    </div>

    <div className="col-md-4 mt-2">
      <label>Budget</label>
      <input type="text" className='form-control'
        value={budget} onChange={(e)=>setBudget(e.target.value)} />
    </div>

    <div className="col-md-4 mt-2">
      <label>Timeline</label>
      <input type="text" className='form-control'
        value={timeline} onChange={(e)=>setTimeline(e.target.value)} />
    </div>
    <div className="col-md-4 mt-2">
  <label>Material Type</label>
  <select className='form-control'
    value={material}
    onChange={(e)=>setMaterial(e.target.value)}>

    <option value="">Select Material</option>
    <option value="Red Brick">Red Brick</option>
    <option value="AAC Block">AAC Block</option>
  </select>
</div>

   <div className="row mt-2">

  <div className="col-md-6">
    <label>Cement Type</label>
    <select className="form-control"
      value={cementType}
      onChange={(e)=>setCementType(e.target.value)}>
      
      <option value="">Select</option>
      <option>OPC (Ordinary Portland Cement)</option>
      <option>PPC (Portland Pozzolana Cement)</option>
      <option>White Cement</option>
      <option>Rapid Hardening Cement</option>
    </select>
  </div>

  <div className="col-md-6">
    <label>Steel / Iron Quality</label>
    <select className="form-control"
      value={steelQuality}
      onChange={(e)=>setSteelQuality(e.target.value)}>
      
      <option value="">Select</option>
      <option>Fe 415</option>
      <option>Fe 500</option>
      <option>Fe 550</option>
      <option>Fe 600</option>
    </select>
  </div>

</div>

  
  </div>

  <hr />

  <h5>House Configuration</h5>

  <div className="row">
    <div className="col-md-6">
      <label>Type of House</label>
      <input type="text" className='form-control'
        value={tofhome} onChange={(e)=>setTofhome(e.target.value)} />
    </div>

    <div className="col-md-6">
      <label>Kitchen on Each Floor</label>
      <select className='form-control'
        value={kitchenoneach} onChange={(e)=>setKitchenoneach(e.target.value)}>
        <option>Yes</option>
        <option>No</option>
      </select>
    </div>

    <div className="col-md-12 mt-2">
      <label>Additional Rooms</label>
      <input type="text" className='form-control'
        value={addroom} onChange={(e)=>setAddroom(e.target.value)} />
    </div>
  </div>

  <hr />

  <h5>Space & Layout</h5>

  <div className="row">
    <div className="col-md-4">
      <label>Parking</label>
      <input type="text" className='form-control'
        value={parking} onChange={(e)=>setParking(e.target.value)} />
    </div>

    <div className="col-md-4">
      <label>Balcony</label>
      <input type="text" className='form-control'
        value={balcony} onChange={(e)=>setBalcony(e.target.value)} />
    </div>

    <div className="col-md-4">
      <label>Garden</label>
      <select className='form-control'
        value={garden} onChange={(e)=>setGarden(e.target.value)}>
           <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </div>

    <div className="col-md-4 mt-2">
      <label>Outdoor</label>
      <select className='form-control'
        value={outdoor} onChange={(e)=>setOutdoor(e.target.value)}>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </div>

    <div className="col-md-4 mt-2">
      <label>Basement</label>
      <select className='form-control'
        value={basement} onChange={(e)=>setBasement(e.target.value)}>
             <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </div>

    <div className="col-md-4 mt-2">
      <label>Terrace</label>
      <select className='form-control'
        value={terrace} onChange={(e)=>setTerrace(e.target.value)}>
           <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </div>
  </div>

  <hr />

  <h5>Design & Style</h5>

  <div className="row">
    <div className="col-md-4">
      <label>Design Style</label>
      <input type="text" className='form-control'
        value={designStyle} onChange={(e)=>setdesignStyle(e.target.value)} />
    </div>

    <div className="col-md-4">
      <label>Color</label>
      <input type="text" className='form-control'
        value={colorP} onChange={(e)=>setColorP(e.target.value)} />
    </div>

    <div className="col-md-4">
      <label>Interior Style</label>
      <input type="text" className='form-control'
        value={interiorstyle} onChange={(e)=>setInteriorStyle(e.target.value)} />
    </div>
  </div>

  <hr />

  <h5>Smart Features</h5>

  <div className="row">
    <div className="col-md-12">
      <label>Smart Features</label>
      <input type="text" className='form-control'
        value={smartFeatures} onChange={(e)=>setSmartFeatures(e.target.value)} />
    </div>
  </div>

  <hr />

  <h5>Additional</h5>

  <div className="row">
    <div className="col-md-12">
      <label>Special Requirements</label>
      <textarea className='form-control'
        value={specialreq} onChange={(e)=>setSpecialReq(e.target.value)} />
    </div>
  </div>

  <div className="text-center mt-3">
    <button type='submit' className='btn btn-success px-5'>
      Save Project
    </button>
  </div>
</form>
  </>
  )
}

export default CreateProject
