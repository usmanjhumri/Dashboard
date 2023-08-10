/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Grid, Typography } from "@mui/material";
import AccordiansData from "./Accordian";

const Uber = () => {
    return (
        <div>
            <Box
                sx={{
                    // marginLeft: { md: "12rem", sm: "auto", xs: "auto" },
                    marginTop: { md: "2rem", sm: "auto", xs: "auto" },
                }}
            >
                <Container>
                    <Grid container>
                        {/* <Grid item xs={12} md={12}> */}
                        <Container>
                            <Container>
                                <Typography
                                    sx={{
                                        color: "#6f6e6f",
                                        fontSize: "32px",
                                        fontWeight: 600,
                                        // textAlign: "left"
                                    }}
                                >
                                    Today's rides
                                </Typography>
                            </Container>
                        </Container>
                        {/* </Grid> */}
                        {/* <Grid item xs={12} md={12}> */}
                        <Container>
                            <Container>
                                <Typography
                                    mt={4}
                                    sx={{
                                        color: "#000000",
                                        fontSize: "24px",
                                        fontWeight: 600,
                                    }}
                                >
                                    Awaiting Pickup
                                </Typography>
                            </Container>
                        </Container>
                        {/* </Grid> */}
                        {/* <Grid item xs={12} md={12}> */}
                        <Container>
                            <Container>
                                <Box
                                    mt={3}
                                    sx={{
                                        backgroundColor: "#909090",
                                        padding: "2rem",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            margin: "auto",
                                            textAlign: "center",
                                            color: "#212121",
                                            fontSize: "20px",
                                            fontWeight: 500
                                        }}
                                    >
                                        There is no ride awaiting pickup
                                    </Typography>
                                </Box>
                            </Container>
                        </Container>
                        {/* </Grid> */}
                        {/* <Grid item xs={12} md={12}> */}
                        <Container>
                            <Container>
                                <Typography
                                    mt={4}
                                    sx={{
                                        color: "#000000",
                                        fontSize: "24px",
                                        fontWeight: 600,
                                    }}
                                >
                                    In Progress
                                </Typography>
                            </Container>
                        </Container>
                        {/* </Grid> */}
                        {/* <Grid item xs={12} md={12}> */}
                        <Container>
                            <Container>
                                <Box
                                    mt={3}
                                    sx={{
                                        backgroundColor: "#909090",
                                        padding: "2rem",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            margin: "auto",
                                            textAlign: "center",
                                            color: "#212121",
                                            fontSize: "20px",
                                            fontWeight: 500
                                        }}
                                    >
                                        There is no ride in progress
                                    </Typography>
                                </Box>
                            </Container>
                        </Container>
                        {/* </Grid> */}
                        <Grid item xs={12} md={12} mt={4}>
                            <Container>
                                <Container>
                                    <Typography mt={4}
                                        sx={{
                                            color: "#000000",
                                            fontSize: "24px",
                                            fontWeight: 600,
                                        }}>
                                        Completed
                                    </Typography>
                                </Container>
                                <AccordiansData />
                            </Container>
                        </Grid>
                        <Container>
                            <Container>
                                <Typography
                                    mt={4}
                                    sx={{
                                        color: "#000000",
                                        fontSize: "24px",
                                        fontWeight: 600,
                                    }}
                                >
                                    Upcoming
                                </Typography>
                            </Container>
                        </Container>
                        <Container>
                            <Container>
                                <Box
                                    mt={3}
                                    mb={3}
                                    sx={{
                                        backgroundColor: "#909090",
                                        padding: "2rem",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            margin: "auto",
                                            textAlign: "center",
                                            color: "#212121",
                                            fontSize: "20px",
                                            fontWeight: 500
                                        }}
                                    >
                                        There are no upcoming rides
                                    </Typography>
                                </Box>
                            </Container>
                        </Container>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Uber;
