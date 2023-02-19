import React, { useState } from "react";
import './Product.css'
import Watch from '../../Images/headphones.jpg'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { Fab } from "@mui/material";
import { Link } from "react-router-dom";
function Product({item}) {
  console.log(item)
  // const [state, setstate] = useState("hello");
  return ( 
    <div className="product-container">
      <img src={item.img} alt="loading....." />
      <div className="product-info">
        <div className="product-shoppingicon">
          <Fab variant="primary" size="medium" aria-label="like">
            <AddShoppingCartIcon />
          </Fab>
        </div>
        <div className="product-hearticon">
        <Link to={`/product/${item._id}`} className="color">
          <Fab variant="primary" size="medium" aria-label="like">
            {/* <strong>4.1 / 5.0</strong> */}
            <VisibilityIcon />
          </Fab>
        </Link>
        </div>
        <div className="product-shoppingicon">
          <Fab variant="extended" aria-label="like">
            <strong>40</strong>
            <MonetizationOnIcon />
          </Fab>
        </div>
      </div>
    </div>
  );
}

export default Product;
