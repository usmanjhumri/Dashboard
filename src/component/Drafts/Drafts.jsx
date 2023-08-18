import { Box, Container, Grid } from "@mui/material"

const Drafts = () => {
    return (
        <>
            <Box mt={2} mb={2}>
                <Container>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <Box sx={{
                                width: "500px",
                                height: "600px",
                                border: "2px dashed #333",
                                padding: "10px",
                                overflow: "auto"
                            }}>
                                <Box sx={{
                                    background: "#eded",
                                    padding: "1rem"
                                }}>
                                    <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between"
                                    }}>

                                    </Box>

                                </Box>

                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}></Grid>
                    </Grid>
                </Container>
            </Box>

        </>
    )
}

export default Drafts