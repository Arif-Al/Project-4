import React, { useState } from "react";
import {
  Typography,
  Container,
  Button,
  Card,
  CardContent,
  IconButton,
  Dialog,
  TextField,
  Box,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import VideocamIcon from "@mui/icons-material/Videocam";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";

const Classroom = () => {
  const [assignments, setAssignments] = useState([
    { id: 1, title: "Verb Day 22", date: "20 Sept 2024" },
    { id: 2, title: "Verb Day 21", date: "19 Sept 2024" },
    { id: 3, title: "Verb Day 20", date: "18 Sept 2024" },
  ]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentAssignment, setCurrentAssignment] = useState({
    id: null,
    title: "",
    date: "",
  });

  const handleOpenDialog = (assignment = { id: null, title: "", date: "" }) => {
    setCurrentAssignment(assignment);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSaveAssignment = () => {
    if (currentAssignment.id) {
      setAssignments(
        assignments.map((a) =>
          a.id === currentAssignment.id ? currentAssignment : a
        )
      );
    } else {
      setAssignments([
        ...assignments,
        { ...currentAssignment, id: Date.now() },
      ]);
    }
    handleCloseDialog();
  };

  const handleDeleteAssignment = (id) => {
    setAssignments(assignments.filter((a) => a.id !== id));
  };
  const navigate = useNavigate();
  const OpenEnglishHome = () => {
    navigate("/english-02");
  };
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
          p: { xs: "0", md: 2 }, // Remove vertical padding by setting xs: 0
        }}
      >
        <Box>
          <Button onClick={OpenEnglishHome}>Stream</Button>
          <Button>Classwork</Button>
          <Button>People</Button>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <VideocamIcon />
          <CalendarTodayIcon />
          <AddToDriveIcon />
        </Box>
      </Box>
      <hr />

      {/* Create Assignment Button */}
      <Box display="flex" justifyContent="flex-end" my={2}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
        >
          Create Assignment
        </Button>
      </Box>

      {/* Assignments List */}
      {assignments.map((assignment) => (
        <Card key={assignment.id} sx={{ mb: 2, p: 2 }}>
          <CardContent>
            <Typography variant="h6">{assignment.title}</Typography>
            <Typography variant="body2" color="textSecondary">
              {assignment.date}
            </Typography>
            <Box display="flex" justifyContent="flex-end">
              <IconButton
                color="primary"
                onClick={() => handleOpenDialog(assignment)}
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
      ))}

      {/* Dialog for Create/Edit Assignment */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <Box p={3}>
          <Typography variant="h6">
            {currentAssignment.id ? "Edit" : "Create"} Assignment
          </Typography>
          <TextField
            label="Title"
            fullWidth
            value={currentAssignment.title}
            onChange={(e) =>
              setCurrentAssignment({
                ...currentAssignment,
                title: e.target.value,
              })
            }
            sx={{ my: 2 }}
          />
          <TextField
            label="Date"
            fullWidth
            value={currentAssignment.date}
            onChange={(e) =>
              setCurrentAssignment({
                ...currentAssignment,
                date: e.target.value,
              })
            }
          />
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveAssignment}
              sx={{ ml: 2 }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Dialog>
    </Container>
  );
};

export default Classroom;
