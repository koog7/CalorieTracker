import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";
import Card from "../component/Card.tsx";
import axiosAPI from "../axios/AxiosAPI.tsx";
import {useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import '../App.css';
interface Meal {
    reception: string;
    description: string;
    kcal: number | null;
}
const Home = () => {
    const [mealData, setMealData] = useState<Meal>(null);
    const [loader , setLoader] = useState(false)
    useEffect(() => {
        setLoader(true)
        axiosAPI.get('/meal.json')
            .then(response => {
                setMealData(response.data);
            })
        setLoader(false)
    }, []);

    const deleteCard = (key: string) => {
        setLoader(true)
        axiosAPI.delete(`/meal/${key}.json`).then(response => {
            if(response.status === 200){
                const oldMealData = { ...mealData };
                delete oldMealData[key];
                setMealData(oldMealData);
                toast.error('Meal deleted!');
            }
        })
        setLoader(false)
    }

    const totalKcal = () => {
        if (!mealData) return 0;
        return Object.values(mealData).reduce((total, meal) => {
            return total + (parseInt(meal.kcal, 10));
        }, 0);
    };

    return (
        <div>
            <div id="loader-container" style={{display: loader ? 'block' : 'none'}}>
                <div className="loader"></div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                <div>
                    <h3>Total Calories: {totalKcal()}</h3>
                </div>
                <div>
                    <NavLink className="nav-link" to="/edit"><Button variant="outlined">Add new meal</Button></NavLink>
                </div>
            </div>

            <ToastContainer/>

            {mealData ? (
                Object.entries(mealData).map(([key, data]) => (
                    <Card key={key} reception={data.reception} description={data.description} kcal={data.kcal}
                          cardKey={key} OnDelete={deleteCard}/>
                ))
            ) : (
                <div>Something gone wrong... or just empty</div>
            )}
        </div>
    );
};

export default Home;