
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Container, Grid } from '@mui/material';

const AccordiansData = () => {
    return (
        <>
            <Box mt={5}>
                <Container>
                    <Grid container>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Accordion 1</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Container>
            </Box>


        </>
    );
}

export default AccordiansData


// ik navigation link bnana hai profile setting ka.

// usmy apny

// firstname,lastname,email,
// / DocuSign ( heading)
// Connect aur disconnect ka button