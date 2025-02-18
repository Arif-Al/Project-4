import React, { useState, useEffect, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Divider,
  IconButton,
  Tooltip,
  MenuItem,
  Menu,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Layout from "../Layout/Layout";
import img from "../images/assi.png";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../images/bg.jpg";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatClearIcon from "@mui/icons-material/FormatClear";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import YouTubeIcon from "@mui/icons-material/YouTube";
import UploadIcon from "@mui/icons-material/Upload";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import meet from "../images/meet.png";
import bgImage from "../images/bg.jpg";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { Value } = useSelector((state) => state.Location);
  console.log(Value);

  const [showInput, setShowInput] = useState(false);
  const [inputText, setInputText] = useState("");
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("posts");
    return savedPosts ? JSON.parse(savedPosts) : [];
  });
  const [editingPostIndex, setEditingPostIndex] = useState(null);
  const [isInputEditable, setIsInputEditable] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [inputHeight, setInputHeight] = useState("60px");
  const inputRef = useRef(null);

  // Menu logic
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [selectedPostIndex, setSelectedPostIndex] = useState(null);

  const handleClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setSelectedPostIndex(index); // Store the index of the post for which you want to show the menu
  };
  const handleClose = () => {
    setAnchorEl(null);
    setSelectedPostIndex(null); // Close the menu and clear the selected post index
  };

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const handleAddPost = () => {
    if (inputText.trim()) {
      if (editingPostIndex !== null) {
        const updatedPosts = [...posts];
        updatedPosts[editingPostIndex] = {
          ...updatedPosts[editingPostIndex],
          title: inputText,
        };
        setPosts(updatedPosts);
        setEditingPostIndex(null);
      } else {
        setPosts([
          {
            title: inputText,
            date: "Just now",
          },
          ...posts,
        ]);
      }
      setInputText("");
      setShowInput(false);
      setIsInputEditable(false);
      setIsButtonVisible(false);
      setInputHeight("60px");
    }
  };

  const handleEditPost = () => {
    if (selectedPostIndex !== null) {
      setEditingPostIndex(selectedPostIndex);
      setInputText(posts[selectedPostIndex].title);
      setShowInput(true);
      setIsInputEditable(true);
      setIsButtonVisible(true);
      setInputHeight("100px");
    }
    handleClose(); // Close menu after selecting edit
  };

  const handleDeletePost = () => {
    if (selectedPostIndex !== null) {
      const updatedPosts = posts.filter((_, i) => i !== selectedPostIndex);
      setPosts(updatedPosts);
    }
    handleClose(); // Close menu after deleting
  };

  const handleInputClick = () => {
    setShowInput(true);
    setIsInputEditable(true);
    setIsButtonVisible(true);
    setInputHeight("100px");
  };

  const handleInputBlur = () => {
    if (!inputText.trim()) {
      setInputHeight("60px");
      setIsButtonVisible(false);
    }
  };

  const handleOutsideClick = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setShowInput(false);
      setInputText("");
      setIsButtonVisible(false);
      setInputHeight("60px");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <Layout />
      <Box
        className="container "
        sx={{ minHeight: "100vh", paddingTop: "20px" }}
      >
        {/* Banner Section */}

        <Box
          className="rounded"
          sx={{
            color: "white",
            py: 4,
            textAlign: "start",
            backgroundImage: `url(${bgImage})`, // Use the imported image
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "300px",
          }}
        >
          <Typography
            style={{ marginTop: "160px" }}
            variant="h4"
            fontWeight="bold"
            sx={{ pl: 4 }}
          >
            {/* {Value.name}// */}
            Web Development SO2
          </Typography>
          <Typography variant="subtitle1" sx={{ pl: 4 }}>
            {" "}
            Cohort 2 - Kingri
            {/* {Value.description  } */}
          </Typography>
        </Box>

        {/* Content Section */}
        <Box sx={{ px: 0, py: 4 }}>
          <Grid container spacing={3}>
            {/* Meet Section */}
            <Grid item xs={12} md={2}>
              <Card className="my-2" elevation={2}>
                <CardContent
                  className="border rounded"
                  sx={{ textAlign: "center", height: "110px" }}
                >
                  <Box className="d-flex align-items-center justify-content-between">
                    <Box className="d-flex align-items-center">
                      {" "}
                      <img
                        style={{ width: "30px" }}
                        className="pe-2"
                        src={meet}
                        alt=""
                      />
                      <Typography
                        style={{ fontSize: "14px" }}
                        color="textSecondary"
                        variant="body1"
                        fontWeight="bold"
                      >
                        Meet
                      </Typography>{" "}
                    </Box>

                    <MoreVertIcon className="text-secondary " />
                  </Box>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2, fontSize: "12px" }}
                  >
                    Join
                  </Button>
                </CardContent>
              </Card>

              <Card elevation={2}>
                <CardContent
                  className="border rounded"
                  sx={{ textAlign: "center" }}
                >
                  <Box>
                    <Typography
                      className="text-start lh-lg"
                      color="textSecondary"
                      variant="body1"
                    >
                      <b> Upcoming</b> <br />
                      <Typography style={{ fontSize: "12px" }}>
                        {" "}
                        Woohoo, no work due soon!{" "}
                      </Typography>
                    </Typography>
                  </Box>
                  <Box className="text-end">
                    {" "}
                    <Button
                      className="border-0 fw-bold"
                      variant="outlined"
                      color="primary"
                      sx={{ mt: 2 }}
                    >
                      View All
                    </Button>{" "}
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Announcement Section */}
            <Grid item xs={12} md={9}>
              {!showInput && (
                <Card elevation={2}>
                  <CardContent>
                    <Box
                      variant="body1"
                      color="textSecondary"
                      onClick={handleInputClick}
                      sx={{ cursor: "pointer", textAlign: "center" }}
                    >
                      <Box className="d-flex align-items-center justify-content-start">
                        <img
                          className="rounded-5 me-3"
                          style={{ width: "35px" }}
                          src={logo}
                          alt=""
                        />
                        <Typography
                          sx={{
                            color: "text.secondary",
                            "&:hover": {
                              color: "black",
                            },
                            cursor: "pointer",
                          }}
                          style={{ fontSize: "14px" }}
                        >
                          Announce something to your class
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              )}

              {showInput && (
                <Card elevation={2} ref={inputRef}>
                  <CardContent>
                    <div>
                      <TextField
                        label="Announce something to your class"
                        multiline
                        maxRows={4}
                        fullWidth
                        variant="outlined"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onBlur={handleInputBlur}
                        InputProps={{
                          readOnly: !isInputEditable,
                        }}
                        sx={{
                          height: inputHeight,
                          transition: "height 0.3s ease",
                          "& .MuiOutlinedInput-root": {
                            border: "none",
                            backgroundColor: isInputEditable
                              ? "white"
                              : "lightgrey",
                            boxShadow: "none",
                          },
                          "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                          },
                          "& .MuiInputLabel-root": {
                            color: isInputEditable ? "black" : "gray",
                          },
                        }}
                      />
                      <Tooltip title="Bold" placement="top">
                        <FormatBoldIcon
                          sx={{
                            color: "#818C78",
                            "&:hover": { color: "black" },
                          }}
                        />
                      </Tooltip>
                      <Tooltip className="mx-1" title="Italic" placement="top">
                        <FormatItalicIcon
                          sx={{
                            color: "#818C78",
                            "&:hover": { color: "black" },
                          }}
                        />
                      </Tooltip>
                      <Tooltip title="Underlined" placement="top">
                        <FormatUnderlinedIcon
                          sx={{
                            color: "#818C78",
                            "&:hover": { color: "black" },
                          }}
                        />
                      </Tooltip>
                      <Tooltip
                        className="mx-1"
                        title="Bulleted List"
                        placement="top"
                      >
                        <FormatListBulletedIcon
                          sx={{
                            color: "#818C78",
                            "&:hover": { color: "black" },
                          }}
                        />
                      </Tooltip>
                      <Tooltip title="Clear Formatting" placement="top">
                        <FormatClearIcon
                          sx={{
                            color: "#818C78",
                            "&:hover": { color: "black" },
                          }}
                        />
                      </Tooltip>
                      <hr className="border-2" />
                      <Box className="d-flex justify-content-between align-items-center">
                        <Box>
                          <Tooltip
                            className="mx-2 rounded-5 border"
                            title="Google Drive"
                            placement="top"
                          >
                            <AddToDriveIcon
                              sx={{
                                color: "black",
                                "&:hover": {
                                  color: "black",
                                  backgroundColor: "#E2E0C8",
                                },
                              }}
                            />
                          </Tooltip>
                          <Tooltip
                            className="mx-3 rounded-5 border"
                            title="YouTube"
                            placement="top"
                          >
                            <YouTubeIcon
                              sx={{
                                color: "black",
                                "&:hover": {
                                  color: "black",
                                  backgroundColor: "#E2E0C8",
                                },
                              }}
                            />
                          </Tooltip>
                          <Tooltip
                            className="mx-3 rounded-5 border"
                            title="Upload"
                            placement="top"
                          >
                            <UploadIcon
                              sx={{
                                color: "black",
                                "&:hover": {
                                  color: "black",
                                  backgroundColor: "#E2E0C8",
                                },
                              }}
                            />
                          </Tooltip>
                          <Tooltip title="Insert link" placement="top">
                            <InsertLinkIcon
                              sx={{
                                color: "black",
                                "&:hover": {
                                  color: "black",
                                  backgroundColor: "#E2E0C8",
                                },
                              }}
                            />
                          </Tooltip>
                        </Box>
                        <Box>
                          {isButtonVisible && (
                            <Button
                              variant="contained"
                              onClick={handleAddPost}
                              color="primary"
                              sx={{ textTransform: "none" }}
                            >
                              {editingPostIndex !== null ? "Update" : "Post"}
                            </Button>
                          )}
                        </Box>
                      </Box>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Displaying Posts */}
              {posts.map((post, index) => (
                <Card key={index} sx={{ my: 2 }} elevation={2}>
                  <CardContent className="d-flex align-items-center position-relative">
                    <Box className="d-flex">
                      <Box className="me-2">
                        <img style={{ width: "39px" }} src={img} alt="" />
                      </Box>
                      <Box>
                        <Typography
                          variant="body1"
                          sx={{ fontSize: "14px" }}
                          fontWeight="bold"
                        >
                          Ijaz Liaqat posted a new assignment:{" "}
                          {post.title.length > 50
                            ? `${post.title.slice(0, 50)}...`
                            : post.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "gray", fontSize: "12px" }}
                        >
                          {post.date}
                        </Typography>
                        <Box className="position-absolute top-50 end-0 translate-middle-y">
                          <Button
                            onClick={(event) => handleClick(event, index)}
                          >
                            <MoreVertIcon />
                          </Button>
                          <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                              vertical: "top",
                              horizontal: "left",
                            }}
                            transformOrigin={{
                              vertical: "top",
                              horizontal: "left",
                            }}
                          >
                            <MenuItem onClick={handleEditPost}>Edit</MenuItem>
                            <MenuItem onClick={handleDeletePost}>
                              Delete
                            </MenuItem>
                          </Menu>
                        </Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
