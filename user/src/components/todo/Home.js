import React from 'react';
import { Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { textStyles, textLabels } from '../../constants/index';

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
    <Typography variant="h5" gutterBottom sx={textStyles.headerStyle}>
      At your fingertips -
      <Link to="/login" style={textStyles.linkStyle}>
        {textLabels.LOGIN}
      </Link>
      - to your personal task manager today.
    </Typography>

  </Container>

export default Home

