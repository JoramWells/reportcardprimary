import {
  FilledInput, FormControl, Button, FormGroup,
  IconButton, InputAdornment, InputLabel, Paper, TextField, Box,
} from '@mui/material';
import React from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
    >
      <Paper
        style={{
          width: '50%',
          height: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        elevation={3}
      >
        <FormGroup style={{
          width: '80%',
        }}
        >
          <FormControl
            style={{
              margin: '1rem',
            }}
          >
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              style={{
                width: '100%',
              }}
            />
          </FormControl>

          <FormControl
            sx={{ m: 1, width: '100%' }}
            variant="filled"
            style={{
              margin: '1rem',
            }}
          >
            <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )}
            />
          </FormControl>
          <Button
            variant="contained"
            disableElevation
            style={{
              width: '100%',
              margin: 'auto',
              display: 'block',
              padding: '10px',
              marginTop: '1.5rem',
            }}
          >
            Sign In
          </Button>

          {/* have an account */}
          <Box sx={{
            textAlign: 'center',
            color: 'grey',
            marginTop: '1.5rem',
          }}
          >
            Have an account,
            {' '}
            <Link to="/register">Sign Up?</Link>
          </Box>
        </FormGroup>

      </Paper>
    </div>
  );
}

export default Login;
