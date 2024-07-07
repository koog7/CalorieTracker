import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Box } from '@mui/material';
const Edit = () => {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Add / Edit meal</h1>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 300, margin: '0 auto' }}>
                <FormControl fullWidth sx={{ color: 'white' }}>
                    <InputLabel sx={{ color: 'white' }}>Reception time</InputLabel>
                    <Select
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
                    label="kcal"
                    variant="outlined"
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