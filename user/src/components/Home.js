import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlSBEumtgp2ScpmpORknstfEHIakOHLXYZIQ&s"; // Direct URL to the image

  return (
    // <Box
    //   sx={{
    //     height: '100vh',
    //     width: '100%',
    //     backgroundImage: `url(${imageUrl})`, // Using image URL directly
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'cover',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     flexDirection: 'column',
    //     textAlign: 'center',
    //     color: '#fff', // Change the text color if needed
    //   }}
    // >
      <Container>
        <Typography 
  variant="h2" 
  gutterBottom 
  sx={{ 
    fontWeight: 'bold', 
    color: '#5e35b1' // Use the specific purple shade you want, e.g., #5e35b1
  }}
>
  Embrace organization
</Typography>
<Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#5e35b1' }}>
  At your fingertips — 
  <Link to="/login" style={{  color: '#5e35b1', textDecoration: 'none', fontWeight: 'bold' }}>
    Login
  </Link>
   to your personal task manager today.
</Typography>

      </Container>
    // </Box>
  );
};

export default Home
