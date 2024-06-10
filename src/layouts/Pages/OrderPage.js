import { Container, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArgonBox from 'components/ArgonBox'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateReceiver, updateSender } from './SelectSlice';
import PhoneInput from 'react-phone-input-2';

function OrderPage() {
    const defaultTheme = createTheme();
    const dispatch = useDispatch();
    const { sender, receiver } = useSelector(state => state.selectedValue);
    const [valid, setValid] = useState(true);

    const navigate=useNavigate()

    const handleNext=()=>{
        navigate('/order2')
    }

    
    const handleSenderChange = (field, value) => {
      dispatch(updateSender({ [field]: value }));
  };

  const handleReceiverChange = (field, value) => {
      dispatch(updateReceiver({ [field]: value }));
  };


  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

    return phoneNumberPattern.test(phoneNumber);
  };

  const handlePhoneInputChange = (name, value) => {
    dispatch(updateSender({ [name]: value }));

    setValid(validatePhoneNumber(value));
  };

  const handlePhoneInputChangeR = (name, value) => {
    dispatch(updateReceiver({ [name]: value }));

    setValid(validatePhoneNumber(value));
  };

  useEffect(() => {
    // Set sender information
    dispatch(updateSender(sender));
    // Set receiver information
    dispatch(updateReceiver(receiver));
}, [dispatch]);
  return (
    <div>
            <DashboardLayout>
        <DashboardNavbar/>
        <ArgonBox py={3}>
    <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="xs" style={{backgroundColor:'white' ,borderRadius:"10px"}}>

    <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            // alignItems: 'center',
          }}
        >

<Typography component="h1" variant="h5" style={{textAlign:"center"}}>
            <br/>
            <br/>

       Order Management       </Typography>

          <Box component="form" noValidate  sx={{ mt: 3, }} >
    

            <Row>

            <Col xs={12} md={6}>
            <br/>
<br/>
                <h5>Sender Address</h5>
                <TextField
                autoComplete="given-name"
                id='sender-name'
                required
                fullWidth
                label="name"
                value={sender.name}
                onChange={(e) => handleSenderChange('name', e.target.value)}
                style={{ marginTop: "10px" }}
            />                            
                    <PhoneInput
                        autoComplete="given-name"
                        id='sender-mobile'
                        required
                        country={'in'}
                        fullWidth
                        label="mobile"
                        style={{marginTop:"10px"}}
                        value={sender.mobile}
                        // onChange={(e) => handleSenderChange('mobile', e.target.value)}
                        onChange={(newValue) => handlePhoneInputChange('mobile', newValue)} 
                        inputStyle={{ width: '100%', height: "50px" }}
                        inputProps={{
                            required: true,
                        }}
                    />   

                     <TextField
                        autoComplete="given-name"
                        id='sender-street'
                        required
                        fullWidth
                        label="street"
                        style={{marginTop:"10px"}}
                        value={sender.street}
                        onChange={(e) => handleSenderChange('street', e.target.value)}

                    />  

                     <TextField
                        autoComplete="given-name"
                        id='sender-postal'
                        required
                        fullWidth
                        label="postal"
                        style={{marginTop:"10px"}}
                        value={sender.postal}
                        onChange={(e) => handleSenderChange('postal', e.target.value)}
                    />    
                     <TextField
                        autoComplete="given-name"
                        id='sender-city'
                        required
                        fullWidth
                        label="city"
                        style={{marginTop:"10px"}}
                        value={sender.city}
                        onChange={(e) => handleSenderChange('city', e.target.value)}
                    />  
                       <TextField
                        autoComplete="given-name"
                        id='sender-state'
                        required
                        fullWidth
                        label="state"
                        style={{marginTop:"10px"}}
                        value={sender.state}
                        onChange={(e) => handleSenderChange('state', e.target.value)}
                    /> 
                       <TextField
                        autoComplete="given-name"
                        id='sender-country'
                        required
                        fullWidth
                        label="country"
                        style={{marginTop:"10px"}}
                        value={sender.country}
                        onChange={(e) => handleSenderChange('country', e.target.value)}
                    />   
                    
            </Col>
                 
          

            <Col xs={12} md={6}>
            <br/>
<br/>
                <h5>Reciever Address</h5>
                <TextField
                autoComplete="given-name"
                id='reciever-name'
                required
                fullWidth
                label="name"
                value={receiver.name}
                onChange={(e) => handleReceiverChange('name', e.target.value)}
                style={{ marginTop: "10px" }}
            />                            
                    <PhoneInput
                        autoComplete="given-name"
                        id='receiver-mobile'
                        required
                        country={'in'}
                        fullWidth
                        label="mobile"
                        style={{marginTop:"10px"}}
                        value={receiver.mobile}
                        // onChange={(e) => handleSenderChange('mobile', e.target.value)}
                        onChange={(newValue) => handlePhoneInputChangeR('mobile', newValue)} 
                        inputStyle={{ width: '100%', height: "50px" }}
                        inputProps={{
                            required: true,
                        }}
                    />    

                     <TextField
                        autoComplete="given-name"
                        id='reciever-street'
                        required
                        fullWidth
                        label="street"
                        style={{marginTop:"10px"}}
                        value={receiver.street}
                        onChange={(e) => handleReceiverChange('street', e.target.value)}

                    />  

                     <TextField
                        autoComplete="given-name"
                        id='reciever-postal'
                        required
                        fullWidth
                        label="postal"
                        style={{marginTop:"10px"}}
                        value={receiver.postal}
                        onChange={(e) => handleReceiverChange('postal', e.target.value)}
                    />    
                     <TextField
                        autoComplete="given-name"
                        id='reciever-city'
                        required
                        fullWidth
                        label="city"
                        style={{marginTop:"10px"}}
                        value={receiver.city}
                        onChange={(e) => handleReceiverChange('city', e.target.value)}
                    />  
                       <TextField
                        autoComplete="given-name"
                        id='reciever-state'
                        required
                        fullWidth
                        label="state"
                        style={{marginTop:"10px"}}
                        value={receiver.state}
                        onChange={(e) => handleReceiverChange('state', e.target.value)}
                    /> 
                       <TextField
                        autoComplete="given-name"
                        id='reciever-country'
                        required
                        fullWidth
                        label="country"
                        style={{marginTop:"10px"}}
                        value={receiver.country}
                        onChange={(e) => handleReceiverChange('country', e.target.value)}
                    /> 
                    {/* Add more TextFields here */}
            </Col>
            <Col xs={{ span: 6, offset: 3 }} style={{ textAlign: 'center', marginTop: '30px' }}>
               <Button style={
                { width: "160px" }} onClick={handleNext}>Next</Button>
            </Col>           
            </Row>



            
</Box>

</Box>
</Container>

    </ThemeProvider>
    </ArgonBox>
    </DashboardLayout>
    </div>
  )
}

export default OrderPage
