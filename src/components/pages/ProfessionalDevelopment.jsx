import React, { useState, useEffect } from "react";
import {
  IconButton,
  Typography,
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import backgroundImage from "../assets/English.jpg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Google from "../assets/logo_meet_2020q4_color_1x_web_48dp.png";
import ArticleIcon from "@mui/icons-material/Article";
import { useNavigate } from "react-router-dom";
import Profile from "../assets/profile.jpg";

const ProfessionalDevelopment = () => {
  const navigate = useNavigate();

  // State for dialog and assignment details
  const [openDialog, setOpenDialog] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [assignmentDetails, setAssignmentDetails] = useState({
    title: "",
    description: "",
    date: "",
    id: null,
  });

  // State for assignments
  const [assignments, setAssignments] = useState([]);

  // Fetch assignments from localStorage on component mount
  useEffect(() => {
    const savedAssignments = JSON.parse(localStorage.getItem("assignments"));
    if (savedAssignments) {
      setAssignments(savedAssignments);
    }
  }, []);

  // Update assignments list and persist it in localStorage
  const updateAssignments = (newAssignments) => {
    setAssignments(newAssignments);
    localStorage.setItem("assignments", JSON.stringify(newAssignments));
  };

  const handleOpenDialog = (assignment = null) => {
    if (assignment) {
      setAssignmentDetails(assignment);
      setIsEditMode(true);
    } else {
      setAssignmentDetails({ title: "", description: "", date: "", id: null });
      setIsEditMode(false);
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAssignmentDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveAssignment = () => {
    const newAssignment = {
      title: assignmentDetails.title,
      date: assignmentDetails.date,
      description: assignmentDetails.description,
      id: assignmentDetails.id || new Date().toISOString(), // Generate a unique ID if not editing
    };

    if (isEditMode) {
      // Edit existing assignment
      const updatedAssignments = assignments.map((assignment) =>
        assignment.id === newAssignment.id ? newAssignment : assignment
      );
      updateAssignments(updatedAssignments);
    } else {
      // Create new assignment
      const updatedAssignments = [...assignments, newAssignment];
      updateAssignments(updatedAssignments);
    }

    setOpenDialog(false); // Close dialog after saving
  };

  const handleNavigateClasswork = () => {
    navigate("/classroom"); // Navigate to Classwork page
  };
  const handleNavigatePeoplePage = () => {
    navigate("/PeoplePage"); // Navigate to Classwork page
  };

  return (
    <Box
      sx={{ p: { xs: 2, md: 3 }, maxWidth: "1200px", margin: "auto", mt: -8 }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 3,
          flexWrap: "wrap",
          mb: 3,
        }}
      >
        {/* Buttons */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Button className="text-black">Stream</Button>
          <Button className="text-black" onClick={handleNavigateClasswork}>
            Classwork
          </Button>
          <Button className="text-black" onClick={handleNavigatePeoplePage}>
            People
          </Button>
        </Box>

        {/* Icons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton>
            <VideocamIcon />
          </IconButton>
          <IconButton>
            <CalendarTodayIcon />
          </IconButton>
          <IconButton>
            <AddToDriveIcon />
          </IconButton>
        </Box>
      </Box>
      <hr />

      {/* Main Content */}
      <Box>
        {/* Header Image */}
        <Box
          sx={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: { xs: 150, md: 200 },
            borderRadius: "10px",
            color: "white",
            display: "flex",
            alignItems: "flex-end",
            p: 2,
            mb: 3,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Professional Development <br />
            <span className="fs-6">Cohort 02 - Kingri</span>
          </Typography>
        </Box>

        {/* Layout */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
          }}
        >
          {/* Sidebar */}
          <Box
            sx={{
              width: { xs: "100%", md: 250 },
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mb: { xs: 3, md: 0 },
            }}
          >
            {/* Meet Card */}
            <Card sx={{ p: 2, width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">
                  <img
                    src={Google}
                    alt="Meet"
                    width="24"
                    style={{ marginRight: "10px" }}
                  />
                  Meet
                </Typography>
                <MoreVertIcon />
              </Box>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                Join
              </Button>
            </Card>

            {/* Upcoming Card */}
            <Card sx={{ p: 2, width: "100%" }}>
              <Typography variant="h6">Upcoming</Typography>
              <Typography sx={{ color: "gray", mt: 1 }}>
                Woohoo, no work due in soon!
              </Typography>
              <Button
                variant="text"
                sx={{ display: "block", textAlign: "right", width: "100%" }}
              >
                View all
              </Button>
            </Card>
          </Box>

          {/* Main Content */}
          <Box sx={{ flex: 1 }}>
            {/* Announcement Box */}
            <Card
              sx={{ p: 2, mb: 3, cursor: "pointer" }}
              onClick={() => handleOpenDialog()}
            >
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <img
                  src={Profile}
                  alt="User"
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                />
                Announce something to your class
              </Typography>
            </Card>

            {/* Assignments List */}
            {assignments.map((assignment, index) => (
              <Card
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: 2,
                  mb: 2,
                  flexDirection: { xs: "column", sm: "row" },
                  width: "100%", // Ensures full width responsiveness
                }}
              >
                <Button
                  sx={{
                    borderRadius: "50%", // Perfect circular button
                    backgroundColor: "primary.main",
                    width: 50, // Ensures uniform size
                    height: 50,
                    minWidth: 50, // Prevents button from shrinking
                    "&:hover": { backgroundColor: "primary.dark" }, // Smooth hover effect
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mr: { sm: 2, xs: 0 }, // Adds spacing on larger screens
                    mb: { xs: 1, sm: 0 }, // Adjusts spacing on small screens
                  }}
                >
                  <ArticleIcon sx={{ color: "white" }} />
                </Button>

                <Box
                  sx={{
                    flexGrow: 1,
                    textAlign: { xs: "center", sm: "left" },
                    width: "100%", // Ensures full width responsiveness
                  }}
                >
                  <Typography sx={{ fontWeight: "bold" }}>
                    {assignment.title}
                  </Typography>
                  <Typography sx={{ color: "gray" }}>
                    {assignment.date}
                  </Typography>
                </Box>

                <IconButton onClick={() => handleOpenDialog(assignment)}>
                  <MoreVertIcon />
                </IconButton>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Dialog for Creating or Editing Assignment */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          {isEditMode ? "Edit Assignment" : "Create Assignment"}
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            name="title"
            fullWidth
            variant="outlined"
            value={assignmentDetails.title}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Description"
            name="description"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            value={assignmentDetails.description}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Due Date"
            name="date"
            fullWidth
            variant="outlined"
            type="date"
            value={assignmentDetails.date}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSaveAssignment} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProfessionalDevelopment;
