import { Card, Divider, MenuItem, Select } from "@mui/material";
import "./Listproducts.css";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import {popularProducts} from "../../Data"
import axios from "axios";
function ListProducts({cat}) {
  const [Products, setProducts] = useState([]);
  const [filter, setfilter] =useState("");
  const [sort, setsort] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      console.log(cat)
      try {
        const res = await axios.get(`http://localhost:8000/product?category=${cat}`);
        setProducts(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  // console.log(Products)
  const handleChange = (event) => {
    setfilter(event.target.value);
  };
  const handleSortChange = (event) => {
    setsort(event.target.value);
  };
  return (
    <div className="listpro-container">
      {/* <Divider></Divider> */}
      <h1>{cat}</h1>
      {/* <Divider></Divider> */}
      <div className="listpro-filter">
        <div className="list-filterOne">
          <h2>Filter Product:</h2>
          <Select
            value={filter}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">XS</MenuItem>
            <MenuItem value={10}>S</MenuItem>
            <MenuItem value={20}>M</MenuItem>
            <MenuItem value={30}>L</MenuItem>
            <MenuItem value={40}>XL</MenuItem>
          </Select>
        </div>
        <div className="list-filterTwo">
          <h2>Sort Product:</h2>
          <Select
            value={sort}
            onChange={handleSortChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">Newest</MenuItem>
            <MenuItem value={10}>Price ( asending )</MenuItem>
            <MenuItem value={20}>Price ( decending )</MenuItem>
          </Select>
        </div>
      </div>
      <div className="listpro-items">
        {Products.map((item) => (
          <Product
            item={item}
            sort={sort}
            filters={filter}
            className="listpro-items-display"
          />
        ))}
      </div>
    </div>
  );
}

export default ListProducts;
