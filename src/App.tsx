import './App.css'
import Home from "./containers/Home.tsx";
import {NavLink, Route, Routes} from "react-router-dom";
import Edit from "./containers/Edit.tsx";


const App = () => {

    return(
        <>
            <div style={{backgroundColor: '#404040', width: '1000px', minHeight: '50px', padding: '2px'}}>
                <h3 style={{marginLeft: '10px'}}><NavLink className="nav-link" to="/" style={{textDecoration:'none', color:'white'}}>Calorie tracker</NavLink></h3>
            </div>
            <hr/>
            <Routes>
                <Route path="/" element={(
                    <Home/>
                )}/>
                <Route path="/edit" element={(
                    <Edit/>
                )}/>
                <Route path="/:id/edit" element={(
                    <Edit/>
                )}/>
            </Routes>
        </>
    )

};

export default App
