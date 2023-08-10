/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Grid, Typography } from "@mui/material";

const Home = () => {
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
                        <Grid item xs={12} md={12}>
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
                        </Grid>
                        <Grid item xs={12} md={12}>
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
                        </Grid>
                        <Grid item xs={12} md={12}>
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
                        </Grid>
                        <Grid item xs={12} md={12}>
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
                        </Grid>
                        <Grid item xs={12} md={12}>
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
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Home;
