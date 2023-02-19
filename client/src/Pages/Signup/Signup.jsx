import React from 'react'
import Paper from "@mui/material/Paper";
import { Button, TextField } from '@mui/material';
import "./Signup.css"
function Signup() {
  return (
    <div className="signup-container">
      <Paper elevation={8} className="signup-contain">
        <div className="signup-left">
          <h1 className="signup-left-heading">AB Shop</h1>
          <p className="signup-left-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat{" "}
          </p>
          <strong className="sign-left-strong">Have an account?</strong>
          <Button className="sign-left-button" variant="contained">
            Login
          </Button>
        </div>
        <div className="signup-right">
          <h1 className="signup-right-heading">Signup</h1>
          <TextField color="secondary" label="User Name" variant="outlined" />
          <TextField color="secondary" label="Email" variant="outlined" />
          <TextField color="secondary" label="Password" variant="outlined" />
          <Button
            className="signup-right-button"
            color="secondary"
            variant="contained"
          >
            Signup
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default Signup