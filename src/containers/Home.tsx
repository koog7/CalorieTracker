import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                <div>
                    <h3>Total Calories: {123}</h3>
                </div>
                <div>
                    <NavLink className="nav-link" to="/edit"><Button variant="outlined">Add new meal</Button></NavLink>
                </div>
            </div>
            <div style={{border: '1px solid white', padding:'10px',borderRadius:'5px'}}>
                <div className={'card'} style={{display:'flex', alignItems: 'center'}}>
                    <div>
                        <p>Reception time</p>
                        <p>Type meal</p>
                    </div>
                    <div style={{marginLeft:'auto'}}>
                        <p style={{marginRight:'50px', fontSize:'20px'}}>
                            {600} call
                        </p>
                    </div>
                    <div style={{display:'flex',flexDirection:'column', gap:'10px'}}>
                        <Button variant="contained" sx={{backgroundColor:'green'}}>Edit</Button>
                        <Button variant="contained" sx={{backgroundColor:'red'}}>Delete</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;