import React, { useState, useEffect } from "react";
import { Button, IconButton, Grid, Toolbar, Menu, MenuItem } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";

const Layout = () => {
  const savedActiveButton = localStorage.getItem("activeButton") || "stream";
  const [activeButton, setActiveButton] = useState(savedActiveButton);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    localStorage.setItem("activeButton", buttonName);
  };

  useEffect(() => {
    const savedButton = localStorage.getItem("activeButton");
    if (savedButton) {
      setActiveButton(savedButton);
    }
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Grid className="border" container spacing={3}>
        <Grid item xs={12}>
          <Toolbar
            className="d-flex justify-content-between"
            sx={{ paddingLeft: 0, paddingRight: 0, width: "100%" }}
          >
            <div style={{ flexGrow: 1, display: "flex", gap: "20px" }}>
              <Link className="text-decoration-none text-black" to="/Classroom">
                <Button
                  className="text-black"
                  sx={{
                    color: activeButton === "stream" ? "black" : "default",
                    borderBottom:
                      activeButton === "stream" ? "4px solid #1967d2" : "none",
                  }}
                  onClick={() => handleButtonClick("stream")}
                >
                  Stream
                </Button>
              </Link>
              <Button
                sx={{
                  color: activeButton === "classwork" ? "black" : "default",
                  borderBottom:
                    activeButton === "classwork" ? "4px solid #1967d2" : "none",
                }}
                onClick={() => handleButtonClick("classwork")}
              >
                <Link
                  className="text-decoration-none text-black"
                  to="/classwork"
                >
                  Classwork
                </Link>
              </Button>
              <Link to="/People">
                <Button
                  className="text-black"
                  sx={{
                    color: activeButton === "people" ? "black" : "default",
                    borderBottom:
                      activeButton === "people" ? "4px solid #1967d2" : "none",
                  }}
                  onClick={() => handleButtonClick("people")}
                >
                  People
                </Button>
              </Link>
            </div>

            {/* Icons for large screens */}
            <div className="d-none d-md-flex" style={{ display: "flex", gap: "10px" }}>
              <IconButton color="black">
                <VideocamIcon />
              </IconButton>
              <IconButton color="black">
                <CalendarTodayIcon />
              </IconButton>
              <IconButton color="black">
                <AddToDriveIcon />
              </IconButton>
            </div>

            {/* Three-dot menu for small screens */}
            <div className="d-md-none">
              <IconButton color="black" onClick={handleMenuOpen}>
                <MoreVertIcon />
              </IconButton>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                <MenuItem onClick={handleMenuClose}>
                  <VideocamIcon /> Video
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <CalendarTodayIcon /> Calendar
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <AddToDriveIcon /> Drive
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
