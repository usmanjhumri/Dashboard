/* eslint-disable react/prop-types */
import { Box, Button, Divider, Grid, Typography } from "@mui/material";

// import NavBar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
// import { useT heme } from "@emotion/react";
import SideBarArray from "./SidebarArray";
import Header from "../Header/Header";
const SideBar = ({ childComponent }) => {
  // const theme = useTheme();

  // const [state, setState] = useState({
  //   top: false,
  //   left: false,
  //   bottom: false,
  //   right: false,
  // });
  // const toggleDrawer = (anchor, open) => (event) => {
  //   if (
  //     event.type === "keydown" &&
  //     (event.key === "Tab" || event.key === "Shift")
  //   ) {
  //     return;
  //   }

  //   setState({ ...state, [anchor]: open });
  // };

  // const list = (anchor) => (
  //   <Box
  //     sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
  //     role="presentation"
  //     onClick={toggleDrawer(anchor, false)}
  //     onKeyDown={toggleDrawer(anchor, false)}
  //   >
  //     <List>
  //       {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
  //         // eslint-disable-next-line react/jsx-no-undef
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //     <Divider />
  //     <List>
  //       {["All mail", "Trash", "Spam"].map((text, index) => (
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );

  return (
    <>
      <Box>
        <Header />
        <Grid container>
          <Grid item xs={5} md={2}>
            <Box
              sx={{
                minWidth: "auto",
                padding: "1rem",

                borderTop: "none",
                // background: theme.primary.sideBarBg,
                borderRight: "1px solid rgba(200, 200, 200, 0.39)",
                // borderLeft: "1px solid rgba(200, 200, 200, 0.39)",
                // borderBottom: "1px solid rgba(200, 200, 200, 0.39)",
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
                All Stores
              </Typography>
              <Typography sx={{ fontWeight: 600, fontSize: "20px" }}>
                Uber Health
              </Typography>


              <Box>
                {SideBarArray.map((item) => {
                  return (
                    <>
                      <Link style={{ textDecoration: "none" }} to={item.to}>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>


                          <Typography
                            sx={{
                              fontSize: "14px",
                              fontWeight: 700,
                              // color: theme.typography.textColor1,
                            }}
                          >
                            {item.text1}
                          </Typography>

                          <Typography
                            sx={{
                              fontSize: "12px",
                              fontWeight: 400,
                              // color: theme.typography.textColor2,
                            }}
                          >
                            {item.text2}
                          </Typography>

                        </Box>
                      </Link>
                      <Divider
                        sx={{
                          background: "rgba(200, 200, 200, 0.39)",
                        }}
                      />
                    </>
                  );
                })}
              </Box>

              <Box mt={3} sx={{ textAlign: "center" }}>
                <Button
                  sx={{
                    width: "173px",
                    height: "39px",
                    borderRadius: "8px",
                    background: "#01C5BA",
                    textTransform: "capitalize",
                    color: "#FFFFFF",
                    marginBottom: "2rem",

                    "&:hover": {
                      background: "#01C5BA",
                    },
                  }}
                >
                  Show All
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={7} md={9}>
            {/* usman */}
            {childComponent}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SideBar;
