import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Avatar } from "@mui/material";
import { Menu as MenuIcon, Add as AddIcon, Apps as AppsIcon } from "@mui/icons-material";
import logo from './assets/logo_square_rounded.svg'
import Sidebar from "./Sidebar";

const Header = () => {
  const [open, setOpen] = useState(false); // سائیڈبار کی اسٹیٹ

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };
  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#333", boxShadow: "none", borderBottom: "1px solid #ddd" }}>
      <Toolbar>
        {/* Menu Icon */}
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)} > 
          <MenuIcon />
        </IconButton>

        {/* Classroom Logo & Text */}
      
        <img src={logo} alt="Classroom" className="ms-3" style={{ width: 24, height: 24, marginRight: 15 }} />
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 500 }}>
          Classroom
        </Typography>
 
        {/* Add Button */}
        <IconButton color="inherit">
          <AddIcon />
        </IconButton>

        {/* Apps Icon */}
        <IconButton color="inherit">
          <AppsIcon />
        </IconButton>

        {/* Profile Avatar */}
        <Avatar alt="User" src="profile_pic_url" />
      </Toolbar>
      <Sidebar open={open} toggleDrawer={toggleDrawer} />

    </AppBar>
  );
};

export default Header;
