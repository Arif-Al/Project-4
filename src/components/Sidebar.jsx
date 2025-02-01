
// import React from "react";
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemIcon,
//   IconButton,
// } from "@mui/material";
// import HouseIcon from "@mui/icons-material/House";
// import SchoolIcon from "@mui/icons-material/School";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import PreviewIcon from "@mui/icons-material/Preview";
// import ArchiveIcon from "@mui/icons-material/Archive";
// import SettingsIcon from "@mui/icons-material/Settings";
// import CloseIcon from "@mui/icons-material/Close";
// import { Link } from "react-router-dom";
// const Sidebar = ({ open, toggleDrawer }) => {
//   return (
//     <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
//       <div
//         style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}
//       >
//         <IconButton onClick={toggleDrawer(false)}>
//           <CloseIcon />
//         </IconButton>
//       </div>
//       <List>
//         <ListItem button component={Link} to="/home">
//           <ListItemIcon>
//             <HouseIcon />
//           </ListItemIcon>
//           {open && <ListItemText primary="Home" />}
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon>
//             <CalendarTodayIcon />
//           </ListItemIcon>
//           {open && <ListItemText primary="Calendar" />}
//         </ListItem>
//         <hr />

//         <ListItem button>
//           <ListItemIcon>
//             <SchoolIcon />
//           </ListItemIcon>
//           {open && <ListItemText primary="Home" />}
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon>
//             <PreviewIcon />
//           </ListItemIcon>
//           {open && <ListItemText primary="To Do" />}
//         </ListItem>
//         <ListItem button component={Link} to="/english-02">
//           <ListItemIcon>
//             <span
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 width: "30px",
//                 height: "30px",
//                 borderRadius: "50%",
//                 backgroundColor: "#1976D2", // MUI primary blue
//                 color: "white",
//                 fontWeight: "bold",
//                 fontSize: "18px",
//               }}
//             >
//               E
//             </span>
//           </ListItemIcon>
//           {open && <ListItemText primary="English 02" />}
//         </ListItem>
//         <ListItem button >
//           <ListItemIcon>
//             {" "}
//             <span
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 width: "30px",
//                 height: "30px",
//                 borderRadius: "50%",
//                 backgroundColor: "#1976D2", // MUI primary blue
//                 color: "white",
//                 fontWeight: "bold",
//                 fontSize: "18px",
//               }}
//             >
//               W
//             </span>
//           </ListItemIcon>
//           {open && (
//             <ListItemText
//               primary="Web Dev Frontend S02"
//               secondary="Cohort 2 - Kingri"
//             />
//           )}
//         </ListItem>
//         <ListItem button component={Link} to="/professional-development">
//           <ListItemIcon>
//             <span
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 width: "30px",
//                 height: "30px",
//                 borderRadius: "50%",
//                 backgroundColor: "#1976D2", // MUI primary blue
//                 color: "white",
//                 fontWeight: "bold",
//                 fontSize: "18px",
//               }}
//             >
//               P
//             </span>
//           </ListItemIcon>
//           {open && (
//             <ListItemText
//               primary="Professional Development"
//               secondary="Cohort 2 - Kingri"
//             />
//           )}
//         </ListItem>
//         <ListItem button component={Link} to="/EnglishCommunication">
//           <ListItemIcon>
//             <span
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 width: "30px",
//                 height: "30px",
//                 borderRadius: "50%",
//                 backgroundColor: "#1976D2", // MUI primary blue
//                 color: "white",
//                 fontWeight: "bold",
//                 fontSize: "18px",
//               }}
//             >
//               E
//             </span>
//           </ListItemIcon>
//           {open && (
//             <ListItemText
//               primary="English Communication"
//               secondary="Cohort 2 - Kingri"
//             />
//           )}
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon>
//             <span
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 width: "30px",
//                 height: "30px",
//                 borderRadius: "50%",
//                 backgroundColor: "#1976D2", // MUI primary blue
//                 color: "white",
//                 fontWeight: "bold",
//                 fontSize: "18px",
//               }}
//             >
//               X
//             </span>
//           </ListItemIcon>
//           {open && <ListItemText primary="Xwave Digital Literacy (Sindhi)" />}
//         </ListItem>
//         <hr />
//         <ListItem button>
//           <ListItemIcon>
//             <ArchiveIcon />
//           </ListItemIcon>
//           {open && <ListItemText primary="Calendar" />}
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon>
//             <SettingsIcon />
//           </ListItemIcon>
//           {open && <ListItemText primary="Calendar" />}
//         </ListItem>
//       </List>
//     </Drawer>
//   );
// };

// export default Sidebar;
import React from 'react'
import MiniDrawer from '../Layout/MiniDrawer'

const Sidebar = () => {
  return (
    <div>Sidebar
<MiniDrawer/>

    </div>
  )
}

export default Sidebar