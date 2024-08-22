import { Button, Container, Typography } from "@mui/material";
import Person from "@mui/icons-material/Person";
import { KeyboardArrowRight } from "@mui/icons-material";

function Create() {
    const handleSave = () => {alert('clicked me.')}
    return ( 
        <Container>
            <Typography
                variant="h5"
                component="h2"
                color="textSecondary"
                align="center"
            >
                Create a New Note
            </Typography>

            <Button
                onClick={handleSave}
                type="submit"
                color="error"
                variant="contained"
                fontSize='md'
                endIcon={<KeyboardArrowRight/>}
            >Submit
            </Button>
            <Person color="white" fontSize="large"/>


        </Container>
     );
}

export default Create;