import React from "react";
import "./Products.css";
import Product from "./Product";
import { popularProducts } from "../../Data";
import { Divider, Paper } from "@mui/material";
function Products() {
  return (
    <Paper elevation={4} className="products-container">
      <div className="products-box">
        <Divider>
          <h1>Our Best Products</h1>
        </Divider>
        <div className="products-items">
        {popularProducts.map((item) => (
          <Product item={item} />
        ))}
        </div>
      </div>
    </Paper>
  );
}

export default Products;
