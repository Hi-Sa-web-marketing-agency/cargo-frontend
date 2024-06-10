import React from 'react'
import '../Components/Footer.css';
import { Col, Row } from 'react-bootstrap';


function Footer() {
  return (
    <div className='Footer-main-div'>
        <div className='footer-a'>
            <img src='/Images/Logo.png'/>

            <br/>
            <p>ISO 9001: 2015, ISO 27001: 2013 Certified Company <br/>
                CIN: L63090DL2011PLC221234</p>
             </div>

             <div className='Footer-b'>
                

             <Row>
                <Col xs={6} md={2}>
                    <h4>SERVICES</h4>
                    <br/>
                    <p>Express Parcel</p>
                    <p>Ware Housing</p>
                    <p>PArt Truckload</p>
                    <p>Full Truckload</p>
                    <p>Cross Boarder</p>
                    <p>Data Intelligence</p>
                    <p>Software Platform</p>

                </Col>
                <Col xs={6} md={2}>
                <h4>SOLUTIONS</h4>
                    <br/>
                    <p>D2c Brands</p>
                    <p>Personal Courier</p>
                    <p>B2b Business</p>

                </Col>
                <Col xs={6} md={2}>

                <h4>PARTNERS</h4>
                    <br/>
                    <p>Franchise Opportunity</p>
                    <p>Delivery Partner</p>
                    <p>Fleet Owner</p>

                </Col>
                <Col xs={6} md={2}>
                <h4>COMPANY</h4>
                    <br/>
                    <p>About Us</p>
                    <p>Governece</p>
                    <p>Fleet Owner</p>
                    <p>Investor relations</p>
                </Col>


                <Col xs={6} md={2}>
                <h4>GET IN TOUCH</h4>
                    <br/>
                    <p>Supporrt</p>
                    <p>Raise Enquery</p>
                    <p>Store Locator</p>
                    <p>Investor relations</p>
                    <p>Careers</p>
                </Col>

                <Col xs={6} md={2}>
                <h4>POLICIES</h4>
                    <br/>
                    <p>Terms and contions</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy </p>
                    <p>Fraud Disclaimer</p>
                    <p>ONDC Disclaimer</p>
                </Col>

             </Row>
             <br/>
             </div>
               <div className='footer-c'>
                {/* <Row>
                    <Col xs={12} md={2}>
                    <p style={{fontWeight:"bold",marginTop:"20px"}}>Information Security Policy</p>
               <p>Delhivery is committed to safeguarding the confidentiality, integrity and availability of all physical and electronic information assets of the organization.<br/>
                We ensure that the regulatory, operational and contractual requirements are fulfilled.</p>
                <p style={{fontWeight:"bold"}}>Disclaimer</p>
                <p style={{marginTop:"-10px"}}>Operational metrics listed are as of August 04, 2023</p>

                    </Col>

                    <Col xs={12} md={2}>
                        
                        </Col>
                </Row> */}

<p style={{fontWeight:"bold",marginTop:"20px"}}>Information Security Policy</p>
               <p>Speedway Cargo is committed to safeguarding the confidentiality, integrity and availability of all physical and electronic information assets of the organization.<br/>
                We ensure that the regulatory, operational and contractual requirements are fulfilled.</p>
               {/* <br/> */}
                <p style={{fontWeight:"bold"}}>Disclaimer</p>
                <p style={{marginTop:"-10px"}}>Operational metrics listed are as of August 04, 2023</p>

              <div className='socials'>
                <img src='/Images/fb.png'/>
                <img src='/Images/twitter.png'/>
                <img src='/Images/Linked.png'/>
                <img src='/Images/utub.png'/>
                <img src='/Images/insta.png'/>

              </div>
              
               </div>

    </div>
  )
}

export default Footer
