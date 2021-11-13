import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card'
import { MOVIE_DETAILS_POPUP_ID } from '../../../Constants';
import { Store } from '../../../Store';
import './MovieCard.css'

const MovieCard = ({movie}) =>{

    const { setDetailsPopupState, setSelectedMovie } = useContext(Store)

    const handleClick = () =>{
        setDetailsPopupState([true, MOVIE_DETAILS_POPUP_ID]);
        setSelectedMovie(movie);
    };

    return(
        <Card className="bg-dark text-back" onClick={handleClick}>
            <Card.Img src={movie.imagePath} alt="Card image"/>
            <Card.ImgOverlay>
                <div className="fade-for-text">
                    <Card.Title>{movie.name}</Card.Title>
                </div>
            </Card.ImgOverlay>
        </Card>
    );
}
export default MovieCard;
