import React, { useState } from 'react';
// import { AuthContext } from '../context/AuthContext';
import { useMutation } from '@apollo/client';
import { TextField, Button, Box, Typography, Container, CircularProgress, Alert} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { LOGIN_USER } from '../graphQl/mutations';

export default function SignIn() {
const navigate = useNavigate();
const [formData, setFormData] = useState({});
const [signInUser, {data, loading, error}] = useMutation(LOGIN_USER, {
    onCompleted(data){
        localStorage.setItem("token", data.user.token);
        navigate('/create')
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

//   const { signIn } = useContext(AuthContext);
//   const [signInMutation] = useMutation(SIGN_IN_USER, {
//     onCompleted: (data) => {
//       console.log("Login successful", data);
//       if (data.signInUser.token) {
//         localStorage.setItem('token', data.signInUser.token);
//         signIn(data.signInUser.token);
//         navigate('/home');
//       }
//     },
//     onError: (error) => {
//       console.error('Error during sign-in', error);
//     }
//   });

  const handleSubmit = async (event) => {
    event.preventDefault();
    signInUser({
        variables: {
            userSignin: formData
        }
    })
    
  };

  //  const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const { data } = await signInMutation({ variables: { email, password } });
  //     console.log("Login", data )
  //      if (data && data.signInUser && data.signInUser.token) {
  //     localStorage.setItem('token', data.signInUser.token);
  //     // Call any signIn context actions if needed
  //     signIn(data.signInUser.token);
      
  //     // Redirect user to home
  //     navigate('/home');
  //    } else {
  //     // Handle case where data might not be in expected format
  //     console.error('Invalid sign-in data');
  //   }
  //   } catch (error) {
  //     // Handle login error
  //     console.error('Error during sign-in', error);
  //   }
  // };


//   const redirectToSignUp = () => {
//     navigate('/home'); 
//   };
//   console.log(email, password)

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
          Login to your account
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
            Login
          </Button>
           <Button component={Link} to="/signup" fullWidth>
           New here? Sign Up
          </Button>   
        </Box>
      </Box>
    </Container>
  );
}
