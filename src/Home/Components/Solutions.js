import React from 'react'
import '../Components/Solutions.css';
import { Col, Row } from 'react-bootstrap';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PublicIcon from '@mui/icons-material/Public';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import DomainAddIcon from '@mui/icons-material/DomainAdd';

function Solutions() {
  return (
    
    <div className='solution-main'>
        <h3 className='text2' >Speedway Cargo’s<span className="bold-text2" > suite of solutions for</span> </h3>
        <div className='solution-div'>
        <Row className="solution-items">
        <Col xs={12} md={4}>
        <PublicIcon style={{color:'#C0C0C0',fontSize:"55px"}}/>
        <br/>
        <br/>

          <h4>D2C Brands</h4>
          <br/>
          <p>We provide an integrated logistics<br/> solution built on Express Parcel,<br/> Cross Border, Warehousing, Freight <br/> and Software value added services <br/> that helps brands deliver faster and <br/> provide a superior experience</p>
          <br/>
          <p className='know-p' style={{color:"rgba(239, 68, 68",cursor:"pointer"}}>Know more  <ArrowForwardIcon style={{ fontSize: '16px', color: "rgba(239, 68, 68" }}/></p>
        </Col>


        <Col xs={12} md={4}>      
        <PersonRemoveIcon style={{color:'#C0C0C0',fontSize:"55px"}}/>
          <br/>
          <br/>

          <h4>Personal Courier</h4>
          <br/>
          <p>India’s only online courier solution<br/>for all your personal shipping needs.<br/>Send from your location to <br/> anywhere in the country and<br/> internationally with free doorstep <br/> pickup and real time tracking <br/> through our app</p>
          <br/>
          <p className='know-p' style={{color:"rgba(239, 68, 68",cursor:"pointer"}}>Know more  <ArrowForwardIcon style={{ fontSize: '16px', color: "rgba(239, 68, 68" }}/></p>
            </Col>


        <Col xs={12} md={4}>      
        <DomainAddIcon style={{color:'#C0C0C0',fontSize:"55px"}}/>
            <br/>
            <br/>

          <h4>B2B Enterprices</h4>
          <br/>
          <p>We provide customised solutions to<br/> serve your factory to retailer supply<br/> chain end-to-end using our<br/> integrated warehousing, technology<br/> capabilities and logistics network<br/> that improve reliability and reduce<br/> cost</p>
          <br/>
          <p className='know-p' >Know more  <ArrowForwardIcon style={{ fontSize: '16px', color: 'rgba(239, 68, 68, var(--tw-text-opacity)' }}/></p>
        </Col>

      </Row>



      <Row className="r-solution-items">
        <Col xs={12} md={4}>
        <PublicIcon style={{color:'#C0C0C0',fontSize:"55px"}}/>
        <br/>
        <br/>

          <h4>D2C Brands</h4>
          <br/>
          <p>We provide an integrated logistics solution built on Express Parcel, Cross Border, Warehousing, Freight  and Software value added services  that helps brands deliver faster and  provide a superior experience</p>
          <br/>
          <p >Know more  <ArrowForwardIcon style={{ fontSize: '16px', color: "rgba(239, 68, 68" }}/></p>
        </Col>


        <Col xs={12} md={4}>      
        <PersonRemoveIcon style={{color:'#C0C0C0',fontSize:"55px"}}/>
          <br/>
          <br/>

          <h4>Personal Courier</h4>
          <br/>
          <p>India’s only online courier solutionfor all your personal shipping needs.Send from your location to  anywhere in the country and internationally with free doorstep  pickup and real time tracking  through our app</p>
          <br/>
          <p >Know more  <ArrowForwardIcon style={{ fontSize: '16px', color: "rgba(239, 68, 68" }}/></p>
            </Col>


        <Col xs={12} md={4}>      
        <DomainAddIcon style={{color:'#C0C0C0',fontSize:"55px"}}/>
            <br/>
            <br/>

          <h4>B2B Enterprices</h4>
          <br/>
          <p>We provide customised solutions to serve your factory to retailer supply chain end-to-end using our integrated warehousing, technology capabilities and logistics network that improve reliability and reduce cost</p>
          <br/>
          <p >Know more  <ArrowForwardIcon style={{ fontSize: '16px', color: 'rgba(239, 68, 68, var(--tw-text-opacity)' }}/></p>
        </Col>

      </Row>
        </div>
      
    </div>
  )
}

export default Solutions
