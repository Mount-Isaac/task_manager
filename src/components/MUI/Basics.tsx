import { Button, ButtonGroup, Typography } from "@mui/material";
import Person from "@mui/icons-material/Person";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    btn:{
        fontSize:100,
        backgroundColor:'violet',
        height:50,
        width:50,
        borderRadius:5,
        border:'1px solid powderblue'
    }
})


function Basics() {
    return ( 
        <div>
            <Typography 
                variant="h5" 
                component="h2" 
                gutterBottom
                color="textSecondary"
                fontWeight='500'
                align="center"
            >
                Create a New Note
            </Typography>


            <Typography
                noWrap
            >
                The challenge in the KYC verification process is to make sure that 
                the data inputted by the users are correct. Thus, we need to ‘read’ 
                the data in the KTP Image and compare the KTP to the selfie photo. 
                A conventional way to do this is by having CS agents to manually 
                check the images. Unfortunately, it may require lots of time and 
                resources. Thus, we need to automate this process. As a note, 
                this article only focuses on the automation on extracting the data 
                from KTP image.
            </Typography>

            <Button variant="contained" color="primary">Login now.</Button>
            <Button  variant="outlined" color="secondary" type="submit">Submit</Button>

            <br/>
            <br/>

            <p>Button Group. Styling the Button Group Button, styles all other child buttons</p>
            <ButtonGroup color="info" variant="contained">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>

            <br/>
            <br/>
            <p>Import Icons</p>
            <Person color="white" fontSize="large"/>

            {/* using custom styles hook */}
            {/* one off customization */}
            <Button 
                sx={
                    {
                        width:200,
                        height:40,
                        backgroundColor:'blue',
                        color:'white'
                    }
                }
            >
                Styling
            </Button>
        </div>
     );
}

export default Basics;