import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';

function CreateProject() {
const [step, setStep] = useState(1);

// Basic
const [location,setLocation]= useState('');
const [plotsize,setPlotsize]= useState('');
const [plotface,setPlotface]= useState('');
const [plottype,setPlottype]= useState('');
const [budget,setBudget]= useState('');
const [timeline,setTimeline]= useState('');
const [sdate,setSdate]= useState('');

// House Config
const [tofhome,setTofhome]=useState('');
const [floors,setFloors]=useState('');
const [bedrooms,setBedrooms]=useState('');
const [bathrooms,setBathrooms]=useState('');
const [kitchen,setKitchen]=useState('');
const [kitchenoneach,setKitchenoneach]=useState('');
const [livingRoom,setLivingRoom]=useState('');
const [diningRoom,setDiningRoom]=useState('');
const [addroom,setAddroom]=useState('');

// Layout
const [parking,setParking]=useState('');
const [balcony,setBalcony]=useState('');
const [garden,setGarden]=useState('');
const [outdoor,setOutdoor]=useState('');
const [basement,setBasement]=useState('');
const [terrace,setTerrace]=useState('');

// Material
const [material,setMaterial]=useState('');
const [cementType,setCementType]=useState('');
const [steelQuality,setSteelQuality]=useState('');
const [tiles,setTiles]=useState('');
const [doors,setDoors]=useState('');

// Design
const [designStyle,setDesignStyle]=useState('');
const [colorP,setColorP]=useState('');
const [interiorstyle,setInteriorStyle]=useState('');
const [light,setLight]=useState('');
const [ceiling,setCeiling]=useState('');

// Smart
const [smartHome,setSmartHome]=useState('');
const [cctv,setCctv]=useState('');
const [solar,setSolar]=useState('');
const [rainwater,setRainwater]=useState('');
const [lift,setLift]=useState('');
const [vastu,setVastu]=useState('');

const [specialreq,setSpecialReq]=useState('');



const projectcode = async (e)=>{
  e.preventDefault();

  const uid = localStorage.getItem("userId");

  const project = {
    uid,

    location, plotsize, plotface, plottype, budget, timeline, sdate,

    tofhome, floors, bedrooms, bathrooms, kitchen, livingRoom, diningRoom, addroom,

    parking, balcony, garden, outdoor, basement, terrace,

    material, cementType, steelQuality, tiles, doors,

    designStyle, colorP, interiorstyle,

    smartHome, cctv, solar, rainwater, lift, vastu,

    specialreq
  };

  const res = await axios.post("http://localhost:3000/api/user/project", project);

  if(res.data.msg==="success"){
    toast.success("Project Created 🚀");
  } else {
    toast.error("Error");
  }
};



// const getproject = async()=>{
// const res = await axios.get(`http://localhost:3000/api/user/project`)
// console.log(res.data.project[2].uid);

// }

// useEffect(()=>{
// getproject();
// },[])
const nextStep = () => {
  setStep(step + 1);
};

const prevStep = () => {
  setStep(step - 1);
};

  return (
  <>
  {/* <h4>Create Project</h4> */}
<div className="container w-75 shadow py-2 mt-3">



 <div className="d-flex justify-content-between align-items-center my-4 flex-wrap">

  {[1,2,3,4,5,6,7].map((s, i) => (
    <React.Fragment key={s}>
      
     
      <div className="text-center">
        <div
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            backgroundColor: step >= s ? "#0d6efd" : "#ccc",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto"
          }}
        >
          {s}
        </div>


        <small>
          {s === 1 && "Basic Info"}
          {s === 2 && "House Config"}
          {s === 3 && "Space & Layout"}
          {s === 4 && "Material Preferences"}
          {s === 5 && "Design & Style"}
          {s === 6 && "Smart Features"}
          {s === 7 && "Preview"}
        </small>
      </div>
      {s !== 7 && (
        <div
          style={{
            flex: 1,
            height: "3px",
            backgroundColor: step > s ? "#0d6efd" : "#ccc"
          }}
        ></div>
      )}

    </React.Fragment>
  ))}

</div>

