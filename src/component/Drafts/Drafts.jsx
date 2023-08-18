import React, { useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import LeftBox from "./LeftBox";

const Drafts = () => {
    const [rightBoxItems, setRightBoxItems] = useState(LeftBox);
    const [leftBoxItems, setLeftBoxItems] = useState([]);

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDragStart = (e, item) => {
        e.dataTransfer.setData('text/plain', item.text);
    };

    const handleDrop = (e) => {
        e.preventDefault();

        const rightBoxItem = e.dataTransfer.getData('text/plain');
        const droppedRightItem = rightBoxItems.find(item => item.text === rightBoxItem);

        if (droppedRightItem) {
            // const newLeftBoxItems = [...leftBoxItems];
            // newLeftBoxItems.splice(position, 0, droppedRightItem);

            setRightBoxItems(prev => prev.filter(item => item !== droppedRightItem));
            setLeftBoxItems(pre => [...pre, droppedRightItem]);
        }
    };

    return (
        <>
            <Box mt={2} mb={2}>
                <Container>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <Box sx={{
                                width: { md: "500px", sm: "auto", xs: "auto" },
                                height: { md: "600px", sm: "auto", xs: "auto" },
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
                                        justifyContent: "space-between",
                                        textAlign: "center"
                                    }}>
                                        <Box sx={{
                                            background: "#4e4e4e",
                                            width: "200px",
                                            height: "100px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"

                                        }}>
                                            box 1
                                        </Box>
                                        <Box sx={{
                                            background: "#4e4e4e",
                                            width: "200px",
                                            height: "100px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"

                                        }}>
                                            box 1
                                        </Box>

                                    </Box>

                                </Box>
                                <div
                                    onDrop={handleDrop}
                                    onDragOver={handleDragOver}
                                    style={{
                                        background: "#eded",
                                        padding: "1rem"
                                    }}>
                                    <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        textAlign: "center"
                                    }}>
                                        <Box sx={{
                                            background: "#4e4e4e",
                                            width: "200px",
                                            height: "100px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"

                                        }}>
                                            box 2
                                        </Box>


                                    </Box>

                                </div>
                                <Box sx={{
                                    background: "#eded",
                                    padding: "1rem"
                                }}>
                                    <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        textAlign: "center"
                                    }}>
                                        <Box sx={{
                                            background: "#4e4e4e",
                                            width: "200px",
                                            height: "100px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"

                                        }}>
                                            box 3
                                        </Box>


                                    </Box>

                                </Box>
                                <Box sx={{
                                    background: "#eded",
                                    padding: "1rem"
                                }}>
                                    <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        textAlign: "center"
                                    }}>
                                        <Box sx={{
                                            background: "#4e4e4e",
                                            width: "200px",
                                            height: "100px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"

                                        }}>
                                            box 4
                                        </Box>


                                    </Box>

                                </Box>
                                <Box sx={{
                                    background: "#eded",
                                    padding: "1rem"
                                }}>
                                    <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        textAlign: "center"
                                    }}>
                                        <Box sx={{
                                            background: "#4e4e4e",
                                            width: "200px",
                                            height: "100px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"

                                        }}>
                                            box 5
                                        </Box>


                                    </Box>

                                </Box>

                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>

                            <Box sx={{
                                width: { md: "500px", sm: "auto", xs: "auto" },
                                height: { md: "600px", sm: "auto", xs: "auto" },
                                border: "2px dashed #333",
                                padding: "10px",
                                overflow: "auto",
                                marginTop: { md: "auto", sm: 3, xs: 4 }
                            }}>

                                {rightBoxItems.map((item, index) => (
                                    <Box
                                        key={index}
                                        draggable
                                        onDragStart={(e) => handleDragStart(e, item)}
                                        sx={{
                                            background: "#eded",
                                            padding: "2rem"
                                        }}
                                    >

                                        <Box sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            textAlign: "center"
                                        }}>
                                            <Box sx={{
                                                background: "#4e4e4e",
                                                width: "200px",
                                                height: "100px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"

                                            }}>
                                                {item.text}
                                            </Box>


                                        </Box>



                                    </Box>
                                ))}

                            </Box>

                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </>
    )
}

export default Drafts