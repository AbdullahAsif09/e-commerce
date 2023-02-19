import React from 'react'
import "./Login.css"
import {Paper} from "@mui/material"
import { Button, TextField } from '@mui/material';
function Login() {
  return (
    <div className="login-contain">
      <Paper elevation={8} className="login-container">
        <div className="login-left">
          <h1 className="login-left-heading">AB Shop</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat{" "}
          </p>
          <strong className="login-left-strong">Wanna Signup?</strong>
          <Button className="login-left-button" variant="contained" color='secondary'>
            Signup
          </Button>
        </div>
        <div className="login-right">
          <h1 className="login-right-heading">Login</h1>
          <TextField color="primary" label="User Name" variant="outlined" />
          <TextField color="primary" label="Password" variant="outlined" />
          <Button
            className="login-right-button"
            color="primary"
            variant="contained"
          >
            Login
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default Login