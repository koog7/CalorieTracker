import {Button} from "@mui/material";

interface CardProps{
    reception: string;
    description: string;
    kcal: string  | null;
    OnDelete: (key: string) => void;
    cardKey: string;
}

const Card: React.FC<CardProps> = ({reception , description , kcal, cardKey, OnDelete}) => {

    return (
        <div>
            <div style={{border: '1px solid white', padding: '10px', borderRadius: '5px', marginTop:'15px'}}>
                <div className={'card'} style={{display: 'flex', alignItems: 'center'}}>
                    <div>
                        <p>{reception}</p>
                        <p>{description}</p>
                    </div>
                    <div style={{marginLeft: 'auto'}}>
                        <p style={{marginRight: '50px', fontSize: '20px'}}>
                            {kcal} kcal
                        </p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                        <Button variant="contained" sx={{backgroundColor: 'green'}}>Edit</Button>
                        <Button variant="contained" sx={{backgroundColor: 'red'}} onClick={() => OnDelete(cardKey)}>Delete</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;