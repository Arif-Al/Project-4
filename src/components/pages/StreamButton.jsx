import React, { useState, useEffect } from "react";
import {
  Typography,
  Container,
  Card,
  CardContent,
  IconButton,
  Box,
  TextField,
  Button,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { useNavigate } from "react-router-dom";
import VideocamIcon from "@mui/icons-material/Videocam";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";

const Classroom = () => {
  const navigate = useNavigate();

  // Fetch assignments from localStorage
  const [assignments, setAssignments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const savedAssignments = JSON.parse(localStorage.getItem("assignments"));
    if (savedAssignments) {
      setAssignments(savedAssignments);
    }
  }, []);

  const handleDeleteAssignment = (id) => {
    const updatedAssignments = assignments.filter((a) => a.id !== id);
    setAssignments(updatedAssignments);
    localStorage.setItem("assignments", JSON.stringify(updatedAssignments));
  };

  const OpenEnglishHome = () => {
    navigate("/english-02");
  };
  const handleNavigatePeoplePage = () => {
    navigate("/PeoplePage");
  };

  const filteredAssignments = assignments.filter((assignment) =>
    assignment.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Box
        sx={{
          width: { xs: "100%", md: "70%" }, // Full width on mobile, 83% on larger screens
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 auto ", // Centers the header
          marginTop: "-2%", // Removes negative margin on small screens
          gap: { xs: 2, md: 0 }, // Adjusts spacing on small screens
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            marginLeft: "2%",
          }}
        >
          <Button
            sx={{
              color: "#000",
            }}
            onClick={OpenEnglishHome}
          >
            Stream
          </Button>
          <Button
            sx={{
              color: "#000",
              textDecoration: "underline",
            }}
          >
            Classwork
          </Button>
          <Button
            sx={{
       
              color: "#000",
            }}
            onClick={handleNavigatePeoplePage}
          >
            People
          </Button>
        </Box>
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
      <Box className="mb-5" sx={{ width: "100%"}}>
        <hr fullWidth />
      </Box>
      <Container maxWidth="md" sx={{ mt: -3 }}>
        <Box className="my-3">
          <div className="d-flex align-items-center text-primary my-3">
            <AssignmentTurnedInIcon className="me-2" /> View your work
          </div>

          {/* Search for assignments */}
          <Box className="d-flex align-items-center justify-content-between">
            <TextField
              label="Search Assignments"
              variant="outlined"
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ mb: 2 }}
            />
          </Box>
        </Box>

        {/* Assignments List */}
        {filteredAssignments.length > 0 ? (
          filteredAssignments.map((assignment) => (
            <Card key={assignment.id} sx={{ mb: 2, p: 2 }}>
              <CardContent>
                <Typography variant="h6">{assignment.title}</Typography>
                <Typography variant="body2" sx={{ color: "gray" }}>
                  {assignment.date}
                </Typography>
                <Typography sx={{ mt: 1 }}>{assignment.description}</Typography>
                <Box display="flex" justifyContent="flex-end">
                  <IconButton
                    color="primary"
                    onClick={() => {} /* Handle Edit assignment */}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => handleDeleteAssignment(assignment.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography>No assignments found.</Typography>
        )}
      </Container>
    </>
  );
};

export default Classroom;
