import { Button, Divider, Paper } from "@mui/material";
import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ShoppingCard from "../../components/ShoppingCard/ShoppingCard";
import "./Shopping.css";
function Shopping() {
  return (
    <div>
      <Navbar />
      <div className="shopping-container">
        <div className="shopping-box">
          <Divider></Divider>
          <h1>Your Cart</h1>
          <Divider></Divider>
        </div>
        <div className="shopping-Buttons">
          <Button variant="outlined" color="secondary">
            Continue Shopping
          </Button>
        </div>
        <div className="shopping-cards">
          <div className="shopping-cards-box1">
            <ShoppingCard />
            <ShoppingCard />
            <ShoppingCard />
          </div>
          <Paper elevation={4} className="shopping-cards-box2">
            <div>
              <Divider></Divider>
              <h1>Order Summery</h1>
              <Divider></Divider>
            </div>
            <div className="shopping-cards-info">
              <h3>Sub-total:</h3>
              <strong>$90900</strong>
            </div>
            <div className="shopping-cards-info">
              <h3>Estimate Shipping:</h3>
              <strong>$500</strong>
            </div>
            <div className="shopping-cards-info">
              <h3>Total:</h3>
              <strong>$99999</strong>
            </div>
            <Button variant="outlined" color="success">
              Proceed to CheckOut!
            </Button>
          </Paper>
        </div>
      </div>
      <Footer />
    </div> 
  );
}

export default Shopping;
