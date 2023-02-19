import { Button, Paper } from "@mui/material";
import React from "react";
import Shirts from "../../Images/Shirts.jpg";
import "./ShoppingCard.css";
function ShoppingCard() {
  return (
    <Paper elevation={4} className="shop-card-container">
      <div className="shop-card-box1">
        <img src={Shirts} alt="loading..."></img>
      </div>
      <div className="shop-card-box2">
        <div className="shop-card-info">
          <h2>Product:</h2>
          <strong>T-Shirts</strong>
        </div>
        <div className="shop-card-info">
          <h2>ID:</h2>
          <strong>24134252345</strong>
        </div>
        <div className="shop-card-info">
          <h2>Size:</h2>
          <strong>small</strong>
        </div>
        <div className="shop-card-info2">
          <div className="shop-card-amount">
            <Button color="error">
              <h1>-</h1>
            </Button>
            <strong>1</strong>
            <Button color="success">
              <h1>+</h1>
            </Button>
          </div>
          <p className="shop-card-price">$7000000</p>
        </div>
      </div>
    </Paper>
  );
}

export default ShoppingCard;
