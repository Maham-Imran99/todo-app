import React from 'react';
import { Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () =>
  <Container>
    <Typography
      variant="h2"
      gutterBottom
      sx={{
        fontWeight: 'bold',
        color: '#5e35b1'
      }}
    >
      Embrace organization
    </Typography>
    {/*  // TODO REMOVE INLINE STYLING - style constants file*/}
    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#5e35b1' }}>
      At your fingertips - 
      <Link to="/login" style={{ color: '#5e35b1', textDecoration: 'none', fontWeight: 'bold' }}>
        {/* TODO MAKE constant for names*/}

        Login
      </Link>
       - to your personal task manager today.
    </Typography>

  </Container>

export default Home
