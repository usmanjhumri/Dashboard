
// import { useState } from "react";
// import { Box, Container, Grid } from "@mui/material";

// const Drafts = () => {
//     const [rightBoxItems, setRightBoxItems] = useState([

//         { text: "box 2" },
//         { text: "box 3" },
//         { text: "box 4" },
//         { text: "box 5" }
//     ]);
//     const [leftBoxRows, setLeftBoxRows] = useState([
//         [{ text: "box 1" }, { text: "box 1" }],
//         [{ text: "box 2" }],
//         [{ text: "box 3" }],
//         [{ text: "box 4" }],
//         [{ text: "box 5" }]
//     ]);

//     const handleDragOver = (e) => {
//         e.preventDefault();
//     };

//     const handleDragStart = (e, item) => {
//         e.dataTransfer.setData("text/plain", item.text);
//     };

//     const handleDrop = (e) => {
//         e.preventDefault();

//         const rightBoxItemText = e.dataTransfer.getData("text/plain");
//         const droppedRightItem = rightBoxItems.find(item => item.text === rightBoxItemText);

//         if (droppedRightItem) {
//             const emptySlotIndex = leftBoxRows.findIndex(row => row.some(item => item === null));

//             if (emptySlotIndex !== -1) {
//                 const rowIndex = emptySlotIndex;
//                 const colIndex = leftBoxRows[rowIndex].indexOf(null);

//                 setRightBoxItems(prev => prev.filter(item => item.text !== rightBoxItemText));
//                 setLeftBoxRows(prev => {
//                     const newLeftBoxRows = [...prev];
//                     newLeftBoxRows[rowIndex][colIndex] = droppedRightItem;
//                     return newLeftBoxRows;
//                 });
//             }
//         }
//     };


//     return (
//         <>
//             <Box mt={2} mb={2}>
//                 <Container>
//                     <Grid container>
//                         <Grid item xs={12} md={6}>
//                             <Box sx={{
//                                 width: { md: "500px", sm: "auto", xs: "auto" },
//                                 height: { md: "600px", sm: "auto", xs: "auto" },
//                                 border: "2px dashed #333",
//                                 padding: "10px",
//                                 overflow: "auto"
//                             }}>
//                                 {leftBoxRows.map((row, rowIndex) => (
//                                     <div
//                                         key={rowIndex}
//                                         className="left-line"
//                                         style={{
//                                             display: "flex",
//                                             justifyContent: "space-between",
//                                             marginBottom: "10px"
//                                         }}
//                                     >
//                                         {row.map((item, colIndex) => (
//                                             <Box
//                                                 key={colIndex}
//                                                 className="left-item"
//                                                 onDrop={(e) => handleDrop(e, rowIndex, colIndex)}
//                                                 onDragOver={handleDragOver}
//                                                 sx={{
//                                                     background: "#4e4e4e",
//                                                     width: "calc(50% - 5px)", // 50% width with spacing
//                                                     height: "100px",
//                                                     display: "flex",
//                                                     alignItems: "center",
//                                                     justifyContent: "center"
//                                                 }}
//                                             >
//                                                 {item.text}
//                                             </Box>
//                                         ))}
//                                     </div>
//                                 ))}
//                             </Box>
//                         </Grid>
//                         <Grid item xs={12} md={6}>
//                             <Box sx={{
//                                 width: { md: "500px", sm: "auto", xs: "auto" },
//                                 height: { md: "600px", sm: "auto", xs: "auto" },
//                                 border: "2px dashed #333",
//                                 padding: "10px",
//                                 overflow: "auto",
//                                 marginTop: { md: "auto", sm: 3, xs: 4 }
//                             }}>
//                                 {rightBoxItems.map((item, index) => (
//                                     <Box
//                                         key={index}

//                                         sx={{
//                                             background: "#eded",
//                                             padding: "2rem",
//                                             marginBottom: "10px"
//                                         }}
//                                     >
//                                         <Box
//                                             draggable
//                                             onDragStart={(e) => handleDragStart(e, item)}
//                                             sx={{
//                                                 background: "#4e4e4e",
//                                                 width: "200px",
//                                                 height: "100px",
//                                                 display: "flex",
//                                                 alignItems: "center",
//                                                 justifyContent: "center"
//                                             }}>
//                                             {item.text}
//                                         </Box>
//                                     </Box>
//                                 ))}
//                             </Box>
//                         </Grid>
//                     </Grid>
//                 </Container>
//             </Box>
//         </>
//     );
// }

// export default Drafts;





import { useState } from "react";
import { Box, Container, Grid } from "@mui/material";

const Drafts = () => {
    const [rightBoxItems, setRightBoxItems] = useState([
        { text: "box 2" },
        { text: "box 3" },
        { text: "box 4" },
        { text: "box 5" }
    ]);

    const [leftBoxRows, setLeftBoxRows] = useState([
        [{ text: "box 1" }, { text: "box 1" }],
        [{ text: "box2" }],
        [{ text: "box3" }],
        [{ text: "box4" }],
        [{ text: "box5" }]
    ]);

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDragStart = (e, item) => {
        e.dataTransfer.setData("text/plain", item.text);
    };

    const handleDrop = (e, rowIndex, colIndex) => {
        e.preventDefault();

        const rightBoxItemText = e.dataTransfer.getData("text/plain");
        const droppedRightItem = rightBoxItems.find(item => item.text === rightBoxItemText);

        if (droppedRightItem) {
            setRightBoxItems(prev => prev.filter(item => item.text !== rightBoxItemText));
            // setLeftBoxRows(pre => [...pre, droppedRightItem])

            setLeftBoxRows(prev => {
                const newLeftBoxRows = [...prev];
                newLeftBoxRows[rowIndex][colIndex] = droppedRightItem;
                return newLeftBoxRows;
            });
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
                                {leftBoxRows.map((row, rowIndex) => (
                                    <div
                                        key={rowIndex}
                                        className="left-line"
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            marginBottom: "10px"
                                        }}
                                    >
                                        {row.map((item, colIndex) => (
                                            <div
                                                key={colIndex}
                                                className="left-item"
                                                onDrop={(e) => handleDrop(e, rowIndex, colIndex)}
                                                onDragOver={handleDragOver}
                                                style={{
                                                    background: "#4e4e4e",
                                                    width: "calc(50% - 5px)", // 50% width with spacing
                                                    height: "100px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}
                                            >
                                                {item && item.text}
                                            </div>
                                        ))}
                                    </div>
                                ))}
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

                                        sx={{
                                            background: "#eded",
                                            padding: "2rem",
                                            marginBottom: "10px"
                                        }}
                                    >
                                        <Box
                                            draggable
                                            onDragStart={(e) => handleDragStart(e, item)}
                                            sx={{
                                                background: "#4e4e4e",
                                                width: "200px",
                                                height: "100px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                        >
                                            {item.text}
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default Drafts;


