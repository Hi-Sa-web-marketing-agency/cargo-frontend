import React from 'react'
import { Col, Row } from 'react-bootstrap'
import '../Components/Cards.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';



function Cards() {
  return (
    <div>

    
    <div className='cards-main'>
        <div className='cards-div'>
            <Row>
                <Col xs={12} md={3}>
                    <h3><span className="bold-text3">Services</span> that power<br/>
                        our solutions<br/>
                        ecosystem</h3>
                </Col>


                <Col xs={12} md={3} className='service-link'>
                <Link >
               <ImageListItem >
              
                        <img src="/Images/D2D.jpg"         
                   loading="lazy"
                   style={{ width: '100%', height: 'auto', borderRadius: '6px',marginLeft:"4px" }}          />
                 <ImageListItemBar
                 style={{ width: '100%' ,marginLeft:"4px"}} 
                   title="Door to Door"
                   subtitle="door-to-door-service-1
                   DOOR TO DOOR"
                   actionIcon={
                     <IconButton
                       sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                       aria-label={`info about `}
                     >
                       <InfoIcon />
                     </IconButton>
                   }
                 />
               </ImageListItem>
       
                           </Link>
                </Col>

                <Col xs={12} md={3} className='service-link'>
                <Link >
               <ImageListItem >
              
                        <img src="/Images/a2a.jpg"         
                   loading="lazy"
                   style={{ width: '100%', height: 'auto', borderRadius: '6px',marginLeft:"4px" }}          />
                 <ImageListItemBar
                 style={{ width: '100%' ,marginLeft:"4px"}} 
                   title="Airport to Airport"
                   subtitle="Speedway Cargo is ready to handle time-sensitive air cargo with 24 hour a day."
                   actionIcon={
                     <IconButton
                       sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                       aria-label={`info about `}
                     >
                       <InfoIcon />
                     </IconButton>
                   }
                 />
               </ImageListItem>
       
                           </Link>
                </Col>

                <Col xs={12} md={3} className='service-link'>
                <Link >
               <ImageListItem >
              
                        <img src="/Images/s2s.webp"         
                   loading="lazy"
                   style={{ width: '100%', height: 'auto', borderRadius: '6px',marginLeft:"4px" }}          />
                 <ImageListItemBar
                 style={{ width: '100%' ,marginLeft:"4px"}} 
                   title="Seaport To Seaport"
                   subtitle="With our industry experience, we have been able to offer customized, safe and cost effective services"
                   actionIcon={
                     <IconButton
                       sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                       aria-label={`info about `}
                     >
                       <InfoIcon />
                     </IconButton>
                   }
                 />
               </ImageListItem>
       
                           </Link>

                </Col>
            </Row>

                    <br/>
            <Row>
                <Col xs={12} md={3} className='none'>
                    <h3><span className="bold-text4">Services</span> that power<br/>
                        our solutions<br/>
                        ecosystem</h3>
                </Col>


                <Col xs={12} md={3}className='service-link'>
                <Link >
               <ImageListItem >
              
                        <img src="/Images/packing.jpg"         
                   loading="lazy"
                   style={{ width: '100%', height: 'auto', borderRadius: '6px',marginLeft:"4px" }}          />
                 <ImageListItemBar
                 style={{ width: '100%' ,marginLeft:"4px"}} 
                   title="Packing and Shipping"
                   subtitle="Speedway’s Packers & Mover offers transportation services loading & unloading services"
                   actionIcon={
                     <IconButton
                       sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                       aria-label={`info about `}
                     >
                       <InfoIcon />
                     </IconButton>
                   }
                 />
               </ImageListItem>
       
                           </Link>
                </Col>

                <Col xs={12} md={3}className='service-link'>
                <Link >
               <ImageListItem >
              
                        <img src="/Images/forward.jpg"         
                   loading="lazy"
                   style={{ width: '100%', height: 'auto', borderRadius: '6px',marginLeft:"4px" }}          />
                 <ImageListItemBar
                 style={{ width: '100%' ,marginLeft:"4px"}} 
                   title="Fraight forward"
                   subtitle="Stop lugging your luggage around. Instead, send it ahead with Speedway."
                   actionIcon={
                     <IconButton
                       sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                       aria-label={`info about `}
                     >
                       <InfoIcon />
                     </IconButton>
                   }
                 />
               </ImageListItem>
       
                           </Link>
                </Col>

                {/* <Col xs={12} md={3} className='service-link'>
                <Link >
               <ImageListItem >
              
                        <img src="/Images/shipment.png"         
                   loading="lazy"
                   style={{ width: '100%', height: 'auto', borderRadius: '6px',marginLeft:"4px" }}          />
                 <ImageListItemBar
                 style={{ width: '100%' ,marginLeft:"4px"}} 
                   title="shipitem"
                   subtitle="vbnsfhsrdtfyukhjxgchfghj"
                   actionIcon={
                     <IconButton
                       sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                       aria-label={`info about `}
                     >
                       <InfoIcon />
                     </IconButton>
                   }
                 />
               </ImageListItem>
       
                           </Link>

                </Col> */}
            </Row>
        </div>
      
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
  )
}

export default Cards
