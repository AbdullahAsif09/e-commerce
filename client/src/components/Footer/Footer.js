import React from 'react'
import './Footer.css'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GavelIcon from "@mui/icons-material/Gavel";
import { Card } from '@mui/material';
function Footer() {
  return ( 
    <Card className="footer-container">
      <div className="footer-box1">
        <h1>AB Shop</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
          bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.
        </p>
      </div>
      <div className="footer-box2">
        <h2>Contact</h2>
        <ul>
          <li>
            <LocationOnIcon />
            <strong>Rawalpindi,Pakistan</strong>
          </li>
          <li>
            <PhoneIcon />
            <strong>+92 999 000000</strong>
          </li>
          <li>
            <EmailIcon />
            <strong>abdullah@gmail.com</strong>
          </li>
        </ul>
      </div>
      <div className="footer-box3">
        <h2>Useful Links</h2>
        <ul>
          <li>
            <HomeIcon />
            <strong>Home</strong>
          </li>
          <li>
            <FavoriteIcon />
            <strong>Favorite</strong>
          </li>
          <li>
          <GavelIcon />
            <strong>Terms</strong>
          </li>
        </ul>
      </div>
    </Card>
  );
}

export default Footer