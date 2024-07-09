import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Box, SelectChangeEvent } from '@mui/material';
import {ChangeEvent, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axiosAPI from "../axios/AxiosAPI.tsx";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Meal {
    reception: string;
    description: string;
    kcal: number | null;
}

const Edit = () => {

    const [mealInfo, setMealInfo] = useState<Meal>({
        reception: 'Breakfast',
        description: '',
        kcal: 1,
    });
    const [loader , setLoader] = useState(false)
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            setLoader(true)
            axiosAPI.get(`/meal/${id}.json`)
                .then(response => {
                    setMealInfo(response.data);
                })
            setLoader(false)
        }
    }, [id]);
    const getReception = (event: SelectChangeEvent) => {
        setMealInfo({ ...mealInfo, reception: event.target.value});
    };
    const getDescription = (event: ChangeEvent<HTMLInputElement>) => {
        setMealInfo({ ...mealInfo, description: event.target.value });
    };
    const getKcal = (event: ChangeEvent<HTMLInputElement>) => {
        setMealInfo({ ...mealInfo, kcal: event.target.value as number});
    };

    const postData = async () => {
        if(mealInfo.description.trim() !== '' && mealInfo.kcal !== null){
            if(id){
                setLoader(true)
                await axiosAPI.put(`/meal/${id}.json`,mealInfo);
                setLoader(false)
                toast.success('Meal updated successfully!');
            }else{
                setLoader(true)
                await axiosAPI.post('/meal.json',mealInfo);
                setLoader(false)
                await toast.success('Meal added successfully!', {autoClose: 2000,});
                setTimeout(() => {
                    navigate('/');
                }, 2500);
            }

        }
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Add / Edit meal</h1>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 300, margin: '0 auto'}}>
                <FormControl fullWidth sx={{color: 'white'}}>
                    <InputLabel sx={{color: 'white'}}>Reception time</InputLabel>
                    <Select
                        value={mealInfo.reception}
                        onChange={getReception}
                        label="Reception time"
                        sx={{
                            '.MuiOutlinedInput-notchedOutline': {borderColor: 'white'},
                            '&:hover .MuiOutlinedInput-notchedOutline': {borderColor: 'white'},
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {borderColor: 'white'},
                            '.MuiSelect-icon': {color: 'white'},
                            color: 'white',
                        }}
                    >
                        <MenuItem value="Breakfast">Breakfast</MenuItem>
                        <MenuItem value="Snack">Snack</MenuItem>
                        <MenuItem value="Lunch">Lunch</MenuItem>
                        <MenuItem value="Dinner">Dinner</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    fullWidth
                    value={mealInfo.description}
                    onChange={getDescription}
                    label="Meals"
                    variant="outlined"
                    InputLabelProps={{style: {color: 'white'}}}
                    sx={{
                        input: {color: 'white'},
                        '.MuiOutlinedInput-notchedOutline': {borderColor: 'white'},
                        '&:hover .MuiOutlinedInput-notchedOutline': {borderColor: 'white'},
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {borderColor: 'white'},
                    }}
                />
                <TextField
                    fullWidth
                    value={mealInfo.kcal}
                    onChange={getKcal}
                    label="kcal"
                    variant="outlined"
                    type="number"
                    InputLabelProps={{style: {color: 'white'}}}
                    sx={{
                        input: {color: 'white'},
                        '.MuiOutlinedInput-notchedOutline': {borderColor: 'white'},
                        '&:hover .MuiOutlinedInput-notchedOutline': {borderColor: 'white'},
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {borderColor: 'white'},
                    }}
                />
                <Button
                    variant="contained"
                    onClick={postData}
                    sx={{
                        backgroundColor: 'white',
                        color: 'black',
                        '&:hover': {
                            backgroundColor: '#e0e0e0',
                        },
                    }}
                >
                    Submit
                </Button>
            </Box>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ToastContainer/>
            <div id="loader-container" style={{display: loader ? 'block' : 'none'}}>
                <div className="loader"></div>
            </div>
        </div>
    );
};

export default Edit;