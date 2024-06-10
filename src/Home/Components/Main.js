import React, { useState, useEffect } from 'react';
import '../Components/Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import {  Dropdown } from "react-bootstrap";
// import { Tooltip } from 'react-tooltip'
// import Tooltip from '@material-ui/core/Tooltip';
import { styled } from '@mui/material/styles';
import Carousel from './Carousel';
import Home from './Home';
import Map from './Map';
import Solutions from './Solutions';
import Cards from './Cards';
import Footer from './Footer';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import Topbar from './Topbar';

function Main() {

  const news = [
    "  Speedway Cargo does not require OTP or credentials for address confirmation for your delivery Our Customer Support team is reachable only from our website or app.",
    "    Login with your phone number and raise your support request with us",
    "  SERVICE UPDATES:",
    "  Please do not transfer money to payment links that are not shared from Speedway Cargo's official accounts"
  ];
  // const [isOpen, setIsOpen] = useState(false);
  // const [showMenuToggle, setShowMenuToggle] = useState(false);

 

  const navigate=useNavigate()

  //  const handleLogin=()=>{
  //     navigate('/login')
  //  }

  //  const handleAbout=()=>{
  //   navigate('/about')
  //  }

  // const toggleNav = () => {
  //   setIsOpen(!isOpen);
  // };

  useEffect(()=>{
    const access=localStorage.getItem('accessToken');
    const refresh=localStorage.getItem('refreshToken');
    console.log(access, 'abd----------',refresh);
  })

  // useEffect(() => {
  //   const handleResize = () => {
  //     setShowMenuToggle(window.innerWidth <= 950);
   
  //   };

  //   handleResize(); // Call it initially
  //   window.addEventListener('resize', handleResize);
    
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);




  
  return (
    
    <div className='main-div'>
      <Topbar/>
<div className='carousel-div'>
<Carousel news={news}/>
    </div>
    <Home/>
    <Map/>
    <Solutions/>
    <Cards/>
    <Footer/>
    </div>
  );
}

export default Main;
