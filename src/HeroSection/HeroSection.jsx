import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import real from "../images/bg.jpg";
import real2 from "../images/bg.jpg";
import frontend from "../images/bg.jpg";
import bbot from "../images/bg.jpg";
import sindhi from "../images/bg.jpg";

const CardGrid = () => {
  const cards = [
    {
      title: "Web Development SO2",
      subtitle: "Cohort 2 - Kingri",
      team: "xWave Team",
      link: "/Web_Development_SO2",
      image: real,
    },
    {
      title: "Professional Development",
      subtitle: "Cohort 2 - Kingri",
      team: "xWave Team",
      link: "/Professional_Development",
      image: real2,
    },
    {
      title: "English Communication",
      subtitle: "Kingri C2",
      team: "xWave Team",
      link: "/English_Communication",
      image: real,
    },
    {
      title: "English 02",
      subtitle: "Kingri C2",
      team: "xWave Team",
      link: "/English_02",
      image: real,
    },
  ];

  return (
    <Grid
      className="container"
      container
      spacing={3}
      style={{ padding: "16px" }}
    >
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Link to={card.link} style={{ textDecoration: "none" }}>
            {" "}
            {/* Wrap with Link */}
            <Card
              className="border"
              sx={{
                backgroundImage: `url(${card.image})`, // Set the image as the background
                backgroundSize: "cover", // Ensure the image covers the entire card area
                backgroundPosition: "center", // Center the image inside the card
                color: "rgba(255, 255, 255, 0.9)", // Keep text color as white
                display: "flex",
                flexDirection: "column",
                height: "100%",
                cursor: "pointer",
                borderRadius: "10px",
              }}
            >
              <CardContent
                className="position-relative"
                sx={{ textAlign: "start" }}
              >
                <Box className="d-flex py-2 justify-content-between">
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: "bold",
                      "&:hover": {
                        textDecoration: "underline",
                        textDecorationColor: "white",
                        textDecorationThickness: "2px",
                        textUnderlineOffset: "1px",
                      },
                    }}
                  >
                    {card.title}
                  </Typography>

                  <MoreVertIcon />
                </Box>
                <Typography
                  className=""
                  variant="subtitle2"
                  sx={{ color: "#fff" }}
                >
                  {card.subtitle}
                </Typography>
                <Typography className="" variant="body2" sx={{ color: "#fff" }}>
                  {card.team}
                </Typography>

                <Typography
                  className="position-absolute top-50 end-0 translate-middle-y fs-2 mt-5 me-3 fw-normal"
                  sx={{
                    backgroundColor: "#7e57c2",
                    color: "white",
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 0,
                    fontSize: "1.5rem",
                  }}
                >
                  X
                </Typography>
              </CardContent>

              <Box
                sx={{
                  justifyContent: "center",
                  backgroundColor: "#ffff",
                  height: "180px",
                }}
              >
                <hr style={{ marginTop: "120px" }} className="text-black" />

                <CardActions className="d-flex justify-content-end align-items-center">
                  <Icon
                    className="fs-4 text-black mx-3"
                    icon="ic:outline-account-box"
                  />
                  <FolderOpenIcon className="text-black me-2" />
                </CardActions>
              </Box>
            </Card>
          </Link>{" "}
          {/* End Link */}
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGrid;
