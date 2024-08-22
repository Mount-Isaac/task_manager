import { Button } from "@mui/material";

function Notes() {

    const handleClick = () => {
        const windows = window.location.pathname
        alert(`current path ${windows}`)
    }
    return ( 
        <div>
            <Button onClick={handleClick} variant="contained">Hello World</Button>
        </div>
     );
}

export default Notes;