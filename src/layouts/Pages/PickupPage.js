import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import ArgonBox from 'components/ArgonBox';
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import EnhancedTable from './PickupList';
import { useSelector } from 'react-redux';
import PhoneInput from 'react-phone-input-2';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FlightIcon from '@mui/icons-material/Flight';
import SailingIcon from '@mui/icons-material/Sailing';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';
import toast from 'react-hot-toast';




function Copyright(props) {
    const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Marshal Cargo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function PickupPage() {
    const [valid, setValid] = useState(true);

    const [isLoading, setIsLoading] = useState(false)
    const user=localStorage.getItem('userId')
    const username= localStorage.getItem('user')
    console.log(user,username,'fromlocal----------------');

    const [formData, setFormData] = useState({
        id: null,
        name: '',
        place: '',
        phone: '',
        pickup_date: '',
        pickup_time: '',
        selectedmode: '',
        status: '',
        salesman:`${user}-${username}`,
        driver: '',
        mode:''
      });
      const [editMode, setEditMode] = useState(false);
      const selectedItem = useSelector((state) => state.selectedValue.selectedItem);
      const salesman = selectedItem ? selectedItem.salesman : 'N/A'
            console.log(salesman,'item,----------------------------');


      useEffect(() => {
        if (selectedItem) {
          setEditMode(true);
          if (selectedItem.salesman === 'Nill') {
            setFormData({
                ...selectedItem,
                salesman: `${user}-${username}`
            });
        } else {
            const updatedSelectedItem = { ...selectedItem, salesman: `${user}-${username}` };
            // Set the updated selectedItem in the state
            setFormData(updatedSelectedItem);

        }
        } else {
          setEditMode(false);
          setFormData({
            id: null,
            name: '',
            place: '',
            phone: '',
            pickup_date: '',
            pickup_time: '',
            selectedmode: '',
            status: '',
            salesman:`${user}-${username}`,
            driver: '',
            mode:''
          });
        }
      }, [selectedItem]);  console.log(selectedItem,'ddddddddddddddddduuuuuuuuuuuuuuuu');

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

    return phoneNumberPattern.test(phoneNumber);
  };


  const handleSubmit = (event) => {
    setIsLoading(true)
    event.preventDefault();
    console.log('Form data:', formData);
    // Perform form submission based on edit mode
    if (editMode) {
        console.log('Form datawwwwwwwwwwwww:', formData);

      // Send PUT request to update existing record
      axios.put(`https://cargo-backend-2log.onrender.com/api/enquiries_put/${formData.id}/`, formData)
        .then((response) => {
          console.log('Record updated successfully:', response.data);
          setIsLoading(false)
          toast.success('Successfully Updated')

          // Handle success 
          window.location.reload()
        })
        .catch((error) => {
          console.error('Error updating record:', error);
          toast.error('Failed to Update')

        });
    } else {
      // Send POST request to create new record
      axios.post('https://cargo-backend-2log.onrender.com/api/enquiries_post/', formData)
        .then((response) => {
          console.log('Record created successfully:', response.data);
          toast.success('Successfully created')

          setIsLoading(false)

          window.location.reload()

        })
        .catch((error) => {
          console.error('Error creating record:', error);

        });
    }
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

  
  const handleModeChange = (event) => {
    // Check if the event object and its target are defined
    if (event && event.target && event.target.value) {
      // Access the value property of the target safely
      const modeValue = event.target.value;
      // Update the mode state
      setFormData(prevFormData => ({
        ...prevFormData,
        mode: modeValue
      }));
    } else {
      console.error("Invalid event or target:", event);
    }
  };

  const handleModeInputChange = (e) => {
    // Call handleFormChange function
    handleFormChange(e);
    // Call handleModeChange with event object
    handleModeChange(e);
  };

  const handlePhoneInputChange = (name, value) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
    setValid(validatePhoneNumber(value));
  };

  return (
    <DashboardLayout>
        <DashboardNavbar/>
        <ArgonBox py={3}>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" style={{backgroundColor:'white' ,borderRadius:"10px"}}>
      {isLoading && (
        <div
          className="position-fixed top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center bg-light bg-opacity-50"
          aria-hidden="true"
          style={{ zIndex: 50 }}
        >
          <LoadingSpinner/>
        </div>
      )}
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            <br/>
          {editMode ? 'Edit Enquiry' : 'Create Enquiry'}          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
          
              <Grid item xs={12} sm={3}>
                <TextField
                  autoComplete="given-name"
                  id='name'
                  value={formData.name}
                  name='name'
                  onChange={handleFormChange}
                  required
                  fullWidth
                  label="Name"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  required
                  fullWidth
                  id='place'
                  value={formData.place}
                  name='place'
                  onChange={handleFormChange} 
                 label="place"
                  autoComplete="family-name"
                />
              </Grid>

              
              <Grid item xs={12} sm={3}>
                <TextField
                  autoComplete="given-name"
                  dateAdapter={AdapterDayjs}
                  style={{ width: "100%" }}
                  id='pickup_date'
                  value={formData.pickup_date}
                  name='pickup_date'
                  type='date'
                  onChange={handleFormChange}
                   required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  required
                  fullWidth
                  label="time"
                  id='pickup_time'
                  value={formData.pickup_time}
                  name='pickup_time'
                  onChange={handleFormChange}
                   autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
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
              </Grid>
              <Grid item xs={12} sm={3}>
              <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Mode</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id='mode'
                value={formData.mode}
                name='mode'
                onChange={handleModeInputChange}
                label="mode"
                
            >
            <MenuItem value="flight"><FlightIcon/> Flight</MenuItem>
            <MenuItem value="ship"><SailingIcon/> Ship</MenuItem>
            </Select>
            </FormControl>
              </Grid>
              <Grid item xs={12} sm={3}>
              <FormControl fullWidth>
            <InputLabel id="demoww">status</InputLabel>
            <Select
                labelId="demoww"
                id='status'
                value={formData.status}
                name='status'
                onChange={handleFormChange}
                label="status"
                
            >
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="confirmed"> Confirmed</MenuItem>
            <MenuItem value="cancelled"> Cancelled</MenuItem>

            </Select>
            </FormControl>
              
            </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                 autoComplete="given-name"
                 name="driver"
                 required
                 fullWidth
                 label="driver"
                 id='driver'
                 value={formData.driver}
                 onChange={handleFormChange}    
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                 autoComplete="given-name"
                 name="salesman"
                 required
                 fullWidth
                 label="salesman"
                 id='salesman'
                 value={formData.salesman.split('-')[1]}
                   onChange={handleFormChange}    
                />
              </Grid>

              <Grid item xs={12} sm={3}>
  <Button
    type="submit"
    variant="contained"
    sx={{ mt: 1, mb: 2 }}
  >
{editMode ? 'Update' : 'Submit'}  </Button>
              </Grid>
     
            </Grid>



            
          </Box>
        </Box>
        <EnhancedTable/>
        <Copyright sx={{ mt: 5 }} />

      </Container>
    </ThemeProvider>
    </ArgonBox>

    
    </DashboardLayout>
  );
}

