import React from "react";
import "./Categories.css";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
function Categories({ img, title, id, cat }) {
  return (
    <div className="categories-container">
      <img
        src={img}
        alt="loading...."
        height="500px"
        className="categories-img"
      />
      <div className="catrgories-info">
        <h1 className="categories-title">{title}</h1>
        <Link to={`/products/${cat}`} className="color">
          <Button
            className="categories-button"
            variant="contained"
            color="error"
          >
            Shop Now
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Categories;
