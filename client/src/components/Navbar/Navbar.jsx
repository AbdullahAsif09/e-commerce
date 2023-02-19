import React from "react";
import './navbar.css'
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import { Avatar, Badge, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
function Navbar() {
  return (
    <Paper className="nav-container" elevation={4}>
      <div className="nav-box1">
        <h1 className="pointer">AB</h1>
      </div>
      <div className="nav-box2">
        <div className="nav-search">
          <SearchIcon className="pointer" />
          <input placeholder="Search" />
        </div>
      </div>
      <div className="nav-box3">
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="primary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
        <Avatar className="pointer">AB</Avatar>
        <FacebookIcon className="pointer" />
      </div>
    </Paper>
  );
}

export default Navbar;
