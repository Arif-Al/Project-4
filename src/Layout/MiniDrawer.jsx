import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Button, Avatar, ButtonGroup } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { Icon } from "@iconify/react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import { Outlet, Link } from "react-router-dom";
import logo from "../components/assets/logo_meet_2020q4_color_1x_web_48dp.png";
import Profile from "../components/assets/profile.jpg";

const drawerWidth = 310;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  [theme.breakpoints.down("sm")]: {
    width: 0, // Fully hide on mobile screens
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  position: "fixed",
  width: "100%",
  backgroundColor: "white",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  [theme.breakpoints.up("sm")]: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  [theme.breakpoints.down("sm")]: {
    width: 0, // Fully hide on mobile screens
  },
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const iconList = [
  <Icon className="fs-3 mb-1" icon="material-symbols:home-outline" />,
  <CalendarTodayIcon />,
  <Icon className="fs-3 mb-1" icon="lineicons:graduation-cap-1" />,
  <ArchiveOutlinedIcon />,
  <SettingsIcon />,
];

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [showEnrolledOptions, setShowEnrolledOptions] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleEnrolledClick = () => {
    setShowEnrolledOptions(!showEnrolledOptions);
  };

  const getLetterAvatar = (text) => {
    const firstLetter = text.charAt(0).toUpperCase();
    return (
      <Avatar
        sx={{ bgcolor: theme.palette.primary.main, width: 32, height: 32 }}
      >
        {firstLetter}
      </Avatar>
    );
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            {!open && (
              <IconButton
                size="large"
                edge="start"
                color="black"
                aria-label="menu"
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
            )}
            {open && (
              <IconButton className="text-black" onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? <MenuIcon /> : <MenuIcon />}
              </IconButton>
            )}
            <Typography
              className="text-black d-flex align-items-center pe-4"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <img src={logo} className="img-fluid me-2" alt="logo" />
              Classroom
            </Typography>
            <ButtonGroup
              className="m-0"
              variant=""
              aria-label="Basic button group"
            >
              <Button className="m-0 p-0">
                <Icon className="fs-3 text-black" icon="mynaui:plus" />
              </Button>
              <Button className="m-0 p-0">
                <Icon className="fs-3 text-black" icon="mage:dots-menu" />
              </Button>
              <Button className="m-0 p-0 rounded-circle">
                <img src={Profile} className="img-fluid" alt="" />
              </Button>
            </ButtonGroup>
          </Toolbar>
        </AppBar>
      </Box>

      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer variant="permanent" open={open}>
          <DrawerHeader />
          <Divider />
          <List>
            {[
              "Home",
              "Calender",
              "Enrolled",
              "Archived classes",
              "Settings",
            ].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                {text === "Home" ? (
                  <Link className="text-decoration-none text-black" to="/">
                    <ListItemButton
                      sx={[
                        { minHeight: 48, px: 2.5 },
                        open
                          ? { justifyContent: "initial" }
                          : { justifyContent: "center" },
                      ]}
                    >
                      <ListItemIcon
                        sx={[
                          { minWidth: 0, justifyContent: "center" },
                          open ? { mr: 3 } : { mr: "auto" },
                        ]}
                      >
                        {iconList[index % iconList.length]}
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        sx={[open ? { opacity: 1 } : { opacity: 0 }]}
                      />
                    </ListItemButton>
                  </Link>
                ) : (
                  <ListItemButton
                    sx={[
                      { minHeight: 48, px: 2.5 },
                      open
                        ? { justifyContent: "initial" }
                        : { justifyContent: "center" },
                    ]}
                    onClick={
                      text === "Enrolled" ? handleEnrolledClick : undefined
                    }
                  >
                    <ListItemIcon
                      sx={[
                        { minWidth: 0, justifyContent: "center" },
                        open ? { mr: 3 } : { mr: "auto" },
                      ]}
                    >
                      {iconList[index % iconList.length]}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={[open ? { opacity: 1 } : { opacity: 0 }]}
                    />
                  </ListItemButton>
                )}
                {text === "Enrolled" && showEnrolledOptions && (
                  <Box sx={{ mt: 1, mr: "5" }}>
                    {[
                      { name: "EnglishO2", path: "/english-02" },
                      {
                        name: "Web Development SO2",
                        path: "/web-dev-frontend",
                      },
                      {
                        name: "Professional Development",
                        path: "/professional-development",
                      },
                      {
                        name: "English Communication",
                        path: "/English-Comunication",
                      },
                    ].map((option, i) => (
                      <ListItem
                        key={i}
                        disablePadding
                        sx={{ display: "block" }}
                      >
                        <Box>
                          <ListItemButton
                            sx={{ minHeight: 48, justifyContent: "initial" }}
                          >
                            <ListItemIcon
                              sx={{ minWidth: 0, justifyContent: "center" }}
                            >
                              {getLetterAvatar(option.name)}
                            </ListItemIcon>
                            <Link
                              to={option.path}
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              <Box className="position-relative my-2">
                                <ListItemText
                                  primary={option.name}
                                  sx={{ opacity: 1, ml: 4 }}
                                />
                              </Box>
                            </Link>
                          </ListItemButton>
                        </Box>
                      </ListItem>
                    ))}
                  </Box>
                )}
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>

        <Box component="main" sx={{ flexGrow: 1 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </>
  );
}

