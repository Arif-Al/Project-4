// src/pages/HomePage.jsx
// import React from "react";
// import "../Styles/HomePage.css";
// import { Box, Container, Typography } from "@mui/material";
// import Card from "@mui/material/Card";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
// import FolderOpenIcon from "@mui/icons-material/FolderOpen";
// import xWaveimg from "../assets/unnamed.png";
import React from "react";
import { Container, Grid, Card, CardContent, Typography, Avatar, Box, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
 


const cardData = [
  { title: "English 02", instructor: "xWave Team", due: "", avatar: "X" },
  { title: "Web Dev Frontend S02", instructor: "xWave Team", due: "Due Monday - 23:59", avatar: "X" },
  { title: "Professional Development", instructor: "xWave Team", due: "Due Monday - 26th Jan - 3rd Feb", avatar: "X" },
  { title: "English Communication", instructor: "xWave Team", due: "Due today - LinkedIn Post 19", avatar: "X" },
  { title: "Xwave Digital Literacy", instructor: "Asvad Sagheer", due: "", avatar: "A" },
];
const HomePage = () => {
  return (
    <Container>
    <Grid container spacing={3}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 3 }}>
            {/* Header */}
            <Box
              sx={{
                background: "linear-gradient(90deg, #1565C0, #1E88E5)",
                color: "white",
                p: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                {card.title}
              </Typography>
              <IconButton sx={{ color: "white" }}>
                <MoreVertIcon />
              </IconButton>
            </Box>
            {/* Instructor & Due Date */}
            <CardContent sx={{ position: "relative", minHeight: 120 }}>
              <Typography variant="body2" color="textSecondary">
                {card.instructor}
              </Typography>
              {card.due && (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {card.due}
                </Typography>
              )}
              {/* Avatar */}
              <Avatar
                sx={{
                  bgcolor: "#8E24AA",
                  color: "white",
                  width: 50,
                  height: 50,
                  position: "absolute",
                  top: -25,
                  right: 15,
                }}
              >
                {card.avatar}
              </Avatar>
            </CardContent>
            {/* Bottom Icons */}
            <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
              <IconButton>
                <AccountBoxIcon />
              </IconButton>
              <IconButton>
                <FolderOpenIcon />
              </IconButton>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
  );
};

export default HomePage;
