import React from 'react'
import '../Pages/Service.css'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import DoneIcon from '@mui/icons-material/Done';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Topbar from '../Components/Topbar';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Footer from '../Components/Footer';



function Services() {
  return (
    <>
    <Topbar/>
      <div className='service-main'>
        <div className='service-banner-container'>
      <img className='service-banner' src='/Images/service-banner.jpeg' alt='services Banner'/>
    </div>
          <div className='service-text'>
          <h2>Services</h2>
          <p><Link style={{textDecoration:"none",fontSize:"18px",color:"white"}}>Home  </Link> / Services</p>
        </div>
      
      <div className='service2'>
        {/* <h5>// OUR SERVICES //</h5> */}
        <h3>Explore Our Services</h3>
        <Row>
            <Col xs={12} md={4}>
                <div className='service-list'>
                    <p>Door To Door</p>
                    <p>Airport To Airport</p>
                    <p>Seaport To seaport</p>
                    <p>Packing adn Shipping</p>
                    <p>Fraight Forward</p>
                    <p>Business To Business</p>

                
                </div>

            </Col>

            <Col xs={12} md={4}>
                <img style={{height:'400px',marginTop:'50px'}} src='/Images/service2.webp'/>

            </Col>

            <Col xs={12} md={4}>
                <h4>15 Years Of Experience<br/> In <span className='span' style={{fontSize:"40px"}}>Cargo</span> Servicing</h4>
                <br/>
                <p style={{textAlign:"start",marginLeft:"20px"}}>Tempor erat elitr rebum at clita. Diam dolor <br/>diam ipsum sit. Aliqu diam amet diam et eos.<br/> Clita erat ipsum et lorem et sit, sed stet <br/>lorem sit clita duo justo magna dolore erat amet</p>
                <br/>
                <p style={{textAlign:"start",marginLeft:"20px"}}><DoneIcon style={{color:"green",fontSize:"23px",fontWeight:"800"}}/>   Quality Servicing</p>
                <p style={{textAlign:"start",marginLeft:"20px"}}><DoneIcon style={{color:"green",fontSize:"23px",fontWeight:"800"}}/>   Expert Workers</p>
                <p style={{textAlign:"start",marginLeft:"20px"}}><DoneIcon style={{color:"green",fontSize:"23px",fontWeight:"800"}}/>   Modern Equipment</p>
                <div className='arrow-div' style={{marginLeft:"40px",marginTop:"5px"}}>
                <p style={{color:"white",marginLeft:"20px",marginTop:"5px",fontSize:"11px"}}>Our Services</p>
                <ArrowCircleRightIcon style={{color:"white",marginLeft:"45px",fontSize:"30px"}}/>

                    </div>

            </Col>

        </Row>
      </div>
      <div className='service3'>
        <Row>
            <Col xs={12} md={4}>
                <div className='service-cards'>
                    <h5>Door To Door</h5>
                    <p>Our door to door has a safe, reliable, and more affordable way to move. It’s easy and convenient. Save yourself the stress and hassle of renting, loading and driving a rental truck. Cut your labor time – only load and unload once. Move and store on your schedule.
                    Tempor erat elitr rebum at clita. Diam dolor
                    diam ipsum sit. Aliqu diam amet diam et eos.
                    Clita erat ipsum et lorem et sit, sed stet
                    lorem sit clita duo justo magna dolore erat amet
                    </p>
                </div>
            </Col>
            <Col xs={12} md={4}>
            <div className='service-cards'>
            <h5>Airport To Airport</h5>
                    <p>Speedway Cargo is ready to handle time-sensitive air cargo with 24 hour a day. Whether shipping seafood, produce, flowers, pharmaceuticals or any other commodity that requires temporary cold storage, Speedway is equipped to provide on-airport services to ensure that the product is temperature controlled immediately upon unloading or prior to the loading of the aircraft.
                    Tempor erat elitr rebum at clita. Diam dolor
                    diam ipsum sit. Aliqu diam amet diam et eos.
                    Clita erat ipsum et lorem et sit, sed stet
                    lorem sit clita duo justo magna dolore erat amet
                    </p>
                    </div>
            </Col>
            <Col xs={12} md={4}>
            <div className='service-cards'>
            <h5>Seaport To Seaport</h5>
                    <p>With our industry experience, we have been able to offer customized, safe and cost effective services to our clients spread across the world.
                    Tempor erat elitr rebum at clita. Diam dolor
                    diam ipsum sit. Aliqu diam amet diam et eos.
                    Clita erat ipsum et lorem et sit, sed stet
                    lorem sit clita duo justo magna dolore erat amet
                    </p>
                    </div>
            </Col>
        </Row>

        <Row>
            <Col xs={12} md={4}>
                <div className='service-cards'>
                    <h5>Packing And Shipping</h5>
                    <p>Speedway’s Packers & Mover offers transportation services loading & unloading services in Qatar, reidential relocation, corporate relocation specialist, We are a rank one packing and moving company having head office in Doha, Qatar. We are specialized in household & corporate goods transportation with facilities for warehousing and storage
                    Tempor erat elitr rebum at clita. Diam dolor
                    diam ipsum sit. Aliqu diam amet diam et eos.
                    Clita erat ipsum et lorem et sit, sed stet
                    lorem sit clita duo justo magna dolore erat amet
                    </p>
                </div>
            </Col>
            <Col xs={12} md={4}>
            <div className='service-cards'>
            <h5>Fraight Forward</h5>
                    <p>Stop lugging your luggage around. Instead, send it ahead with Speedway.
                    Tempor erat elitr rebum at clita. Diam dolor
                    diam ipsum sit. Aliqu diam amet diam et eos.
                    Clita erat ipsum et lorem et sit, sed stet
                    lorem sit clita duo justo magna dolore erat amet
                    </p>
                    </div>
            </Col>
            <Col xs={12} md={4}>
            <div className='service-cards'>
            <h5>Business To Business</h5>
                    <p>With our industry experience, we have been able to offer customized, safe and cost effective services to our clients spread across the world.
                    Tempor erat elitr rebum at clita. Diam dolor
                    diam ipsum sit. Aliqu diam amet diam et eos.
                    Clita erat ipsum et lorem et sit, sed stet
                    lorem sit clita duo justo magna dolore erat amet
                    </p>
                    </div>
            </Col>
        </Row>

      </div>
      <div className='experience-div'>
    <h4>Experience the <span className="bold-text4">operating system </span>for commerce in India</h4>

<p >Sign up now to start shipping with Speedway Cargo</p> 
<div style={{ display: 'flex',marginTop:"60px",fontSize:"small",cursor:"pointer",justifyContent:"center" }}>
  <div className='personal'>
<p style={{color:"#1F2937",padding:"8px"}}>Personal courier <ArrowForwardIcon style={{fontSize:"small"}}/></p>
  </div> 
  &nbsp;
  &nbsp;

  <div className='business'>
  <p style={{color:"#1F2937",padding:"8px",fontSize:"small",cursor:"pointer"}}>Business shipments <ArrowForwardIcon style={{fontSize:"small"}} /></p>
  </div>
</div>
  </div>
    </div>
    <Footer/>
    </>
  )
}

export default Services
