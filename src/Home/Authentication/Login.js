import React, { useState } from 'react'
import '../Authentication/Login.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode"
import * as Yup from "yup";
function Login() {


  const [showPassword, setShowPassword] = React.useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  
  const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .required("Username is required"),
    password: Yup.string()
        .min(3, "Password must be 3 characters at minimum")
        .required("Password is required"),
});

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const navigate=useNavigate()

  const handleHome=()=>{
    navigate('/')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await LoginSchema.validate({ username, password }, { abortEarly: false });
     
      const response = await fetch('https://cargo-backend-2log.onrender.com/api/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
  
      if (response.ok) {
        console.log(response,'dddddddddddd');
        const { access, refresh } = await response.json();
        localStorage.setItem('accessToken', access);
        localStorage.setItem('refreshToken', refresh);
        const decodedToken = jwtDecode(access);
        console.log(decodedToken,'decoded');
        const userId = decodedToken.user_id; 
        const { username } = decodedToken; // Assuming the username is stored in the access token's payload
        localStorage.setItem('username', username);// Assuming the user ID is stored in the access token as 'userId'
        localStorage.setItem('userId', userId);

  
        console.log('Login successful');
        navigate('/dashboard');
      } else {
        console.error('Login failed:', response.statusText);
      }
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        // Yup validation error occurred
        const validationErrors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
        console.error('Validation error:', validationErrors);
      } else {
        // Other types of errors occurred
        console.error('Error:', error);
      }
    }
    console.log(errors);
    console.log(errors);
    // Check the errors state after validation
  };
  
  
  
  
  return (
    <div style={{overflow:"hidden"}}>
        <img onClick={handleHome} className='Logo2' src='/Images/Logo.png' />
        <div className='back-card'>
            <div className='signup'>
            <input className="switch-checkbox" id={`switch-new`} type="checkbox" />
            <label className="switch-label" htmlFor={`switch-new`} >
  <span className={`switch-button`} style={{fontSize:"11px",fontWeight:"bold"}}><DriveFileRenameOutlineOutlinedIcon /></span>
</label>

    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& > :not(style)': { m: 1, width: '95%' },
      }}
      noValidate
      autoComplete="off"
    >

      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        style={{ marginTop: "100px" }}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={!!errors.username} // Check if username field has errors
        helperText={errors.username || ''}       />
      <FormControl sx={{ m: 1, width: '85%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
              
            }
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password} // Check if password field has errors
            helperText={errors.password || ''} // Display error message or empty string

          />
        </FormControl>
        <Button variant="contained" style={{backgroundColor:"#000080"}} type="submit">
        Login
      </Button>
      <p style={{fontSize:"12px",textAlign:"center",fontFamily:"Archivo, sans-serif"}}> All over India our commited team deliver your cargo to your door step.</p>
      <br/>
      <br/>

      <p style={{ fontSize: '12px',textAlign:"center", fontFamily: 'Archivo, sans-serif' }}>
  Don&rsquo;t have an account?
</p>
      <Link style={{fontSize:"14px",marginLeft:"40%",fontFamily:"Archivo, sans-serif",}}>Signup here</Link>
     
    </Box>
            </div>
           <img src='/Images/lady.png'/>
        </div>
      
    </div>
  )
}

export default Login
