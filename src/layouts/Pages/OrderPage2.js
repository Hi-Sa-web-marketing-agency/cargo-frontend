import React, { useEffect, useState } from 'react';
import { Container, CssBaseline, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArgonBox from 'components/ArgonBox'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Col, Row } from 'react-bootstrap';
import './Order.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateProof, updateRecieverProof, updateSenderProof } from './SelectSlice';
import PhoneInput from 'react-phone-input-2';
function OrderPage2() {
    
    const defaultTheme = createTheme();
    const [fields, setFields] = useState([{ id: 1 }]);
    const [serialNumber, setSerialNumber] = useState(1);
    // const selectedItem = useSelector((state) => state.selectedValue.selectedItem);
    const {  sender_proof,reciever_proof } = useSelector(state => state.selectedValue);
    const [senderDocumentPreview, setSenderDocumentPreview] = useState(null);
    const [recieverDocumentPreview, setRecieverDocumentPreview] = useState(null);

    const [valid, setValid] = useState(true);

    const navigate=useNavigate()
    const dispatch=useDispatch()
  const addField = () => {
    setFields([...fields, { id: fields.length + 1 }]);
  };

  const deleteField = (index) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  const handleNext=()=>{
    navigate('/packing_list')
  }
  const handleBack=()=>{
    navigate('/order')
  }

    console.log(useSelector((state) => state.selectedValue.sender));
    console.log(useSelector((state) => state.selectedValue.receiver));
    console.log(useSelector((state) => state.selectedValue.sender_proof),'proofs');

    console.log(useSelector((state) => state.selectedValue.reciever_proof),'proofr');


    const handleSenderProofChange = (field, value) => {
      dispatch(updateSenderProof({ [field]: value }));
  };
  const handleRecieverProofChange = (field, value) => {
    dispatch(updateRecieverProof({ [field]: value }));
};


const validatePhoneNumber = (phoneNumber) => {
  const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

  return phoneNumberPattern.test(phoneNumber);
};
  const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
          handleSenderProofChange('document', file);
      }
  };

  const handleFileChangeR = (event) => {
    const file = event.target.files[0];
    if (file) {
        handleRecieverProofChange('document', file);
    }
};



  const handlePhoneInputChange = (name, value) => {
    dispatch(updateSenderProof({ [name]: value }));

    setValid(validatePhoneNumber(value));
  };

  const handlePhoneInputChangeR = (name, value) => {
    dispatch(updateRecieverProof({ [name]: value }));

    setValid(validatePhoneNumber(value));
  };



