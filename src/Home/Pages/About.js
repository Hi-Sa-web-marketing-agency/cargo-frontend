import React from 'react'
import Topbar from '../Components/Topbar'
import '../Pages/About.css'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';
import Footer from '../Components/Footer'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from './Typography';


function About() {

    const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
        position: 'relative',
        display: 'block',
        padding: 0,
        borderRadius: 0,
        height: '37vh',
        [theme.breakpoints.down('md')]: {
          width: '100% !important',
          height: 100,
        },
        '&:hover': {
          zIndex: 1,
        },
        '&:hover .imageBackdrop': {
          opacity: 0.15,
          padding:"5%",
        },
        '&:hover .imageMarked': {
          opacity: 0,
        },
        '&:hover .imageTitle': {
          border: '4px solid currentColor',
        },
        '& .imageTitle': {
          position: 'relative',
          padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
          right:"5%"
        },
        '& .imageMarked': {
          height: 3,
          width: 18,
          background: theme.palette.common.white,
          position: 'absolute',
          bottom: -2,
          left: 'calc(50% - 9px)',
          transition: theme.transitions.create('opacity'),
        },
      }));
      
      const images = [
        {
          url: '/Images/air.jpg',
          width: '90%',
          // borderRadius:"10px"
        },

      
      ];

      const ImageBackdrop = styled('div')(({ theme }) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: '#000',
        opacity: 0.5,
        transition: theme.transitions.create('opacity'),
      }));
  return (
    <>
    <Topbar/>
    <div className='About-main'>
      <div className='about-banner-container'>
    <img className='about-banner' src='/Images/about-banner.webp' alt='About Banner'/>
  </div>
        <div className='about-text'>
        <h2>About Us</h2>
        <p><Link style={{textDecoration:"none",fontSize:"18px",color:"white"}}>Home  </Link> / About</p>
      </div>
      <div className='about-2'>
        <Row>
            <Col xs={12} md={6}> 
            <div className='text-part'>
            <p>About</p>
            <br/>
            <br/>

            <h2>How to Our <span className='span'>Activities</span>  Solution of <br/>Business in the world</h2>
            <br/>

            <h4>If you are going to use a passage of Lorem Ipsum,<br/> you need to be sure there isn&apos;t anything embarrassing<br/> hidden in the middle of text.</h4>
<br/>
<h3>Web page editors now use Lorem Ipsum as their default<br/> model text, and a search for &apos;lorem ipsum&apos; will uncover <br/> many web sites still in their over infancy. <br/> Various versions have evolved over the years, sometimes by accident,<br/> sometimes on purpose injected humour and the liking of all.</h3>

            </div>
            <br/>
            <div className='arrow-div' style={{marginLeft:"40px",marginTop:"5px"}}>
<p style={{color:"white",marginLeft:"10px",marginTop:"5px"}}>Our Services</p>
<ArrowCircleRightIcon style={{color:"white",marginLeft:"20px",fontSize:"26px",marginTop:"2px"}}/>

     </div>

            </Col>

            <Col xs={12} md={6}> 
            <div className='image-part'>
            <img src='/Images/about-2.jpg'/>
            <div className='image-part2' style={{display:"flex"}}>
                <img src='/Images/about-2.1.jpg'/>
                <img src='/Images/about-2.2.jpg'/>


            </div>

            </div>

            </Col>
        </Row>

      </div>

      <div className='about3'>
        <p style={{color:"rgba(242, 91, 20, 1)"}}>24/7 Support Team</p>
        <h4>Quickly Support and Help of our Cargo service for you</h4>
        <img src='/Images/Logo.png'/>
        <div className='about3-para'>
        <p >
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text
  ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
  only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making 
  it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
  consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 
  &quot;de Finibus Bonorum et Malorum&quot;  by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
  &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.
</p>
        </div>



      </div>
      <div className='about4'>
        <Row>
            <Col xs={12} md={6}>
            <div className='about4-textpart'>
       <p style={{color:"rgba(242, 91, 20, 1)"}}>OUR FEATURES</p>

        <h4>We Are Trusted Cargo <br/>Company Since 1990</h4>
        <br/>
        <br/>
        <br/>
         
        <p style={{fontWeight:"bold",marginLeft:"70px"}}>Worldwide Service</p>
        <div className="about4-container">
        <LanguageOutlinedIcon style={{fontSize:"50px",color:"rgba(242, 91, 20, 1)"}}/>   
        <p>Diam dolor ipsum sit amet eos erat ipsum lorem sed<br /> stet lorem sit clita duo justo magna erat amet</p>
        </div>
        <p style={{fontWeight:"bold",marginLeft:"70px"}}>OnTime Delivery</p>

        <div className="about4-container">
        <LocalShippingOutlinedIcon style={{fontSize:"50px",color:"rgba(242, 91, 20, 1)"}}/>   
        <p>Diam dolor ipsum sit amet eos erat ipsum lorem sed<br /> stet lorem sit clita duo justo magna erat amet</p>
        </div>
        <p style={{fontWeight:"bold",marginLeft:"70px"}}>24/7 Telephone Support</p>

        <div className="about4-container">
        <PermPhoneMsgOutlinedIcon style={{fontSize:"50px",color:"rgba(242, 91, 20, 1)"}}/>   
        <p>Diam dolor ipsum sit amet eos erat ipsum lorem sed<br /> stet lorem sit clita duo justo magna erat amet</p>
        </div>
       </div>
            </Col>
            <Col xs={12} md={6}>
                <div className='about4-imgpart'>
                <Typography variant="h4" marked="center" align="center" component="h2" style={{fontSize:"25px",marginTop:"-10px",marginLeft:"10px", "@media (min-width: 768px)": {
      marginLeft: "0px", // Adjust the left margin for h6 on screens with a minimum width of 768px
    },}}
                
        >
                    WE DELIVER YOUR SHIPMENTS ALL OVER<br/> THE WORLD!
                    </Typography>
                <Box sx={{ mt: "150px", display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
              padding:image.padding
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
                // borderRadius:"3%"
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
            </Box>
          </ImageIconButton>
        ))}
      </Box>

                </div>
            </Col>
        </Row>
     
       <div></div>

      </div>

 
    </div>
    <Footer/>

    </>
  )
}

export default About
