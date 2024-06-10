import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
function Map() {
 
  return (
    <Container>
    <div className='map-head'>
      <h3>Flexibility, Reliability and Scale <br/><span className="bold-text">The answer is Speedway Cargo</span></h3>
      <Row>
        <Col xs={12} md={6}>
     <h6>SAFE & AFFORDABLE CARGO</h6>
     <h4>ABOUT CARGO SHIPMENT</h4>
     <p >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nasce culus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoq atibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

     <div className='arrow-div'>
<p style={{color:"white",marginLeft:"10px",marginTop:"5px",fontSize:"15px"}}> More about us</p>
<ArrowCircleRightIcon style={{color:"white",marginLeft:"22px",fontSize:"30px"}}/>

     </div>
        </Col>

        <Col xs={12} md={6} className="image-container">
      <img src='/Images/shipment.png' alt="Shipment" className="slide-from-top" />
    </Col>
        </Row>

    </div>
    </Container>
  )
}

export default Map
