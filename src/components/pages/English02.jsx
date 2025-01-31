import React from "react";
import { IconButton, Typography, Box, Button, Card } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import backgroundImage from "../assets/English.jpg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Google from "../assets/logo_meet_2020q4_color_1x_web_48dp.png";
import ArticleIcon from '@mui/icons-material/Article';
import { useNavigate } from "react-router-dom";
 

const English02 = () => {

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/classroom");
  }

 

  return (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
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
          <Button>Stream</Button>
        
          <Button onClick={handleNavigate}>Classwork</Button>
           
          <Button>People</Button>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <VideocamIcon />
          <CalendarTodayIcon />
          <AddToDriveIcon />
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
            English 02
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
            }}
          >
            {/* Meet Card */}
            <Card sx={{ p: 2 }}>
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
            <Card sx={{ p: 2 }}>
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
            <Card sx={{ p: 2, mb: 3 }}>
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <img
                  src="https://placehold.co/40"
                  alt="User"
                  style={{ borderRadius: "50%" }}
                />
                Announce something to your class
              </Typography>
            </Card>

            {/* Assignments List */}
            {[
              { title: "Verb Day 22", date: "20 Sept 2024" },
              { title: "Verb Day 21", date: "19 Sept 2024" },
              { title: "Verb Day 20", date: "18 Sept 2024" },
              {
                title: "My Neighborhood",
                date: "16 Sept 2024 (Edited 16 Sept 2024)",
              },
              { title: "Verb Day 19", date: "16 Sept 2024" },
            ].map((assignment, index) => (
              <Card
                key={index}
                sx={{ display: "flex", alignItems: "center", p: 2, mb: 2 }}
              >
                <Button className="rounded-circle py-2 px-2 bg-primary me-3"> 
                <ArticleIcon className="text-white "/>
                </Button>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography fontWeight="bold">
                    xWave Team posted a new assignment: {assignment.title}
                  </Typography>
                  <Typography sx={{ color: "gray" }}>
                    {assignment.date}
                  </Typography>
                </Box>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default English02;
