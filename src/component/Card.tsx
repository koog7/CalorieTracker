import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

interface CardProps{
    reception: string;
    description: string;
    kcal: string  | null;
    OnDelete: (key: string) => void;
    cardKey: string;
}

const Card: React.FC<CardProps> = ({reception , description , kcal, cardKey, OnDelete}) => {

    const navigate = useNavigate()

    const navigateTo = () => {
        navigate(`/${cardKey}/edit`)
    }
    return (
        <div>
            <div style={{border: '1px solid white', padding: '10px', borderRadius: '5px', marginTop: '15px'}}>
                <div className={'card'} style={{display: 'flex', alignItems: 'center'}}>
                    <div>
                        <h2>{reception}</h2>
                        <h4>{description}</h4>
                    </div>
                    <div style={{marginLeft: 'auto'}}>
                        <p style={{marginRight: '50px', fontSize: '20px'}}>
                            {kcal} kcal
                        </p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                        <Button variant="outlined" sx={{
                            color: 'green', borderColor: 'green', '&:hover': {
                                color: 'white',
                                borderColor: 'white',
                            },
                        }} onClick={navigateTo}>Edit</Button>
                        <Button variant="outlined" sx={{
                            color: 'red', borderColor: 'red', '&:hover': {
                                color: 'white',
                                borderColor: 'white',
                            }
                        }} onClick={() => OnDelete(cardKey)}>Delete</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;