<form className='w-100' onSubmit={projectcode}>


{step ===1 && (
  <>
    <span className='heading-form'>Basic Project Info</span>
  <div className="row mt-4">
     <div className="col-md-12 mt-2">
      <label>Location (City / Address)</label>
      <input type="text" className='form-control'
        value={location} onChange={(e)=>setLocation(e.target.value)} />
    </div>

    <div className="col-md-6 mt-2 mt-2">
      <label>Plot Size (sq ft / sq yard)</label>
      <input type="text" className='form-control'
        value={plotsize} onChange={(e)=>setPlotsize(e.target.value)} />
    </div>

   <div className="col-md-6 mt-2 mt-2">
      <label>Plot Facing (North/South/East/West)</label>
      <input type="text" className='form-control'
        value={plotface} onChange={(e)=>setPlotface(e.target.value)} />
    </div>
   <div className="col-md-6 mt-2 mt-2">
      <label>Plot Type</label>
  <select value={plottype} onChange={(e)=>setPlottype(e.target.value)} class="form-select" aria-label="Default select example">
  <option >--Plot Type-- </option>
  <option >Residential</option>
  <option >Commercial</option>
</select>
    </div>

    <div className="col-md-6 mt-2 mt-2">
      <label>Budget</label>
      <input type="text" className='form-control'
        value={budget} onChange={(e)=>setBudget(e.target.value)} />
    </div>

    <div className="col-md-6 mt-2 mt-2">
      <label>Timeline</label>
      <input type="text" className='form-control'
        value={timeline} onChange={(e)=>setTimeline(e.target.value)} />
    </div>
    <div className="col-md-6 mt-2 mt-2">
  <label>Start Date</label>
  <input type="date"
   className='form-control' value={sdate} onChange={(e)=>setSdate(e.target.value)} />
</div>

 <div className="row mt-4">
  <div className="col-md-12 d-flex justify-content-end ">
     <button type="button" onClick={nextStep} className="btn btn-primary  w-25">
        Next
      </button>
  </div>
 </div>
  </div>
  </>

  

)}
  {step===2 && (
     <>
     <span className='heading-form'>House Configuration</span>
 <div className="row mt-4">
    <div className="col-md-6 mt-2">
      <label>Type of House</label>
        
        <select value={tofhome} onChange={(e)=>setTofhome(e.target.value)} class="form-select" aria-label="Default select example">
  <option >--select--</option>
  <option >Villa</option>
  <option >Duplex</option>
  <option >Apartment</option>
</select>
    </div>
<div className="col-md-6 mt-2">
  <label>Number of Floors</label>
  <select
    className="form-control"
    value={floors}
    onChange={(e) => setFloors(e.target.value)}
  >
    <option >--select--</option>
    <option >1</option>
    <option >2</option>
    <option >3</option>
    <option >4</option>
    <option >5</option>
  </select>
</div>

    <div className="col-md-6 mt-2 mt-2">
      <label>Number of Bedrooms</label>
     <select
    className="form-control"
    value={bedrooms}
    onChange={(e) => setBedrooms(e.target.value)}
  >
    <option >--select--</option>
    <option >1</option>
    <option >2</option>
    <option >3</option>
    <option >4</option>
    <option >5</option>
  </select>
    </div>

    <div className="col-md-6 mt-2">
  <label>Bathrooms each roomm</label>
  <select
    className="form-control"
    value={bathrooms}
    onChange={(e) => setBathrooms(e.target.value)}
  >
    <option >--select--</option>
    <option >Yes</option>
    <option >NO</option>
  </select>
</div>
<div className="col-md-6 mt-2">
  <label>Kitchen</label>
   <select
    className="form-control"
    value={kitchen}
    onChange={(e) => setKitchen(e.target.value)}
  >
    <option >--select--</option>
    <option >Yes</option>
    <option >NO</option>
  </select>
</div>
<div className="col-md-6 mt-2">
  <label>Kitchen on each floor</label>
  <select
    className="form-control"
    value={kitchenoneach}
    onChange={(e) => setKitchenoneach(e.target.value)}
  >
    <option >--select--</option>
    <option >Yes</option>
    <option >NO</option>
  </select>
</div><div className="col-md-6 mt-2">
  <label>Living Room</label>
  <select
    className="form-control"
    value={livingRoom}
    onChange={(e) => setLivingRoom(e.target.value)}
  >
    <option >--select--</option>
    <option >Yes</option>
    <option >NO</option>
  </select>
</div><div className="col-md-6 mt-2">
  <label>Dining Room</label>
  <select
    className="form-control"
    value={diningRoom}
    onChange={(e) => setDiningRoom(e.target.value)}
  >
    <option >--select--</option>
    <option >Yes</option>
    <option >NO</option>
  </select>
</div>
<div className="col-md-6 mt-2 ">
  <label>Additional Rooms</label>
  <select
    className="form-control "
    value={addroom}
    onChange={(e) => setAddroom(e.target.value)}
  >
    <option >--select--</option>
    <option >Puja</option>
    <option >Study</option>
    <option >Store</option>
    <option value='other' >other</option> 
  </select>
    {/* {addroom === "other" && (
    <input
      type="text"
      className="form-control mt-2"
      placeholder="Additional Rooms"
      value={addroom}
      onChange={(e) => setAddroom(e.target.value)}
    />
  )} */}
</div>
<div className="col-md-6 mt-2">
    <label>Refrence your design</label>
  <input type="file"  className='form-control '/>
</div>

  </div>

    <div className="row mt-4">
      <div className="col-md-12 d-flex justify-content-between">
        <button type="button" onClick={prevStep} className="btn btn-secondary w-25">
        Back
      </button>

      <button type="button" onClick={nextStep} className="btn btn-primary w-25">
        Next
      </button>
      </div>
    </div>
  </> 
  )}


