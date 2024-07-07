import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";
import Card from "../component/Card.tsx";
import axiosAPI from "../axios/AxiosAPI.tsx";
import {useEffect, useState} from "react";

interface Meal {
    reception: string;
    description: string;
    kcal: number | null;
}
const Home = () => {
    const [mealData, setMealData] = useState<Meal | null>(null);
    useEffect(() => {
        axiosAPI.get('/meal.json')
            .then(response => {
                setMealData(response.data);
                console.log(mealData)
            })
    }, []);

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

            {mealData ? (
                Object.entries(mealData).map(([key, data]) => (
                    <Card key={key} reception={data.reception} description={data.description} kcal={data.kcal}/>
                ))
            ) : (
                <div>Something gone wrong... or just empty</div>
            )}
        </div>
    );
};

export default Home;