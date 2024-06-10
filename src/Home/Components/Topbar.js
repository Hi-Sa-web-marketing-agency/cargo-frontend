import React, { useState, useEffect } from 'react';
import '../Components/Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
// import { Tooltip } from 'react-tooltip'
// import Tooltip from '@material-ui/core/Tooltip';
import { styled } from '@mui/material/styles';

import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

function Topbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showMenuToggle, setShowMenuToggle] = useState(false);

    
  const navigate=useNavigate()

  const handleLogin=()=>{
     navigate('/login')
  }

  const handleAbout=()=>{
   navigate('/about')
  }

  const handleService=()=>{
    navigate('/service')
  }
  const handleBranches=()=>{
    navigate('/branches')
  }

  const handleContact=()=>{
    navigate('/contact')
  }

 const toggleNav = () => {
   setIsOpen(!isOpen);
 };

 useEffect(() => {
  const handleResize = () => {
      setShowMenuToggle(window.innerWidth <= 1150);
  };

  handleResize(); // Call it initially
  window.addEventListener('resize', handleResize);

  return () => {
      window.removeEventListener('resize', handleResize);
  };
}, []);

  // const LightTooltip = styled(({ className, ...props }) => (
  //   <Tooltip {...props} classes={{ popper: className }} />
  // ))(({ theme }) => ({
  //   [`& .${tooltipClasses.tooltip}`]: {
  //     backgroundColor: theme.palette.common.white,
  //     color: 'rgba(0, 0, 0, 0.87)',
  //     boxShadow: theme.shadows[1],
  //     fontSize: 15,
  //     position: 'relative', // Set position to relative to contain the arrow
  //   },
  //   [`& .${tooltipClasses.arrow}`]: {
  //     color: theme.palette.common.white,
  //     position: 'absolute',
  //     left: '-4px', 
  //   },
  // }));

  return (
    <div className='Top' >
              <div className='nav-main'>
    <div className='navbar' >
      <img src='/Images/Logo.png' />
      {!isOpen && (

<ul className={`nav-items`}>  
<p  > Home </p>
<p onClick={handleAbout} > About </p>


    {/* <Tooltip
        id="my-tooltip-inline"
        style={{ backgroundColor: "white", color: "rgb(113, 121, 126)" }}
      
      />

<LightTooltip title={<div style={{ padding: '7px' }}>
        <div className='tool-items' >
        <img src="/Images/express.svg" alt="Express Logo"  />
        <span style={{ marginLeft: '15px' }}>Express Parcel</span>
        </div>
       
        <br/>
        <div className='tool-items' >
        <img src="/Images/warehousing.svg" alt="Express Logo"  />
          <span style={{ marginLeft: '15px' }}>Warehousing</span>
        </div>

        <br/>
        <div className='tool-items' >
        <img src="/Images/part.svg" alt="Express Logo"  />
          <span style={{ marginLeft: '15px' }}>Part Truckload</span>
        </div>

        <br/>
        <div className='tool-items' >
        <img src="/Images/full.svg" alt="Express Logo"  />
          <span style={{ marginLeft: '15px' }}>Full Truckload</span>
        </div>

        <br/>
        <div className='tool-items' >
        <img src="/Images/cross-border.svg" alt="Express Logo"  />
          <span style={{ marginLeft: '15px' }}>Cross Border</span>
        </div>

        
        <br/>
        <div className='tool-items' >
        <img src="/Images/intelligence.svg" alt="Express Logo"  />
          <span style={{ marginLeft: '15px' }}>Data Intelligence</span>
        </div>
    
    </div>} arrow> */}

        <p onClick={handleService}>Services</p>
    {/* </LightTooltip> */}

    <p onClick={handleBranches}>Branches</p>
        <p>Track</p>
        <p onClick={handleContact}>Contact</p>
       <p><Button style={{backgroundColor:"#101218",color:"white"}} onClick={handleLogin}>Login</Button>
</p>
      </ul>
     )}
     {showMenuToggle && (
         <div className='menu-toggle' onClick={toggleNav}>
             <MenuIcon style={{ color: 'black', marginLeft: '-80px', fontSize: '2rem' }} />
         </div>
     )}
 </div>
 {isOpen && (
  <div className='nav-items-bottom'>
    <p onClick={handleService}> <img src='/Images/cross-border.svg'/> Services </p>
    <p onClick={handleAbout}><img  src='/Images/cross-border.svg'/> About </p>
    <p onClick={handleBranches}>Branches</p>
    <p><img src='/Images/cross-border.svg'/> Track </p>
    <p onClick={handleContact}><img src='/Images/cross-border.svg'/> Contact </p>
    <p><Button >Login</Button></p>
    <div className='close-toggle' onClick={toggleNav}>
      <CloseIcon style={{ color: 'black', fontSize: '1.5rem' }} />
    </div>
  </div>
)}

    </div>
      
    </div>
  )
}

export default Topbar
