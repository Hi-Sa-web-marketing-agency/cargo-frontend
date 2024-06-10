import React from 'react'
import '../Pages/Contact.css'
import { Link } from 'react-router-dom'
import Topbar from '../Components/Topbar'
import { Col, Row } from 'react-bootstrap'
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import FaxIcon from '@mui/icons-material/Fax';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import GarageIcon from '@mui/icons-material/Garage';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import Footer from '../Components/Footer'
import SailingIcon from '@mui/icons-material/Sailing';
function Contact() {
  
  return (
    <>
    <Topbar/>
     <div className='Contact-main'>
      <div className='contact-banner-container'>
    {/* <img className='Contact-banner' src='/Images/Contact-banner.jpg' alt='Contactes Banner'/> */}
  </div>
        <div className='contact-text'>
        <h2>Contact Us</h2>
        <p><Link style={{textDecoration:"none",fontSize:"18px",color:"white"}}>Home  </Link> / Branches</p>
      </div>

        <div className='contact2'>
            <h4>
            GET IN TOUCH
            </h4>
            <Row>
            <Col xs={12} md={12} lg={6}>
            <div className='details'>

                <h4>HEAD OFFICE</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy</p>
                <Row>
                    <Col xs={12} md={6}>
                    <div className='sub-details' >
                      <div className='flex-item' style={{display:"flex"}}>
                      <OtherHousesIcon style={{paddingBottom:"15px",fontSize:"40px",color:"white"}}/>
                    <h5> Address  </h5>
                      </div>
                  
                    <br/>
                    <p >951 Country St. Middle <br/>
                        River, MD 21220</p>
                
                    </div>

                    </Col>  
                    <Col xs={12} md={6}>
                    <div className='sub-details' >
                    <div className='flex-item' style={{display:"flex"}}>
                      <PhoneInTalkIcon style={{paddingBottom:"15px",fontSize:"40px",color:"white"}}/>
                    <h5> Phone  </h5>
                      </div>                    <br/>
                      <p>123-456-789 <br/>
                      1800-123-456</p>
                 
                    </div>

                    </Col>
                 
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                    <div className='sub-details' >
                      <div className='flex-item' style={{display:"flex"}}>
                      <EmailIcon style={{paddingBottom:"15px",fontSize:"40px",color:"white"}}/>
                    <h5> Email  </h5>
                      </div>
                  
                    <br/>
                    <p >info@example.com</p>
                
                    </div>

                    </Col>  
                    <Col xs={12} md={6}>
                    <div className='sub-details' >
                    <div className='flex-item' style={{display:"flex"}}>
                      <FaxIcon style={{paddingBottom:"15px",fontSize:"40px",color:"white"}}/>
                    <h5> Fax  </h5>
                      </div>                    <br/>
                      <p>123-456-789 </p>
                 
                    </div>

                    </Col>
                 
                </Row>
                </div>

                </Col>
                
                <Col xs={12} md={12} lg={6}>
                  <div className='form-div'>

                  <Box 
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '90%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="FullName" variant="outlined" 

       />
      <TextField id="outlined-basic" label="Email" variant="outlined" 


/>
         
<TextField
          id="outlined-number"
          label="Phone"
          type="number"
          // InputLabelProps={{
          //   shrink: true,
          // }}
          style={{width:"44%"}}
        />

<TextField id="outlined-basic" label="Subject" variant="outlined"  style={{width:"44%"}}
            />
   
          <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={7}
        />
         <Button style={{color:"white",backgroundColor:"rgba(242, 91, 20, 1)",height:"50px"}} variant="contained">Submit</Button>
    </Box>

                  </div>
         

                </Col>
            </Row>
          

        </div>
        <div className='contact3'>
        <Row>
        <Col xs={12} md={6} lg={3}>
          <div className='icons'>
            <WarehouseIcon style={{fontSize:"80px", color:"#3d424a",zIndex:"1",position:"relative"}}/>

            </div>
          </Col>
          <Col xs={12} md={6}lg={3}>
            <div className='icons'>
            <LocalShippingIcon style={{fontSize:"80px", color:"#3d424a",zIndex:"1",position:"relative"}}/>

            </div>

          </Col>
          <Col xs={12} md={6} lg={3}>
          <div className='icons'>
            <AirplanemodeActiveIcon style={{fontSize:"80px", color:"#3d424a",zIndex:"1",position:"relative"}}/>

            </div>
          </Col>
         
          <Col xs={12} md={6} lg={3}>
          <div className='icons'>
            <SailingIcon style={{fontSize:"80px", color:"#3d424a",zIndex:"1",position:"relative"}}/>

            </div>
          </Col>
        </Row>
                </div>
    </div>
      <Footer/>
    </>
  )
}

export default Contact