{step ===3 && (
  <>
   <span className='heading-form'>Space & Layout</span>

  <div className="row mt-4">
    <div className="col-md-6 mt-2 mt-2">
      <label>Parking</label>
    <select
    className="form-control"
    value={parking}
    onChange={(e) => setParking(e.target.value)}
  >
    <option >--select--</option>
    <option >Yes</option>
    <option >NO</option>
  </select>
    </div>

    <div className="col-md-6 mt-2 mt-2">
      <label>Balcony</label>
       <select
    className="form-control"
    value={balcony}
    onChange={(e) => setBalcony(e.target.value)}
  >
    <option >--select--</option>
    <option >Yes</option>
    <option >NO</option>
  </select>
    </div>

    <div className="col-md-6 mt-2 mt-2">
      <label>Garden</label>
      <select className='form-control'
        value={garden} onChange={(e)=>setGarden(e.target.value)}>
          <option >--select--</option>
           <option >Yes</option>
        <option >No</option>
      </select>
    </div>

    <div className="col-md-6 mt-2 mt-2">
      <label>Outdoor</label>
      <select className='form-control'
        value={outdoor} onChange={(e)=>setOutdoor(e.target.value)}>
          <option >--select--</option>
        <option >Yes</option>
        <option >No</option>
      </select>
    </div>

    <div className="col-md-6 mt-2 mt-2">
      <label>Basement</label>
      <select className='form-control'
        value={basement} onChange={(e)=>setBasement(e.target.value)}>
          <option >--select--</option>
             <option >Yes</option>
        <option >No</option>
      </select>
    </div>

    <div className="col-md-6 mt-2 mt-2">
      <label>Terrace</label>
      <select className='form-control'
        value={terrace} onChange={(e)=>setTerrace(e.target.value)}>
          <option >--select--</option>
           <option >Yes</option>
        <option >No</option>
      </select>
    </div>
  </div>
   <div className="row mt-4">
      <div className="col-md-12 d-flex justify-content-between">
        <button type="button" onClick={prevStep} className="btn btn-secondary w-25">
        Back
      </button>

      <button type="button" onClick={nextStep} className="btn btn-primary w-25">
        Next
      </button>
      </div>
    </div>
  </>
)}
 



 {step===4 && (
  <>
   <span className='heading-form'>Material Preferences</span>

  <div className="row mt-4">
    <div className="col-md-6 mt-2">
      <label>Wall Material</label>
    <select className='form-control'
        value={material} onChange={(e)=>setMaterial(e.target.value)}>
          <option >--select--</option>
           <option >Red Brick</option>
        <option >AAC Block</option>
      </select>
    </div>

    <div className="col-md-6 mt-2">
      <label>Cement Type</label>
       <select className='form-control'
        value={cementType} onChange={(e)=>setCementType(e.target.value)}>
          <option >--select--</option>
           <option >OPC</option>
        <option >PPC</option>
      </select>
    </div>

    <div className="col-md-6 mt-2">
      <label>Steel Quality</label>
      <select className='form-control'
        value={steelQuality} onChange={(e)=>setSteelQuality(e.target.value)}>
          <option >--select--</option>
           <option>Fe 415</option>
        <option>Fe 500</option>
      </select>
    </div>
  


  
    <div className="col-md-6 mt-2">
      <label>Tiles</label>
      <select className='form-control'
        value={tiles} onChange={(e)=>setTiles(e.target.value)}>
          <option >--select--</option>
           <option value="yes">Tiles</option>
        <option >Marble</option>
        <option>Granite</option>
      </select>
    </div>
 


 
    <div className="col-md-6 mt-2">
      <label>Doors & Windows Type</label>
     <select className='form-control'
        value={doors} onChange={(e)=>setDoors(e.target.value)}>
        <option >--select--</option>
        <option >Steel</option>
        <option >wood</option>
      </select>
    </div>


    <div className="row mt-4">
      <div className="col-md-12 d-flex justify-content-between">
        <button type="button" onClick={prevStep} className="btn btn-secondary w-25">
        Back
      </button>

      <button type="button" onClick={nextStep} className="btn btn-primary w-25">
        Next
      </button>
      </div>
    </div>

 
  </div>
  </>

 )}
 {step === 5 && (

<>
 <span className='heading-form'>Design & Style</span>

  <div className="row mt-4">
    <div className="col-md-6 mt-2 mt-2">
      <label>Design Style</label>
    <select className='form-control'
        value={designStyle} onChange={(e)=>setDesignStyle(e.target.value)}>
          <option >--select--</option>
           <option value="yes">Modern</option>
        <option >Traditional</option>
        <option >Luxury</option>
      </select>
    </div>

    <div className="col-md-6 mt-2 mt-2">
      <label>Exterior Color Preference</label>
       <select className='form-control'
        value={colorP} onChange={(e)=>setColorP(e.target.value)}>
          <option >--select--</option>
           <option >OPC</option>
        <option >PPC</option>
      </select>
    </div>

    <div className="col-md-6 mt-2">
      <label>Interior Style</label>
      <select className='form-control'
        value={interiorstyle} onChange={(e)=>setInteriorStyle(e.target.value)}>
          <option >--select--</option>
           <option >Fe 415</option>
        <option >Fe 500</option>
      </select>
    </div>
  


  
    <div className="col-md-6 mt-2">
      <label>Lighting Preference</label>
      <select className='form-control'
        value={light} onChange={(e)=>setLight(e.target.value)}>
          <option >--select--</option>
           <option value="yes">Tiles</option>
        <option >Marble</option>
        <option >Granite</option>
      </select>
    </div>
 


 
    <div className="col-md-6 mt-2">
      <label>Ceiling Type</label>
     <select className='form-control'
        value={ceiling} onChange={(e)=>setCeiling(e.target.value)}>
          <option >--select--</option>
           <option >Tiles</option>
        <option>Steel</option>
        <option >wood</option>
      </select>
    </div>


    <div className="row mt-4">
      <div className="col-md-12 d-flex justify-content-between">
        <button type="button" onClick={prevStep} className="btn btn-secondary w-25">
        Back
      </button>

      <button type="button" onClick={nextStep} className="btn btn-primary w-25">
        Next
      </button>
      </div>
    </div>

  </div>
</>
)}

 {step === 6 && (

<>
 <span className='heading-form'>Smart Features</span>

  <div className="row mt-4">
    <div className="col-md-6 mt-2">
      <label>Smart Home</label>
    <select className='form-control'
        value={smartHome} onChange={(e)=>setSmartHome(e.target.value)}>
          <option >--select--</option>
           <option >Modern</option>
        <option >Traditional</option>
        <option >Luxury</option>
      </select>
    </div>

    <div className="col-md-6 mt-2">
      <label>CCTV</label>
       <select className='form-control'
        value={cctv} onChange={(e)=>setCctv(e.target.value)}>
          <option >--select--</option>
           <option >YES</option>
        <option >NO</option>
      </select>
    </div>

    <div className="col-md-6 mt-2">
      <label>Solar Panels</label>
      <select className='form-control'
        value={solar} onChange={(e)=>setSolar(e.target.value)}>
          <option >--select--</option>
           <option >YES</option>
        <option >NO</option>
      </select>
    </div>
  


  
    <div className="col-md-6 mt-2">
      <label>Rainwater Harvesting</label>
      <select className='form-control'
        value={rainwater} onChange={(e)=>setRainwater(e.target.value)}>
          <option >--select--</option>
           <option >YES</option>
        <option >NO</option>
  
      </select>
    </div>
 


 
    <div className="col-md-6 mt-2">
      <label>Lift Required</label>
     <select className='form-control'
        value={lift} onChange={(e)=>setLift(e.target.value)}>
          <option >--select--</option>
           <option >YES</option>
        <option >NO</option>
        
      </select>
    </div>
      <div className="col-md-6 mt-2">
      <label>Vastu Compliance</label>
     <select className='form-control'
        value={vastu} onChange={(e)=>setVastu(e.target.value)}>
          <option >--select--</option>
           <option >YES</option>
        <option >NO</option>
        
      </select>
    </div>
      <div className="col-md-6 mt-2">
      <label>Special Requirements</label>
    <textarea className='form-control'
            value={specialreq} onChange={(e)=>setSpecialReq(e.target.value)} 
    placeholder='Enter your Special Requirements'></textarea>
    </div>


   

  <div className="col-md-12 d-flex justify-content-between mt-4">
     <button type="button" onClick={prevStep} className="btn btn-secondary me-2">
        Back
      </button>
    
       <button onClick={() => setStep(7)} className="btn btn-primary">Preview</button>
  </div>
  </div>
</>
)}
 

 {step === 7 && (
  <>
    <span className="heading-form mt-4">Preview Project</span>

    <div className="row">

      {/* Basic */}
      <div className="col-md-6">
        <div className="card p-3 mb-3">
          <h5>Basic Info</h5>
          <p><b>Location:</b> {location}</p>
          <p><b>Plot Size:</b> {plotsize}</p>
          <p><b>Budget:</b> ₹{budget}</p>
        </div>
      </div>

      {/* House */}
      <div className="col-md-6">
        <div className="card p-3 mb-3">
          <h5>House Config</h5>
          <p><b>Type:</b> {tofhome}</p>
          <p><b>Floors:</b> {floors}</p>
          <p><b>Bedrooms:</b> {bedrooms}</p>
        </div>
      </div>

      {/* Material */}
      <div className="col-md-6">
        <div className="card p-3 mb-3">
          <h5>Material</h5>
          <p><b>Wall:</b> {material}</p>
          <p><b>Cement:</b> {cementType}</p>
          <p><b>Steel:</b> {steelQuality}</p>
        </div>
      </div>

      {/* Smart */}
      <div className="col-md-6">
        <div className="card p-3 mb-3">
          <h5>Smart Features</h5>
          <p><b>Smart Home:</b> {smartHome}</p>
          <p><b>CCTV:</b> {cctv}</p>
          <p><b>Solar:</b> {solar}</p>
        </div>
      </div>

    </div>

    <div className="d-flex justify-content-between mt-3">
      <button onClick={prevStep} className="btn btn-secondary">Back</button>
      <button type='submit' className="btn btn-success">Submit</button>
    </div>
  </>
)}


 

  
</form>
</div>
  </>
  )
}

export default CreateProject
