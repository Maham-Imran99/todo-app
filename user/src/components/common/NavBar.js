import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN, LOGOUT, SIGNUP, TODO } from '../../constants/constantText';

export default function NavBar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  return (
    <AppBar position="static" style={{ backgroundColor: '#673ab7' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>{TODO}</Link>
        </Typography>
        {
          token ? (
            <>
              <Button color="inherit" onClick={() => {
                localStorage.removeItem("token");
                navigate('/login');
              }}>{LOGOUT}</Button>

            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/login">{LOGIN}</Button>
              <Button color="inherit" component={Link} to="/signup">{SIGNUP}</Button>
            </>
          )
        }
      </Toolbar>
    </AppBar>
  );
}