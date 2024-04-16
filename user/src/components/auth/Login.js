import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { TextField, Button, Box, Typography, Container, CircularProgress, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { LOGIN_USER } from '../../graphQl/auth/mutations';
import { mainContainerStyles } from '../../theme/styledConstants';
import { useAuth } from '../../context/auth/AuthContext';
import { LOGIN, LOGIN_MSG, SIGN_UP_MSG } from '../../constants/constantText';

export default function SignIn() {
  const {login} = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [signInUser, { data, loading, error }] = useMutation(LOGIN_USER, {
    onCompleted(data) {
      login(data.user.token);
      navigate('/todos')
    }
  })

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error.message}</Alert>;
  if (data) console.log("Sign In data", data)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    signInUser({
      variables: {
        userSignin: formData
      }
    })

  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={mainContainerStyles} >
        <Typography component="h1" variant="h5">
         {LOGIN_MSG}
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
           {LOGIN}
          </Button>
          <Button component={Link} to="/signup" fullWidth>
           {SIGN_UP_MSG}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
