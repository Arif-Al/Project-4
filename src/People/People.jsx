import React from "react";
import {
  Grid,
  Typography,
  Avatar,
  Card,
  CardContent,
  Link,
} from "@mui/material";
import Layout from "../Layout/Layout";
import sir from "../images/meet.png";
import maam from "../images/meet.png";

const teachers = [
  { name: "xWave Team", avatar: "X" }, // Use "X" for avatar text
  { name: "Ijaz Liaqat", avatar: sir }, // Use image for avatar
  { name: "Kainat Fareed", avatar: maam }, // Use image for avatar
];

const classmates = [
  { name: "Asadullah", avatar: "A" }, // Use text for avatar
  { name: "Ayaz ", avatar: "A" }, // Use text for avatar
  { name: "Sanaullah", avatar: "S" }, // Use text for avatar
  { name: "Ahsan Ali", avatar: "A" }, // Use text for avatar
  { name: "Sameer", avatar: "S" }, // Use text for avatar
  { name: "Muhammed Faiz", avatar: "M" }, // Use text for avatar
  { name: "Hira Memon", avatar: "H" }, // Use text for avatar
  { name: "Salar Ahmed", avatar: "S" }, // Use text for avatar
];

const ListItem = ({ name, avatar }) => (
  <Card
    variant="outlined"
    sx={{ display: "flex", alignItems: "center", padding: 1, boxShadow: 0 }}
  >
    {/* If avatar is text, use Avatar component; if image, render an img */}
    {avatar && avatar.length === 1 ? (
      <Avatar sx={{ width: 30, height: 30, bgcolor: "primary.main" }}>
        {avatar}
      </Avatar>
    ) : (
      <Avatar src={avatar} sx={{ width: 30, height: 30 }} />
    )}
    <Typography sx={{ marginLeft: 2 }}>{name}</Typography>
  </Card>
);

const People = () => {
  return (
    <>
      <Layout />

      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ maxWidth: 600, margin: "auto" }}
      >
        {/* Teachers Section */}
        <Grid item xs={12}>
          <Typography variant="h5">Teachers</Typography>
        </Grid>
        {teachers.map((teacher, index) => (
          <Grid item xs={12} key={index}>
            <ListItem name={teacher.name} avatar={teacher.avatar} />
          </Grid>
        ))}
        <Grid item xs={12} textAlign="center">
          <Link href="#" underline="hover" color="primary">
            View all
          </Link>
        </Grid>

        {/* Classmates Section */}
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Classmates</Typography>
          <Typography variant="body2" color="text.secondary">
            34 students
          </Typography>
        </Grid>
        {classmates.map((classmate, index) => (
          <Grid item xs={12} key={index}>
            <ListItem name={classmate.name} avatar={classmate.avatar} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default People;
