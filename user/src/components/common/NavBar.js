import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate} from 'react-router-dom';

export default function NavBar() {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
  return (
    <AppBar position="static" style={{ backgroundColor: '#673ab7' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Todo App</Link>
        </Typography>
        {
          token? (
            <>
            {/* <Button color="inherit" component={Link} to="/">Create</Button> */}
            <Button color="inherit" onClick={() => {
              localStorage.removeItem("token");
              navigate('/login');
            }}>Logout</Button>

            </>
          ) : (
            <>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/signup">Signup</Button>
            </>
          )
        }
      </Toolbar>
    </AppBar>
  );
}
