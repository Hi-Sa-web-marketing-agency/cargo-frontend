import React, { useState } from 'react';
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

function Packing_list() {
    const defaultTheme = createTheme();
    const [fields, setFields] = useState([{ id: 1 }]);
    const [serialNumber, setSerialNumber] = useState(1);
    const [fieldsr, setFieldsr] = useState([{ id: 1 }]);
    const [serialNumberr, setSerialNumberr] = useState(1);


    
  const addField = () => {
    setFields([...fields, { id: fields.length + 1 }]);
  };

  const deleteField = (index) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  const addFieldr = () => {
    setFieldsr([...fieldsr, { id: fieldsr.length + 1 }]);
  };

  const deleteFieldr = (index) => {
    setFieldsr(fieldsr.filter((_, i) => i !== index));
  };

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
              <br/>  <br/>
              <h5>Packed Items</h5>
     </Typography>
  
            <Box component="form" noValidate  sx={{ mt: 3}} >
      
  
  
  
  
     
  
  
 
      <br/>

<br/>  <br/>

<br/>
      <div className='box-main' >



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
          <Col xs={2} md={3}>
            <TextField
              autoComplete="given-name"
              id={`name-${field.id}`}
              required
              fullWidth
              label="Description"
              style={{ marginTop: "10px" }}
            />
          </Col>
          <Col xs={2} md={2}>
            <TextField
              autoComplete="given-name"
              id={`name-${field.id}`}
              required
              fullWidth
              label="Brand"
              style={{ marginTop: "10px" }}
            />
          </Col>
          <Col xs={1} md={2}>
            <TextField
              autoComplete="given-name"
              id={`name-${field.id}`}
              required
              fullWidth
              label="Quantity"
              style={{ marginTop: "10px" }}
            />
          </Col>
          <Col xs={2} md={1}>
            <TextField
              autoComplete="given-name"
              id={`name-${field.id}`}
              required
              fullWidth
              label="Price"
              style={{ marginTop: "10px" }}
            />
          </Col>
          <Col xs={2} md={1}>
            <TextField
              autoComplete="given-name"
              id={`name-${field.id}`}
              required
              fullWidth
              label="Value-usd"
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
      <div className='add-field'>
      <Button variant="contained" color="primary" onClick={addField} style={{ marginTop: "20px"}}>
        Add Field
      </Button>
<Row>
<Col xs={{ span: 6, offset: 3 }} style={{ textAlign: 'center', marginTop: '30px' }}>
                  <Button style={{ width: "160px" }}>Submit</Button>
              </Col> 
</Row>
</div>
{/* ---------------------------------------------------------------------------------- */}
<div className='box-pack'>
        {fieldsr.map((field, index) => (
          <div className='row-pack' key={field.id}>
            <div className='box-div' style={{ minWidth: "100px" }}>
              <TextField
                disabled
                id="outlined-disabled"
                label="s.no"
                defaultValue={`${serialNumberr + index}`}
                style={{ marginTop: "10px" }}
              />
            </div>
            <div className='box-div'>
              <TextField
                autoComplete="given-name"
                id={`description-${field.id}`}
                required
                fullWidth
                label="Description"
                style={{ marginTop: "10px" }}
              />
            </div>
            <div className='box-div'>
              <TextField
                autoComplete="given-name"
                id={`brand-${field.id}`}
                required
                fullWidth
                label="Brand"
                style={{ marginTop: "10px" }}
              />
            </div>
            <div className='box-div'>
              <TextField
                autoComplete="given-name"
                id={`quantity-${field.id}`}
                required
                fullWidth
                label="Quantity"
                style={{ marginTop: "10px" }}
              />
            </div>
            <div className='box-div'>
              <TextField
                autoComplete="given-name"
                id={`price-${field.id}`}
                required
                fullWidth
                label="Price"
                style={{ marginTop: "10px" }}
              />
            </div>
            <div className='box-div'>
              <TextField
                autoComplete="given-name"
                id={`value-usd-${field.id}`}
                required
                fullWidth
                label="Value-usd"
                style={{ marginTop: "10px" }}
              />
            </div>
            <div className='box-div' style={{ minWidth: "60px" }}>
              <IconButton onClick={() => deleteFieldr(index)} style={{ marginTop: "15px" }}>
                <DeleteIcon style={{ color: "red" }} />
              </IconButton>
            </div>
          </div>
        ))}
      </div>
      <div className='add-fieldr'>
        <Button variant="contained" color="primary" onClick={addFieldr} style={{ marginTop: "20px" }}>
          Add Field
        </Button>
        <Row>
          <Col xs={{ span: 6, offset: 3 }} style={{ textAlign: 'center', marginTop: '30px' }}>
            <Button style={{ width: "160px" }}>Submit</Button>
          </Col>
        </Row>
      </div>

  </Box>
  
  </Box>
  </Container>
  
      </ThemeProvider>
      </ArgonBox>
      </DashboardLayout>
      </div>
    )
  }

export default Packing_list
