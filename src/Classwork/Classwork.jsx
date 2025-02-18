import React, { useState, useEffect } from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Paper,
  Button,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; // Importing MUI arrow down icon
import Layout from "../Layout/Layout";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import assi from "../images/assi.png";

const Classwork = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    // Retrieve and parse data from localStorage
    const storedPosts = localStorage.getItem("posts");
    if (storedPosts) {
      const parsedPosts = JSON.parse(storedPosts);
      setPosts(parsedPosts);
      setFilteredPosts(parsedPosts);
    }
  }, []);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter posts based on the search term
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <>
      <Layout />
      <Grid
        container
        spacing={2}
        direction="column"
        style={{
          minHeight: "100vh", // Full height
          marginTop: 0, // No margin at the top
          justifyContent: "flex-start", // Align items to the top
          alignItems: "center", // Center content horizontally
        }}
      >
        {/* Button to View your Work */}
        <Grid
          item
          xs={12}
          style={{ width: "100%", display: "flex", marginTop: "0" }}
        >
          <Link>
            {" "}
            <Button className="fw-semibold" style={{ marginLeft: "198px" }}>
              <AccountBoxIcon className="mx-1 fs-5" /> View your work
            </Button>{" "}
          </Link>
        </Grid>

        {/* Search Input with Down Arrow Icon inside */}
        <Grid
          item
          xs={12}
          style={{
            width: "100%",
            position: "relative",
            display: "flex",
            justifyContent: "start",
            marginTop: "0",
          }}
        >
          <input
            type="text"
            placeholder="All Topics"
            value={searchTerm}
            onChange={handleSearchChange}
            style={{
              width: "30%", // Set input width to 100% of its container
              padding: "10px 40px 10px 10px", // Add padding to the right for the icon
              fontSize: "16px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              marginLeft: "210px",
            }}
          />
          {/* Down Arrow Icon inside input field */}
          {/* <ArrowDropDownIcon
            style={{
              position: 'absolute',
              left: '580px', // Align to the right of the input field
              top: '60%',
              transform: 'translateY(-50%)', // Adjust for perfect vertical centering
              cursor: 'pointer',
            }}
          /> */}
        </Grid>

        {/* Show suggestions if search term is not empty */}
        {searchTerm && filteredPosts.length > 0 && (
          <Grid item xs={12} style={{ width: "40%" }}>
            <Paper
              style={{
                width: "100%",
                maxHeight: "200px",
                overflowY: "auto",
                marginTop: "5px",
              }}
            >
              <List>
                {filteredPosts.map((post, index) => (
                  <ListItem
                    key={index}
                    divider
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <ListItemText primary={post.title} secondary={post.date} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        )}

        {/* Displaying the list of posts */}
        <Grid item xs={12} style={{ width: "70%", marginTop: "0" }}>
          <List
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {filteredPosts.length === 0 && searchTerm ? (
              <Typography variant="body1" color="textSecondary" align="center">
                No posts found.
              </Typography>
            ) : (
              filteredPosts.map((post, index) => (
                <ListItem
                  className="py-3"
                  key={index}
                  divider
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography>
                    {" "}
                    <img
                      className="mx-3"
                      style={{ width: "35px" }}
                      src={assi}
                      alt=""
                    />
                    Ijaz Liaqat posted a new assignment:{" "}
                    {post.title.length > 25
                      ? `${post.title.slice(0, 25)}...`
                      : post.title}{" "}
                  </Typography>
                  <Typography
                    className="text-secondary"
                    style={{ fontSize: "12px" }}
                  >
                    {" "}
                    {post.date} <MoreVertIcon className="mx-2" />{" "}
                  </Typography>
                  {/* <ListItemText primary={post.title} secondary={post.date} /> */}
                </ListItem>
              ))
            )}
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default Classwork;
