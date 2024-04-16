import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../../graphQl/auth/mutations';
import { TextField, Button, Box, Typography, Container, CircularProgress, Alert } from '@mui/material';
import { Link } from 'react-router-dom';
import { mainContainerStyles } from '../../theme/styledConstants';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [signUpUser, { loading, error }] = useMutation(SIGNUP_USER);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error.message}</Alert>;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    signUpUser({
      variables: {
        userNew: formData
      }
    })
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={mainContainerStyles}>
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
