import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../graphQl/mutations';
// import { AuthContext } from '../context/AuthContext';
import { TextField, Button, Box, Typography, Container, CircularProgress, Alert } from '@mui/material';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  
//   const { setAuth } = useContext(AuthContext);
  const [signUpUser, {data, loading, error} ] = useMutation(SIGNUP_USER); //returns an array. first is the method we can call on return 
  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error.message}</Alert>;
  if (data) console.log("Sign UP data", data)


  const handleChange = (e) => {
    setFormData({
      ...formData,
        [e.target.name]:e.target.value
    });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    signUpUser({
        variables: {
            userNew: formData
        }
    })
     console.log(formData);
  };

 

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="fname"
            autoFocus
            // value={formState.firstName}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lname"
            // value={formState.lastName}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            // value={formState.email}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            // value={formState.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign up
          </Button>
          <Button component={Link} to="/login" fullWidth>
          Already have an account ? Login
          </Button>  
        </Box>
      </Box>
    </Container>
  );
}
