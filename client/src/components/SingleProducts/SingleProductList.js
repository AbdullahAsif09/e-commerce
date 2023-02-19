import { Button, Divider, MenuItem, Paper, Select } from "@mui/material";
import { useState } from "react";
import "./SingleProList.css";
function SingleProductList({product}) {
  const [filter, setfilter] = useState("");
  // console.log(product);
  const handleChange = (event) => {
    setfilter(event.target.value);
  };
  return (
    <div className="singleList-container">
      <Paper elevation={4} className="singleList-paper">
        <div className="singleList-boxOne">
          <img src={product.img} alt="loading........." />
        </div>
        <div className="singleList-boxTwo">
          <div className="singleList-title">
            <Divider></Divider>
            <h1>{product.title}</h1>
            <Divider></Divider>
          </div>
          <p className="singleList-desc">{product.des}</p>
          <div className="singleList-price">
            <h3>Price:</h3>
            <strong>{product.price}$</strong>
            
            <Button variant="outlined" color="secondary">
              Buy It Now!
            </Button>
            <Select
              value={filter}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
          <div className="singleList-amount">
            <Button color="success">
              <h3>+</h3>
            </Button>
            <strong>1</strong>
            <Button color="error">
              <h3>-</h3>
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default SingleProductList;
