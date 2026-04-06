import React from 'react'
import ServiceCard from './ServiceCard'
import lg1 from "../assets/lg1.svg"
import lg2 from "../assets/lg2.svg"
import lg3 from "../assets/lg3.svg"
import lg4 from "../assets/lg4.svg"
import lc1 from "../assets/lc1.svg"
import lc2 from "../assets/lc2.svg"
import lc3 from "../assets/lc3.svg"
import lc4 from "../assets/lc4.svg"
import lc5 from "../assets/lc5.svg"
import lc6 from "../assets/lc6.svg"
import lc7 from "../assets/lc7.svg"
import lc8 from "../assets/lc8.svg"
import lc9 from "../assets/lc9.svg"
import lp1 from "../assets/lp1.svg"
import lp2 from "../assets/lp2.svg"
import lp3 from "../assets/lp3.svg"
import lp4 from "../assets/lp4.svg"
import lp5 from "../assets/lp5.svg"
import cos1 from "../assets/cos1.png"
import cos2 from "../assets/cos2.png"
import cos3 from "../assets/cos3.png"
import TestimonialCard from './TestimonialCard'

import monitor from '../assets/monitor.png'



function Home() {
    return (
        <>

            {/* service section */}
            <div className="row">
                <div className="col-md-10 mx-auto my-5 text-center our-service">
                    <h3 className='heading'><span>BuildHakte</span> Services</h3>
                    <div className="line d-flex justify-content-center my-3">
                        <div className="line1"></div>
                        <div className="line2"></div>
                    </div>
                    <p  > <strong>BuildHatke</strong> : Build Your 'Dream Home' India's No.1 tech powered construction company. One-stop Tech-Based Construction and Design Services</p>

                    <div className="row ">
                        <div className="col-12 my-5 d-flex justify-content-evenly flex-wrap gap-5">

                            <ServiceCard icon={<i class="fa-solid fa-house-flood-water"></i>} heading="Residential Construction" para1="You Dream, We Deliver! " para2=" Let us, build your ‘Dream Home’" />
                            <ServiceCard icon={<i class="fa-solid fa-city"></i>} heading="Commercial Construction" para1="Hassle-Free Execution by" para2=" Our Expert Team" />
                            <ServiceCard icon={<i class="fa-brands fa-intercom"></i>} heading="Interiors & Smart Home" para1="Get Beautiful, Smart &  " para2="  Customized Homes." />
                            <ServiceCard icon={<i class="fa-solid fa-compass-drafting"></i>} heading="Architecture & Structure" para1="Get Tailored Fit Designs " para2=" By our In-house Architects" />


                        </div>
                    </div>

                </div>
            </div>

            {/* number section */}
            <div className="row our-num-row">
                <div className="col-md-10 mx-auto our-number my-3">
                    <div className="row">
                        <div className="col-md-3 text-center p-2">
                            <img src={lg1} alt="" />
                            <h3 className='mt-3'>10,142+ <br />Homes</h3>
                            <p>Built and handed over</p>
                        </div>
                        <div className="col-md-3 text-center p-2">
                            <img src={lg2} alt="" />
                            <h3 className='mt-3'>10+<br />Cities</h3>
                            <p>Operational presence</p>
                        </div>
                        <div className="col-md-3 p-2 text-center">
                            <img src={lg3} alt="" />
                            <h3 className='mt-3'>8 <br />Months</h3>
                            <p>Express execution</p>
                        </div>
                        <div className="col-md-3 p-2 text-center">
                            <img src={lg4} alt="" />
                            <h3 className='mt-3'>114,247 <br />Design Plans</h3>
                            <p>Ready-to-build options</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-10 mx-auto my-5 ">
                    <h3 className='heading text-center' > <span>BuildHatke</span> available in 10+ cities</h3>
                    <div className="line d-flex justify-content-center my-3">
                        <div className="line1"></div>
                        <div className="line2"></div>
                    </div>

                    <div className="row ournum-row mt-5">
                        <div className="col-md-6 col-lg-4 p-2">
                            <div className="card bg-muted p-3 py-4">
                                <div>
                                    <img src={lc1} alt="" />
                                    <span className='ms-4 '>Banglore</span>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 p-2">
                            <div className="card bg-muted p-3 py-4">
                                <div>
                                    <img src={lc2} alt="" />
                                    <span className='ms-4 '>Delhi</span>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 p-2 ">
                            <div className="card bg-muted p-3 py-4">
                                <div>
                                    <img src={lc3} alt="" />
                                    <span className='ms-4 '>Chennai</span>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 p-2">
                            <div className="card bg-muted p-3 py-4">
                                <div>
                                    <img src={lc4} alt="" />
                                    <span className='ms-4 '>Hyderabad</span>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 p-2">
                            <div className="card bg-muted p-3 py-4">
                                <div>
                                    <img src={lc5} alt="" />
                                    <span className='ms-4 '>Pune</span>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 p-2">
                            <div className="card bg-muted p-3 py-4">
                                <div>
                                    <img src={lc6} alt="" />
                                    <span className='ms-4 '>Mysuru</span>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 p-2">
                            <div className="card bg-muted p-3 py-4">
                                <div>
                                    <img src={lc7} alt="" />
                                    <span className='ms-4 '>Noida</span>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 p-2">
                            <div className="card bg-muted p-3 py-4">
                                <div>
                                    <img src={lc8} alt="" />
                                    <span className='ms-4 '>Faridabad</span>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 p-2">
                            <div className="card bg-muted p-3 py-4">
                                <div>
                                    <img src={lc9} alt="" />
                                    <span className='ms-4 '>Gurugram</span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <h3 className=' text-center heading'> <span>How</span> It Works ?</h3>
                     <div className="line d-flex justify-content-center my-3">
                        <div className="line1"></div>
                        <div className="line2"></div>
                    </div>
                    <p className=' text-center'>Wehouse - has been using cutting-edge technology from the outset to address challenges faced by the regular house construction contractors.</p>

                    <div className="row ournum-row process-row mt-5">
                        <div className="col-md-6 col-lg-4 p-2">
                            <div className="card bg-muted p-3 py-4">
                                <div>
                                    <img src={lp1} alt="" />
                                    <h3 className='mt-4'>Connect with Us</h3>
                                    <p className='mt-4'>Share your basic details through a quick form. Our team contacts you within 20 minutes for a free technical consultation.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 p-2">
                            <div className="card bg-muted p-3 py-4">
                                <div>
                                    <img src={lp2} alt="" />
                                    <h3 className='mt-4'>Define Your Requirements</h3>
                                    <p className='mt-4'>Discuss your plot details, budget, and timeline with our experts. We craft a clear project plan tailored to your goals.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 p-2 ">
                            <div className="card bg-muted p-3 py-4">
                                <div>
                                    <img src={lp3} alt="" />
                                    <h3 className='mt-4'>Approve Designs</h3>
                                    <p className='mt-4'>Review floor plans, drawings, and 3D views. Work closely with our architects until every detail is finalized.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 p-2">
                            <div className="card bg-muted p-3 py-4">
                                <div>
                                    <img src={lp4} alt="" />
                                    <h3 className='mt-4'>Live Progress</h3>
                                    <p className='mt-4'>Track construction in real time via our app with daily photos, quality reports, and payment updates.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 p-2">
                            <div className="card bg-muted p-3 py-4">
                                <div>
                                    <img src={lp5} alt="" />
                                    <h3 className='mt-4'>Move In</h3>
                                    <p className='mt-4'>Take possession of your fully completed home. Move in with confidence, backed by a 10year warranty.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 p-2">
                            <div className="card bg-muted p-0 ">
                                <div className='d-flex p-0 m-0'>
                                    <div className='card-left' style={{ height: "270px", width: "50%" }}>

                                </div>
                                <div className='card-right p-4' style={{ height: "270px", width: "50%" }} >
                                    <h4 className='mt-4'>Talk to our Construction Advisor</h4>
                                    <button className='btn mt-5'>Talk to an Expert</button>
                                </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className="row monitor-row">
                <div className="col-md-10 mx-auto my-5 text-center">
                      <h3 className='heading'><span>E</span>-Monitoring</h3>
                       <div className="line d-flex justify-content-center my-3">
                        <div className="line1"></div>
                        <div className="line2"></div>
                    </div>
                      <button className='my-3 btn py-2 px-3 '>Book Our E Monitoring Service</button>
                      <div className="feature position-relative">
                        <p className='fs-5 fw-semi-bold' style={{position:"absolute", top:"31%", left:"15%"}}>Timeline Tracking</p>
                         <p className='fs-5 fw-semi-bold' style={{position:"absolute", top:"7%", left:"15%"}}>Workforce Report</p>
                         <p className='fs-5 fw-semi-bold' style={{position:"absolute", top:"59%", left:"10%"}}>Transparent Environment</p>
                         <p className='fs-5 fw-semi-bold' style={{position:"absolute", top:"86%", left:"10%"}}>Complete Material Report</p>


                          <p className='fs-5 fw-semi-bold' style={{position:"absolute", top:"31%", right:"15%"}}>Timeline Tracking</p>
                         <p className='fs-5 fw-semi-bold' style={{position:"absolute", top:"7%", right:"15%"}}>Workforce Report</p>
                         <p className='fs-5 fw-semi-bold' style={{position:"absolute", top:"59%", right:"10%"}}>Transparent Environment</p>
                         <p className='fs-5 fw-semi-bold' style={{position:"absolute", top:"86%", right:"10%"}}>Complete Material Report</p>




                        <img src={monitor} alt="" className='img-fluid' style={{height:"500px"}}/>
                        
                        
                      </div>
                </div>
            </div>






            <div className="row row testimonial-row-top">
                <div className="col-md-10 mx-auto my-5">
                    <h2 className='heading' ><span>Homeowner</span> Stories</h2>
                     <div className="line d-flex justify-content-start my-3">
                        <div className="line1"></div>
                        <div className="line2"></div>
                    </div>
                    <p>Hear from our happy homeowners</p>
                     <div className="row testimonial-row">
                        <div className="col-md-4 p-2">
                          <TestimonialCard img={cos1} name="Subodh" location="Delhi-NCR" review="Building our home with Brick & Bolt was smooth and stress-free. Their tech-driven approach and real-time updates gave us full transparency and control throughout the entire construction journey from start." />
                        </div>
                        <div className="col-md-4 p-2">
                             <TestimonialCard img={cos2} name="Ashutosh" location="Delhi-NCR" review="After disappointment with local builders, I rebuilt my home with Brick & Bolt. Their professionalism, transparent payments, and prompt issue resolution ensured a smooth, stress-free construction experience throughout the project." />
                        </div>
                        <div className="col-md-4 p-2">
                             <TestimonialCard img={cos3} name="Ajay" location="Delhi-NCR" review="For a single mother, homebuilding can feel daunting but Brick & Bolt made it feel effortless. Their trust and transparency turned my dream into a place I now call home." />
                        </div>
                     </div>
                </div>
            </div>

            <button className='btn enq-btn px-4 py-2'>Enquiry</button>


        </>
    )
}

export default Home
