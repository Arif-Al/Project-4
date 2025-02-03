import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import image1 from "../assets/English.jpg";
import image2 from "../assets/img_graduation.jpg";

import { useNavigate } from "react-router-dom";

const cardData = [
  {
    title: "English 02",
    instructor: "xWave Team",
    due: "",
    avatar: "X",
    backgroundImage: image1,
    link: "/english-02",
  },
  {
    title: "Web Dev Frontend S02",
    instructor: "xWave Team",
    due: "Due Monday",
    post: "23:59 (Google Classroom-clone)",
    avatar: "X",
    backgroundImage: image2,
    link: "/web-dev-frontend",
  },
  {
    title: "Professional Development",
    instructor: "xWave Team",
    due: "Due Monday",
    post: "26th Jan - 3rd Feb",
    avatar: "X",
    backgroundImage: image2,
    link: "/professional-development",
  },
  {
    title: "English Communication",
    instructor: "xWave Team",
    due: "Due today",
    post: "LinkedIn Post 19",
    avatar: "X",
    backgroundImage: image1,
    link: "/English-Comunication",
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {cardData.map((card, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            sx={{ display: "flex" }}
          >
            <Card
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                width: "100%",
                height: { xs: 250, sm: 280, md: 320, lg: 350 },
                cursor: "pointer",
                "&:hover": {
                  boxShadow: 6,
                },
              }}
              onClick={() => navigate(card.link)} // Navigate to different pages dynamically
            >
              <Box
                sx={{
                  color: "white",
                  backgroundImage: `url(${card.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "40%",
                  p: 2,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    <Tooltip title={card.title} placement="top">
                      {card?.title.length > 15
                        ? `${card?.title.slice(0, 15)}...`
                        : card?.title}
                    </Tooltip>
                  </Typography>
                  <Typography variant="body2">{card.instructor}</Typography>
                </Box>
                <IconButton sx={{ color: "white" }}>
                  <MoreVertIcon />
                </IconButton>
              </Box>
              <CardContent sx={{ position: "relative", minHeight: 120 }}>
                {card.due && (
                  <Typography variant="body2">{card.due}</Typography>
                )}
                {card.post && (
                  <Typography variant="body2">{card.post}</Typography>
                )}
                <Avatar
                  sx={{
                    bgcolor: "#8E24AA",
                    color: "white",
                    width: 70,
                    height: 70,
                    position: "absolute",
                    top: -35,
                    right: 15,
                  }}
                >
                  {card.avatar}
                </Avatar>
              </CardContent>
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
