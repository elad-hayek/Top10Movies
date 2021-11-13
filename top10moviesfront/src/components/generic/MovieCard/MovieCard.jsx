import React from 'react';
import Card from 'react-bootstrap/Card'
import './MovieCard.css'

const MovieCard = ({movie}) =>{

    return(
        <Card border="dark" className="bg-dark text-back">
            <Card.Img src={movie.ImagePath} alt="Card image"/>
            <Card.ImgOverlay>
                <div class="fade-for-text">
                    <Card.Title>{movie.Name}</Card.Title>
                </div>
            </Card.ImgOverlay>
        </Card>
    );
}
export default MovieCard;
