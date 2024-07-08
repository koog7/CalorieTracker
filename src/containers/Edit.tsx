import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Box, SelectChangeEvent } from '@mui/material';
import {ChangeEvent, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axiosAPI from "../axios/AxiosAPI.tsx";

interface Meal {
    reception: string;
    description: string;
    kcal: number | null;
}

const Edit = () => {

    const [mealInfo, setMealInfo] = useState<Meal>({
        reception: 'Breakfast',
        description: '',
        kcal: 0,
    });
    const navigate = useNavigate();
    const getReception = (event: SelectChangeEvent) => {
        setMealInfo({ ...mealInfo, reception: event.target.value});
    };
    const getDescription = (event: ChangeEvent<HTMLInputElement>) => {
        setMealInfo({ ...mealInfo, description: event.target.value });
    };
    const getKcal = (event: ChangeEvent<HTMLInputElement>) => {
        setMealInfo({ ...mealInfo, kcal: event.target.value as number});
    };

    useEffect(() => {
        console.log('Meal Info:', mealInfo);
    }, [mealInfo]);

    const postData = async () => {
        if(mealInfo.description.trim() !== '' && mealInfo.kcal !== null){
            await axiosAPI.post('/meal.json',mealInfo);
            await navigate('/')
        }
    }
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Add / Edit meal</h1>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 300, margin: '0 auto' }}>
                <FormControl fullWidth sx={{ color: 'white' }}>
                    <InputLabel sx={{ color: 'white' }}>Reception time</InputLabel>
                    <Select
                        value={mealInfo.reception}
                        onChange={getReception}
                        label="Reception time"
                        sx={{
                            '.MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                            '.MuiSelect-icon': { color: 'white' },
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
                    InputLabelProps={{ style: { color: 'white' } }}
                    sx={{
                        input: { color: 'white' },
                        '.MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                        '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                    }}
                />
                <TextField
                    fullWidth
                    value={mealInfo.kcal}
                    onChange={getKcal}
                    label="kcal"
                    variant="outlined"
                    type="number"
                    InputLabelProps={{ style: { color: 'white' } }}
                    sx={{
                        input: { color: 'white' },
                        '.MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                        '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
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
        </div>
    );
};

export default Edit;