useEffect(() => {
  if (sender_proof.document) {
      setSenderDocumentPreview(URL.createObjectURL(sender_proof.document));
  }
  if (reciever_proof.document) {
    setRecieverDocumentPreview(URL.createObjectURL(reciever_proof.document));
}

}, [sender_proof.document,reciever_proof.document]);


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
                  <br/>
                  {senderDocumentPreview && (
                                                <img
                                                    src={senderDocumentPreview}
                                                    alt="Document Preview"
                                                    style={{ marginTop: "10px", width: '50%', height: '250px' }}
                                                />
                                            )}
                  <TextField
                            autoComplete="given-name"
                            id='sender_pname'
                            required
                            fullWidth
                            label="name"
                            value={sender_proof.name}
                            onChange={(e) => handleSenderProofChange('name', e.target.value)}
                            style={{ marginTop: "10px" }}
                        />                    
                <PhoneInput
                        autoComplete="given-name"
                        id='senderp-mobile'
                        required
                        country={'in'}
                        fullWidth
                        label="mobile"
                        style={{marginTop:"10px"}}
                        value={sender_proof.mobile}
                        // onChange={(e) => handleSenderChange('mobile', e.target.value)}
                        onChange={(newValue) => handlePhoneInputChange('mobile', newValue)} 
                        inputStyle={{ width: '100%', height: "50px" }}
                        inputProps={{
                            required: true,
                        }}
                    />  

                      <TextField
                            autoComplete="given-name"
                            id='sender_ppassport_no'
                            required
                            fullWidth
                            label="passport_no"
                            value={sender_proof.passport_no}
                            onChange={(e) => handleSenderProofChange('passport_no', e.target.value)}
                            style={{ marginTop: "10px" }}
                        />  
  
                        <TextField
                            autoComplete="given-name"
                            id='sender_pstreet'
                            required
                            fullWidth
                            label="street"
                            value={sender_proof.street}
                            onChange={(e) => handleSenderProofChange('street', e.target.value)}
                            style={{ marginTop: "10px" }}
                        />  
                             <TextField
                            autoComplete="given-name"
                            id='sender_ppostal'
                            required
                            fullWidth
                            label="postal"
                            value={sender_proof.postal}
                            onChange={(e) => handleSenderProofChange('postal', e.target.value)}
                            style={{ marginTop: "10px" }}
                        />  
  
                        <TextField
                            autoComplete="given-name"
                            id='sender_pstate'
                            required
                            fullWidth
                            label="state"
                            value={sender_proof.state}
                            onChange={(e) => handleSenderProofChange('state', e.target.value)}
                            style={{ marginTop: "10px" }}
                        />     
                      <TextField
                            autoComplete="given-name"
                            id='sender_pcountry'
                            required
                            fullWidth
                            label="country"
                            value={sender_proof.country}
                            onChange={(e) => handleSenderProofChange('country', e.target.value)}
                            style={{ marginTop: "10px" }}
                        />  
                          <TextField
                            autoComplete="given-name"
                            id='sender_pdocument_item'
                            required
                            fullWidth
                            label="document_item"
                            value={sender_proof.document_item}
                            onChange={(e) => handleSenderProofChange('document_item', e.target.value)}
                            style={{ marginTop: "10px" }}
                        />  
                       

                                      <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleFileChange}
                                                style={{ marginTop: "10px" }}
                                            />
                                         
                      
              </Col>
                   
            
  
              <Col xs={12} md={6}>
              <br/>
  <br/>
                  <h5>Reciever Address</h5>

                  <br/>
                  {recieverDocumentPreview && (
                                                <img
                                                    src={recieverDocumentPreview}
                                                    alt="Document Preview"
                                                    style={{ marginTop: "10px", width: '50%', height: '250px' }}
                                                />
                                            )}

                  <TextField
                            autoComplete="given-name"
                            id='reciever_pname'
                            required
                            fullWidth
                            label="name"
                            value={reciever_proof.name}
                            onChange={(e) => handleRecieverProofChange('name', e.target.value)}
                            style={{ marginTop: "10px" }}
                        />                    
                <PhoneInput
                        autoComplete="given-name"
                        id='recieverp-mobile'
                        required
                        country={'in'}
                        fullWidth
                        label="mobile"
                        style={{marginTop:"10px"}}
                        value={reciever_proof.mobile}
                        // onChange={(e) => handleSenderChange('mobile', e.target.value)}
                        onChange={(newValue) => handlePhoneInputChangeR('mobile', newValue)} 
                        inputStyle={{ width: '100%', height: "50px" }}
                        inputProps={{
                            required: true,
                        }}
                    />  

                      <TextField
                            autoComplete="given-name"
                            id='reciever_ppassport_no'
                            required
                            fullWidth
                            label="passport_no"
                            value={reciever_proof.passport_no}
                            onChange={(e) => handleRecieverProofChange('passport_no', e.target.value)}
                            style={{ marginTop: "10px" }}
                        />  
  
                        <TextField
                            autoComplete="given-name"
                            id='reciever_pstreet'
                            required
                            fullWidth
                            label="street"
                            value={reciever_proof.street}
                            onChange={(e) => handleRecieverProofChange('street', e.target.value)}
                            style={{ marginTop: "10px" }}
                        />  
                             <TextField
                            autoComplete="given-name"
                            id='reciever_ppostal'
                            required
                            fullWidth
                            label="postal"
                            value={reciever_proof.postal}
                            onChange={(e) => handleRecieverProofChange('postal', e.target.value)}
                            style={{ marginTop: "10px" }}
                        />  
  
                        <TextField
                            autoComplete="given-name"
                            id='reciever_pstate'
                            required
                            fullWidth
                            label="state"
                            value={reciever_proof.state}
                            onChange={(e) => handleRecieverProofChange('state', e.target.value)}
                            style={{ marginTop: "10px" }}
                        />     
                      <TextField
                            autoComplete="given-name"
                            id='reciever_pcountry'
                            required
                            fullWidth
                            label="country"
                            value={reciever_proof.country}
                            onChange={(e) => handleRecieverProofChange('country', e.target.value)}
                            style={{ marginTop: "10px" }}
                        />  
                          <TextField
                            autoComplete="given-name"
                            id='reciever_pdocument_item'
                            required
                            fullWidth
                            label="document_item"
                            value={reciever_proof.document_item}
                            onChange={(e) => handleRecieverProofChange('document_item', e.target.value)}
                            style={{ marginTop: "10px" }}
                        />  
                       

                                      <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleFileChangeR}
                                                style={{ marginTop: "10px" }}
                                            />
                                            
                      {/* Add more TextFields here */}
              </Col>
                      </Row>
  
  
  <br/>
  <br/>

  <br/>
      <h5>Box Details</h5>
      <div className='box-details' >



      {fields.map((field, index) => (

        <>
        {/* <div className='serial'>
                    <Typography variant="body1" >{serialNumber + index}</Typography>
                    </div> */}
                    <div className='box-div' >

        <Row key={index} >
            <Col xs={2} md={1}>
                <TextField
          disabled
          id="outlined-disabled"
          label="s.no"
          defaultValue={`${serialNumber + index}`} 
                   style={{ marginTop: "10px" }}

        />

            {/* <Typography variant="body1">{serialNumber + index}</Typography> */}
          </Col>
          <Col xs={3} md={3}>
            <TextField
              autoComplete="given-name"
              id={`name-${field.id}`}
              required
              fullWidth
              label="Name"
              style={{ marginTop: "10px" }}
            />
          </Col>
          <Col xs={3} md={3}>
            <TextField
              autoComplete="given-name"
              id={`name-${field.id}`}
              required
              fullWidth
              label="Name"
              style={{ marginTop: "10px" }}
            />
          </Col>
          <Col xs={3} md={3}>
            <TextField
              autoComplete="given-name"
              id={`name-${field.id}`}
              required
              fullWidth
              label="Name"
              style={{ marginTop: "10px" }}
            />
          </Col>
          
          <Col xs={1} md={2}>
          <IconButton onClick={() => deleteField(index)} style={{ marginTop: "15px" }}>
              <DeleteIcon style={{color:"red"}} />
            </IconButton>
          </Col>
         
        </Row>
              </div>

        </>
      ))}
    

   
      </div>
      <Button variant="contained" color="primary" onClick={addField} style={{ marginTop: "20px"}}>
        Add Field
      </Button>
 
<Row>
<Col xs={{ span: 6, offset: 3 }} style={{ textAlign: 'center', marginTop: '30px' }}>
<Button style={{ width: "160px" }} onClick={handleBack}>Back</Button>

                  <Button style={{ width: "160px",marginLeft:"20px" }} onClick={handleNext}>Next</Button>

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
  

export default OrderPage2
