import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LOGIN, LOGOUT, SIGNUP, TODO } from '../../constants/constantText';
import { useAuth } from '../../context/auth/AuthContext';

export default function NavBar() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isHome = location.pathname === '/';

  return (
    <AppBar position="static" style={{ backgroundColor: '#673ab7' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>{TODO}</Link>
        </Typography>

        {isHome && isLoggedIn && (
          <Button color="inherit" component={Link} to="/todos">
            Todos
          </Button>
        )}

        {isLoggedIn ? (
          <Button color="inherit" onClick={handleLogout}>{LOGOUT}</Button>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">{LOGIN}</Button>
            <Button color="inherit" component={Link} to="/signup">{SIGNUP}</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
