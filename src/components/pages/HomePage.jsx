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
import image4 from "../assets/img_learnlanguage.jpg";
import { useNavigate } from "react-router-dom";

const cardData = [
  {
    title: "English 02",
    instructor: "xWave Team",
    due: "",
    avatar: "X",
    backgroundImage: image1,
  },
  {
    title: "Web Dev Frontend S02",
    instructor: "xWave Team",
    due: "Due Monday  ",
    post: "23:59 (Google Classroom-clone)",
    avatar: "X",
    backgroundImage: image2,
  },
  {
    title: "Professional Development",
    instructor: "xWave Team",
    due: "Due Monday",
    post: " 26th Jan - 3rd Feb",
    avatar: "X",
    backgroundImage: image2,
  },
  {
    title: "English Communication",
    instructor: "xWave Team",
    due: "Due today  ",
    post: "LinkedIn Post 19",
    avatar: "X",
    backgroundImage: image1,
  },
  {
    title: "Xwave Digital Literacy",
    instructor: "Asvad Sagheer",
    due: "",
    avatar: "A",
    backgroundImage: image4,
  },
];

const HomePage = () => {
  const Navigate = useNavigate();
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
              className=""
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                width: "100%",
                cursor: "pointer",
                "&:hover": {
                  boxShadow: 6,
                },
              }}
              onClick={() => Navigate("/english-02")}
            >
              
              <Box
                sx={{
                  color: "white",
                  backgroundImage: `url(${card.backgroundImage})`,
                  p: 2,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <ox>
                  <Typography
                    variant="subtitle1"
                    className="my-3"
                    sx={{ fontWeight: "bold" }}
                  >
                    <Tooltip title={card.title} placement="top">
                      {card?.title.length > 15
                        ? `${card?.title.slice(0, 15)}...`
                        : card?.title}
                    </Tooltip>
                  </Typography>
                  <Typography variant="body2" className="text-white">
                    {card.instructor}
                  </Typography>
                </ox>
                <IconButton sx={{ color: "white" }}>
                  <MoreVertIcon />
                </IconButton>
              </Box>
              <CardContent sx={{ position: "relative", minHeight: 120 }}>
                {card.due && (
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {card.due}
                  </Typography>
                )}
                {card.due && (
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {card.post}
                  </Typography>
                )}
                <Avatar
                  className="fs-2"
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
