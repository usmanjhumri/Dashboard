/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { SideBarArray, SideBarArray2 } from "./SidebarArray";
import Header from "../Header/Header";
const SideBar = ({ childComponent }) => {
  const [open, setOpen] = useState([]);

  const ToggleOpen = (index) => {

    if (open.includes(index)) {
      setOpen(!open)
      setOpen(open.filter(item => item !== index))
    } else {
      setOpen([index])
    }
  }

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
                borderRight: "1px solid rgba(200, 200, 200, 0.39)",
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
                All Stores
              </Typography>
              <Typography sx={{ fontWeight: 600, fontSize: "20px" }}>
                Uber Health
              </Typography>

              <Box mt={2}>
                <Button
                  sx={{
                    background: "#000000",
                    color: "#FFFFFF",
                    padding: { md: "5px 3.3rem", sm: "auto", xs: "auto" },
                    "&:hover": {
                      background: "#000000",
                    },
                  }}
                >
                  + New ride
                </Button>
              </Box>
              <Box mt={5} mb={4}>

                {SideBarArray.map((item, index) => {
                  return (
                    <>
                      <Box key={index}>
                        <Box onClick={() => ToggleOpen(index)}>
                          <Link style={{ textDecoration: "none" }} to={item.to}>
                            <Box
                              mt={3}
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >

                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  fontWeight: 700,
                                  color: "#000000",
                                }}
                              >
                                {item.text1}
                              </Typography>

                              <Typography
                                sx={{
                                  fontSize: "16px",
                                  fontWeight: 600,
                                  color: "#000000",
                                }}
                              >
                                {item.text2}
                              </Typography>
                            </Box>
                          </Link>
                          {item.childerns && open.includes(index) && (
                            <Box mt={2} pl={2}>
                              {item.childerns.map((child, childIndex) => (
                                <Link
                                  onClick={() => setOpen(!open)}
                                  key={childIndex}
                                  to={child.to}
                                  style={{
                                    textDecoration: "none",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between"
                                  }}
                                >

                                  <Typography
                                    mt={2}
                                    key={childIndex}
                                    sx={{
                                      fontSize: "14px",
                                      fontWeight: 600,
                                      color: "#000000",
                                    }}
                                  >
                                    {child.text1}
                                  </Typography >
                                  <Typography mt={2} sx={{
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    color: "#000000",
                                  }}>{item.text2}</Typography>
                                </Link>
                              ))}
                            </Box>
                          )}
                        </Box>
                      </Box>
                    </>
                  );
                })}
              </Box>

              <Divider
                mt={4}
                sx={{
                  background: "rgba(200, 200, 200, 0.39)",
                }}
              />

              <Box mt={4}>
                {SideBarArray2.map((item) => {
                  return (
                    <>
                      <Typography
                        mt={2}
                        sx={{
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "#000000",
                        }}
                      >
                        {item.text}
                      </Typography>

                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <Box>{item.icon}</Box>

                        <Typography
                          sx={{
                            fontSize: "16px",
                            fontWeight: 600,
                          }}
                        >
                          <a
                            href="#"
                            style={{
                              color: "#000000",
                            }}
                          >
                            {item.title}
                          </a>
                        </Typography>
                      </Box>
                    </>
                  );
                })}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={7} md={10} sx={{ background: "#f7f5f7" }}>
            <Container>{childComponent}</Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SideBar;
