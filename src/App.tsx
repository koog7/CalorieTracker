import './App.css'
import Home from "./containers/Home.tsx";
import {Route, Routes} from "react-router-dom";


const App = () => {

    return(
        <>
            <div style={{backgroundColor: '#404040', width: '1000px', minHeight: '50px', padding: '2px'}}>
                <h3 style={{marginLeft: '10px'}}>Calorie Tracker</h3>
            </div>
            <hr/>
            <Routes>
                <Route path="/" element={(
                    <Home/>
                )}/>
            </Routes>
        </>
    )

};

export default App
