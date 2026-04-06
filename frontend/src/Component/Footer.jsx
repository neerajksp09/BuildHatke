import React from 'react'

function Footer() {
  return (
    <>
    <div className="row footer-row">
        <div className="col-md-10 mx-auto mt-5">
            <div className="row">
                <div className="col-md-4">
                    <h4>Useful links</h4>
                    <ul>
                        <li><a href="">Noida</a></li>
                        <li><a href="">Delhi</a></li>
                        <li><a href="">E-Monitoring</a></li>
                        <li><a href="">Become a Professional</a></li>
                        
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">Site Map</a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h4>Our Services</h4>
                    <ul>
                        <li><a href="">Residential Construction</a></li>
                        <li><a href="">Commercial Construction</a></li>
                        <li><a href="">Architecture Services</a></li>
                        <li><a href="">Become a Professional</a></li>
                        <li><a href="">Interiors & Smart Home</a></li>
                       
                    </ul>
                </div>
                <div className="col-md-4">
                    <h4>Contact Us</h4>
                    <ul>
                        <li><a href="">BuildHatke home construction- Sales</a></li>
                        <li><a href="">Creatons Business Park,</a></li>
                        <li><a href="">Ground Floor, H - 35, Sec 63, Noida,</a></li>
                        <li><a href="">Gautam Buddha Nagar, Uttar Pradesh - 201301</a></li>
                        <li><a href="">Call: +91 7985326919</a></li>
                       
                    </ul>
                </div>


            </div>

            <div className="row">
                <div className="col-12 text-center social-media my-4">
                      <span><i class="fa-brands fa-facebook-f"></i></span>
                      <span><i class="fa-brands fa-instagram"></i></span>
                      <span><i class="fa-brands fa-twitter"></i></span>
                      <span><i class="fa-brands fa-linkedin-in"></i></span>
                </div> 
            </div>
              
              <div className="row">
                <div className="col-12 text-center">
                    <p>© Copyright <strong style={{color:"rgb(164, 91, 41)"}}>BuildHatke Group of Companies</strong>. All Rights Reserved <br /> Designed by SPI coding gang</p>
                </div>
              </div>

        </div>
    </div>
    </>
  )
}

export default Footer
