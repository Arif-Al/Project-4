import React from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Button,
  IconButton,
} from "@mui/material";
import {
  Videocam as VideocamIcon,
  CalendarToday as CalendarTodayIcon,
  CloudUpload as AddToDriveIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const peopleData = {
  teachers: [
    { name: "xWave Team", avatar: "https://placehold.co/40" },
    { name: "Shazia Gul", avatar: "https://placehold.co/40" },
    { name: "Urooj Memon", avatar: "https://placehold.co/40" },
  ],
  classmates: [
    { name: "Awais ur rahman", avatar: "https://placehold.co/40" },
    { name: "Faraz Ali Kanhar", avatar: "https://placehold.co/40" },
    { name: "Sanaullah", avatar: "https://placehold.co/40" },
    { name: "Sidra channa", avatar: "https://placehold.co/40" },
    { name: "Suhail Ahmed", avatar: "https://placehold.co/40" },
    { name: "Aqsa Ali Bhayo - xWave", avatar: "https://placehold.co/40" },
  ],
};

const PeoplePage = () => {
  const navigate = useNavigate();

  const handleNavigateClasswork = () => navigate("/classroom");
  const OpenEnglishHome = () => navigate("/english-02");

  return (
    <Box>
      {/* Header Navigation Bar */}
      <Box
        sx={{
          width: { xs: "100%", md: "83%" }, // Full width on mobile, 83% on larger screens
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 24px",
          margin: "0 auto ", // Centers the header
          marginTop: { xs: "0", md: "-4%" }, // Removes negative margin on small screens
          flexWrap: "wrap", // Wrap items on smaller screens
          gap: { xs: 2, md: 0 }, // Adjusts spacing on small screens
        }}
      >
        {/* Navigation Buttons */}
        <Box sx={{ display: "flex", gap: { xs: 2, md: 3 }, flexWrap: "wrap" }}>
          <Button
            sx={{ fontWeight: "bold", color: "#000", minWidth: "100px" }}
            onClick={OpenEnglishHome}
          >
            Stream
          </Button>
          <Button
            sx={{ fontWeight: "bold", color: "#000", minWidth: "100px" }}
            onClick={handleNavigateClasswork}
          >
            Classwork
          </Button>
          <Button
            sx={{
              fontWeight: "bold",
              color: "#000",
              textDecoration: "underline",
              minWidth: "100px",
            }}
          >
            People
          </Button>
        </Box>

        {/* Icons */}
        <Box sx={{ display: "flex", gap: { xs: 1, md: 2 } }}>
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

      {/* Page Content */}
      <Box
        sx={{
          maxWidth: { xs: "100%", md: 600 },
          mx: "auto",
          my: 4,
          padding: { xs: 2, md: 0 },
        }}
      >
        {/* Teachers Section */}
        <Typography variant="h6" sx={{ mb: 2 }}>
          Teachers
        </Typography>
        <List>
          {peopleData.teachers.map((teacher, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar src={teacher.avatar} alt={teacher.name} />
              </ListItemAvatar>
              <ListItemText primary={teacher.name} />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 3 }} />

        {/* Classmates Section */}
        <Typography variant="h6" sx={{ mb: 2 }}>
          Classmates (50 students)
        </Typography>
        <List>
          {peopleData.classmates.map((student, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar src={student.avatar} alt={student.name} />
              </ListItemAvatar>
              <ListItemText primary={student.name} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default PeoplePage;
