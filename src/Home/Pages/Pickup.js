import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Topbar from '../Components/Topbar'
import '../Pages/Pickup.css'
import { Button, Col, Row } from 'react-bootstrap'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FlightIcon from '@mui/icons-material/Flight';
import SailingIcon from '@mui/icons-material/Sailing';
import Footer from 'Home/Components/Footer'
import axios from 'axios';
import dayjs from 'dayjs';
import toast from 'react-hot-toast'
import Swal from 'sweetalert2'

function Pickup() {

    // const [phoneNumber, setPhoneNumber] = useState('');
    const [valid, setValid] = useState(true);
    const [mode, setMode] = useState(true);

    const [formData, setFormData] = useState(
      {fname:null,place:null,phone:null,date:null,time:null,selectedmode:null})

  
    const handleChange = (value) => {
      setFormData.phone(value);
      setValid(validatePhoneNumber(value));
    };
  
    const validatePhoneNumber = (phoneNumber) => {
      const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
  
      return phoneNumberPattern.test(phoneNumber);
    };

  

      const handleSubmit = (event) => {
        console.log('inside function============');
        event.preventDefault();
        console.log('calling api----------');
        console.log('Form data:', formData);

        axios

            .post('https://cargo-backend-2log.onrender.com/api/enquiries_post/', {
           name:formData.fname,
           place:formData.place,
           pickup_date:formData.date,
           pickup_time:formData.time,
           phone:formData.phone,
           mode:formData.selectedmode,

            },
            console.log(formData.fname),
            console.log(formData.date)

          )
            .then((response) => {
                console.log('enquiry created successfully:', response.data);
                if (response.data.message==='Enquiry created successfully') {
                  setFormData({
                    fname: '',
                    place: '',
                    phone: '',
                    date: '',
                    time: '',
                    selectedmode: ''
                });
                  Swal.fire({
                    title: "Enquiry Send",
                    text: "your enquiry saved successfully",
                    icon: "success"
                  });
                   
                  console.log(response.data,'wertyuirccccccccccccccccccccccc');
               
                } else {
                    console.error('enquiry creation failed:', response.data.error);
                    toast.error('Enquiry Failed ')

                }
            })
            .catch((error) => {
                console.error('Error creating car:', error);
            });
    };

    const handleFormChange = (e) => {
      // Check if e exists and has a target property
      if (e && e.target) {
        const { name, value } = e.target;
        
        // Update form data with the new value
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: value
        }));
      } else {
        console.error("Invalid event object:", e);
      }
    };
    
    const handlePhoneInputChange = (name, value) => {
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
      }));
      setValid(validatePhoneNumber(value));
    };
    

   
    

   
    

    const handleModeInputChange = (e) => {
      // Call handleFormChange function
      handleFormChange(e);
      // Call handleModeChange with event object
      handleModeChange(e);
    };
    


    const handleModeChange = (event) => {
      // Check if the event object and its target are defined
      if (event && event.target && event.target.value) {
        // Access the value property of the target safely
        const modeValue = event.target.value;
        // Update the mode state
        setFormData(prevFormData => ({
          ...prevFormData,
          selectedmode: modeValue
        }));
      } else {
        console.error("Invalid event or target:", event);
      }
    };
    
    
  return (
    <>
       <Topbar/>
     <div className='Pickup-main'>
      <div className='Pickup-banner-container'>
  </div>
        <div className='Pickup-text'>
        <h2>Pickup</h2>
        <p><Link style={{textDecoration:"none",fontSize:"18px",color:"white"}}>Home  </Link> / Branches</p>
      </div>
      <div className='pickup2'>
       
        <Row>
            <Col xs={12} md={12} lg={6}>

                <div className='pickup2-img'>
                    <h6 style={{color:"gray"}}>expolore our service !</h6>
                    <h4>R E Q U E S T  Y O U R    P I C K U P</h4>
                    <br/>
                    <p>We provide a comprehensive range of transportation service from Air, Sea and road. Our mission is to exceed customer expectations in the transfer of their goods around the world. We deliver value to our customers by providing the most reliable efficient solution in the cargo services.</p>
                <img src='/Images/pickup3.jpg'/>

                </div>

            </Col>
            <Col xs={12} md={12} lg={6}>
            <div className='pickup-form'>
            <Box
            
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& > :not(style)': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField  label="name" variant="outlined"
        id='name'
        value={formData.fname}
        name='fname'
        onChange={handleFormChange}
      />
      <TextField label="place" variant="outlined"
       id='place'
       value={formData.place}
       name='place'
       onChange={handleFormChange}
      /> 
{/* <LocalizationProvider dateAdapter={AdapterDayjs}>
  <DemoContainer components={['DateField']}>
    <DateField
      label="pickup date"
      style={{ width: "100%" }}
      id='pickup_date'
      value={formData.date}
      name='date'
      type='date'
      onChange={(newValue) => handleDateField('date', newValue)}
    />
  </DemoContainer>

</LocalizationProvider> */}


<TextField  variant="outlined" 
    // label="pickup date"
    dateAdapter={AdapterDayjs}
    style={{ width: "100%" }}
    id='pickup_date'
    value={formData.date}
    name='date'
    type='date'
    onChange={handleFormChange}

    />
    <TextField label="Time" variant="outlined" 
     id='pickup_time'
     value={formData.time}
     name='time'
     onChange={handleFormChange}
    />

    <label >
    <PhoneInput
  country={'in'}
  value={formData.phone}
  id='phone'
  name='phone'
  onChange={(newValue) => handlePhoneInputChange('phone', newValue)} 
  inputStyle={{ width: '100%', height: "50px" }}
  inputProps={{
    required: true,
  }}
/>

</label>
      {!valid && (
        <p style={{size:"small"}}>Please enter a valid phone number!!.</p>
      )}
 <FormControl fullWidth>
<InputLabel id="demo-simple-select-label">Mode</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id='mode'
    value={formData.selectedmode}
    name='selectedmode'
    onChange={handleModeInputChange}
    label="mode"
    
  >
  <MenuItem value="flight"><FlightIcon/> Flight</MenuItem>
  <MenuItem value="ship"><SailingIcon/> Ship</MenuItem>
  </Select>
  </FormControl>
  <Button type='submit' >submit</Button>

    </Box>



            </div>
      

            </Col>
        </Row>

      </div>
      
      </div>
     <Footer/>
    </>
  )
}

export default Pickup
