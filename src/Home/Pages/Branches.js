import React from 'react'
import { Link } from 'react-router-dom'
import '../Pages/Branches.css'
import { Col, Row } from 'react-bootstrap'
import Topbar from '../Components/Topbar'

function Branches() {
  return (
    <>
    <Topbar/>
     <div className='Branch-main'>
      <div className='Branch-banner-container'>
    {/* <img className='Branch-banner' src='/Images/Branch-banner.jpg' alt='Branches Banner'/> */}
  </div>
        <div className='Branch-text'>
        <h2>Branches</h2>
        <p><Link style={{textDecoration:"none",fontSize:"18px",color:"white"}}>Home  </Link> / Branches</p>
      </div>
      <div className='branch2'>

       <Row>
        <Col xs={12} md={12} lg={6} style={{display:"flex"}}>
            <div className='branch2-img1'>
                <img src='/Images/Branch-banner.jpg'/>
            </div>
            <div className='branch2-img2'>
              <p style={{fontSize:"20px",fontWeight:"bold"}}><span className='span' style={{fontSize:"40px"}}>6</span> Branches</p>
                <img src='/Images/Branch-banner.jpg'/>
            </div>
        </Col>

        <Col xs={12} md={12} lg={6}>
          <div className='branch2-text'>
          <p><span className='span'>Speedway Cargo</span> has a safe, reliable, and more affordable way to move. It’s easy and convenient. Save yourself the stress and hassle of renting, loading and driving a rental truck. Cut your labor time – only load and unload once. Move and store on your schedule.
                    Tempor erat elitr rebum at clita. Diam dolor
                    diam ipsum sit. Aliqu diam amet diam et eos.
                    Clita erat ipsum et lorem et sit, sed stet
                    lorem sit clita duo justo magna dolore erat amet
                    </p> 
                    <br/>
                    <h4 className='span'>Head Office</h4>

          </div>
          <div className='branch2-card'>
            <Row>
              <Col xs={12} md={6}  >
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14430.405342017171!2d51.513363!3d25.283993!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45dc9555555575%3A0x42d40574ade944e9!2sSpeedway%20Cargo%20Service!5e0!3m2!1sen!2slk!4v1715077126328!5m2!1sen!2slk"
               width="100%" height="180" 
                style={{ border: 0, marginTop: '-8%',borderRadius:"10px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
              </Col>
              <Col xs={12} md={6}>
              <p> <span style={{fontWeight:"600"}}>Address:</span> Al-Jazeera Street, Post Box No:12507 Near Badariya Signal, Bin Mahmoud, Doha, Qatar.</p>
            <p><span style={{fontWeight:"600"}}>Mobile:</span> +974 55995013 / +974 55741739<br/><span style={{fontWeight:"600"}}>Telephone:</span> +974 44438 408Fax: +974 44438 408<br/><span style={{fontWeight:"600"}}>Email:</span> info@speedwaycargo.net</p>

              </Col>
            </Row>
    

            {/* <img src='/Images/Branch-banner.jpg'/> */}
          
          </div>
             </Col>
       
       </Row>
      </div>
      <div className='branches'>
        <Row>
          <Col xs={12}  md={6} lg={4} >
            <h4>Qatar</h4>
            {/* <h6>Industrial Area Branch</h6> */}
          <div className='branches-list'>

          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14430.405342017171!2d51.513363!3d25.283993!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45dc9555555575%3A0x42d40574ade944e9!2sSpeedway%20Cargo%20Service!5e0!3m2!1sen!2slk!4v1715077126328!5m2!1sen!2slk"
               width="100%" height="180" 
                style={{ border: 0,borderRadius:"10px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

            {/* <img src='/Images/Branch-banner.jpg'/> */}
            <p> <span style={{fontWeight:"600"}}>Address:</span> Al-Jazeera Street, Post Box No:12507 Near Badariya Signal, Bin Mahmoud, Doha, Qatar.</p>
            <p><span style={{fontWeight:"600"}}>Mobile:</span> +974 55995013 / +974 55741739<br/><span style={{fontWeight:"600"}}>Telephone:</span> +974 44438 408Fax: +974 44438 408<br/><span style={{fontWeight:"600"}}>Email:</span> info@speedwaycargo.net</p>
            </div>

          </Col>

          <Col xs={12}   md={6} lg={4} >
          <h4>Delhi Office</h4>

          <div className='branches-list'>

          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14430.405342017171!2d51.513363!3d25.283993!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45dc9555555575%3A0x42d40574ade944e9!2sSpeedway%20Cargo%20Service!5e0!3m2!1sen!2slk!4v1715077126328!5m2!1sen!2slk"
               width="100%" height="180" 
                style={{ border: 0,borderRadius:"10px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

            {/* <img src='/Images/Branch-banner.jpg'/> */}
            <p> <span style={{fontWeight:"600"}}>Address:</span> Al-Jazeera Street, Post Box No:12507 Near Badariya Signal, Bin Mahmoud, Doha, Qatar.</p>
            <p> <span style={{fontWeight:"600"}}>Mobile:</span> +974 55995013 / +974 55741739<br/><span style={{fontWeight:"600"}}>Telephone:</span> +974 44438 408Fax: +974 44438 408<br/><span style={{fontWeight:"600"}}>Email:</span> info@speedwaycargo.net</p>
            </div>

          </Col>
          <Col xs={12}   md={6} lg={4} >
          <h4>Calicut Office</h4>

          <div className='branches-list'>

          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62634.87571052191!2d75.96248!3d11.137213!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64ee43787564b%3A0x3bbe8c5cbb49ff5b!2sSpeedway%20Cargo%20%26%20Courier%20Service!5e0!3m2!1sen!2slk!4v1715077635003!5m2!1sen!2slk"
               width="100%" height="180" 
                style={{ border: 0,borderRadius:"10px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

            {/* <img src='/Images/Branch-banner.jpg'/> */}
            <p> <span style={{fontWeight:"600"}}>Address:</span>Address: 2, Kondotty - Tirurangadi Rd, Karipur, Kerala 673648, India</p>
            <p><span style={{fontWeight:"600"}}>Mobile:</span> N/A <br/><span style={{fontWeight:"600"}}>Telephone:</span>+91 483 271 8100<br/><span style={{fontWeight:"600"}}>Email:</span>info@speedwaycargo.net</p>
            </div>

          </Col>
          <Col xs={12}   md={6} lg={4}>
          <h4>Cochin Office</h4>

          <div className='branches-list'>

          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14430.405342017171!2d51.513363!3d25.283993!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45dc9555555575%3A0x42d40574ade944e9!2sSpeedway%20Cargo%20Service!5e0!3m2!1sen!2slk!4v1715077126328!5m2!1sen!2slk"
               width="100%" height="180" 
                style={{ border: 0,borderRadius:"10px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

            {/* <img src='/Images/Branch-banner.jpg'/> */}
            <p> <span style={{fontWeight:"600"}}>Address:</span> Al-Jazeera Street, Post Box No:12507 Near Badariya Signal, Bin Mahmoud, Doha, Qatar.</p>
            <p><span style={{fontWeight:"600"}}>Mobile:</span> +974 55995013 / +974 55741739<br/><span style={{fontWeight:"600"}}>Telephone:</span> +974 44438 408Fax: +974 44438 408<br/><span style={{fontWeight:"600"}}>Email:</span> info@speedwaycargo.net</p>
            </div>

          </Col>
       
        </Row>
      </div>
{/* 
      <div className='branches-tab'>
        <Row>
          <Col xs={12}  md={6} >
            <h4>Qatar</h4>
          <div className='branches-list'>

          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22926.9087729804!2d54.37456868526125!3d24.503059512514007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e665dca2ff087%3A0x7bcf747a0b8431f0!2sOCEAN%20WAVES%20SECURITY%20SYSTEMS!5e0!3m2!1sen!2sae!4v1700725389813!5m2!1sen!2sae"
          width="100%"
          height="180"
          style={{ border: 0,borderRadius:"10px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
            <p> <span style={{fontWeight:"600"}}>Address:</span> Al-Jazeera Street, Post Box No:12507 Near Badariya Signal, Bin Mahmoud, Doha, Qatar.</p>
            <p><span style={{fontWeight:"600"}}>Mobile:</span> +974 55995013 / +974 55741739<br/><span style={{fontWeight:"600"}}>Telephone:</span> +974 44438 408Fax: +974 44438 408<br/><span style={{fontWeight:"600"}}>Email:</span> info@speedwaycargo.net</p>
            </div>

          </Col>

          <Col xs={12}   md={6} >
          <h4>Delhi Office</h4>

          <div className='branches-list'>

          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22926.9087729804!2d54.37456868526125!3d24.503059512514007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e665dca2ff087%3A0x7bcf747a0b8431f0!2sOCEAN%20WAVES%20SECURITY%20SYSTEMS!5e0!3m2!1sen!2sae!4v1700725389813!5m2!1sen!2sae"
          width="100%"
          height="180"
          style={{ border: 0,borderRadius:"10px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

            <p> <span style={{fontWeight:"600"}}>Address:</span> Al-Jazeera Street, Post Box No:12507 Near Badariya Signal, Bin Mahmoud, Doha, Qatar.</p>
            <p> <span style={{fontWeight:"600"}}>Mobile:</span> +974 55995013 / +974 55741739<br/><span style={{fontWeight:"600"}}>Telephone:</span> +974 44438 408Fax: +974 44438 408<br/><span style={{fontWeight:"600"}}>Email:</span> info@speedwaycargo.net</p>
            </div>

          </Col>
          <Col xs={12}   md={6} >
          <h4>Calicut Office</h4>

          <div className='branches-list'>

          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22926.9087729804!2d54.37456868526125!3d24.503059512514007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e665dca2ff087%3A0x7bcf747a0b8431f0!2sOCEAN%20WAVES%20SECURITY%20SYSTEMS!5e0!3m2!1sen!2sae!4v1700725389813!5m2!1sen!2sae"
          width="100%"
          height="180"
          style={{ border: 0,borderRadius:"10px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

            <p> <span style={{fontWeight:"600"}}>Address:</span> Al-Jazeera Street, Post Box No:12507 Near Badariya Signal, Bin Mahmoud, Doha, Qatar.</p>
            <p><span style={{fontWeight:"600"}}>Mobile:</span> +974 55995013 / +974 55741739<br/><span style={{fontWeight:"600"}}>Telephone:</span> +974 44438 408Fax: +974 44438 408<br/><span style={{fontWeight:"600"}}>Email:</span> info@speedwaycargo.net</p>
            </div>

          </Col>
          <Col xs={12}   md={6}>
          <h4>Cochin Office</h4>

          <div className='branches-list'>

          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22926.9087729804!2d54.37456868526125!3d24.503059512514007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e665dca2ff087%3A0x7bcf747a0b8431f0!2sOCEAN%20WAVES%20SECURITY%20SYSTEMS!5e0!3m2!1sen!2sae!4v1700725389813!5m2!1sen!2sae"
          width="100%"
          height="180"
          style={{ border: 0,borderRadius:"10px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

            <p> <span style={{fontWeight:"600"}}>Address:</span> Al-Jazeera Street, Post Box No:12507 Near Badariya Signal, Bin Mahmoud, Doha, Qatar.</p>
            <p><span style={{fontWeight:"600"}}>Mobile:</span> +974 55995013 / +974 55741739<br/><span style={{fontWeight:"600"}}>Telephone:</span> +974 44438 408Fax: +974 44438 408<br/><span style={{fontWeight:"600"}}>Email:</span> info@speedwaycargo.net</p>
            </div>

          </Col>
       
        </Row>
      </div> */}

     
      </div>
      
    </>
  )
}

export default Branches
