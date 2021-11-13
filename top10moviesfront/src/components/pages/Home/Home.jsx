import React, { useContext, useState, useRef, useCallback } from 'react';
import MovieCard from '../../generic/MovieCard/MovieCard';
import Row from 'react-bootstrap/Row'
import Col  from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import DetailsPopup from '../../generic/DetailsPopup/DetailsPopup';
import { MOVIES, MOVIE_DETAILS_POPUP_ID } from '../../../Constants';
import './Home.css'
import { Store } from '../../../Store';
import MyDropDown from '../../generic/MyDropDown/MyDropDown';

const Home = () =>{

    const {movieCategories, movies} = useContext(Store);
    const [movieFilter, setMovieFilter] = useState([...movies]);

      const filterMovies = useCallback((value) =>{
        if(value !== 0)
            setMovieFilter(movies.filter(movie=>movie.movieCategoryId === parseInt(value)));
        else
            setMovieFilter([...movies]);
        
      },[movies]);

    return(
        <div className="home-page-container">
            <Container style={{maxWidth: '1700px'}}>
                <MyDropDown items={movieCategories} title="קטגוריה" updateFunction={filterMovies}/>
                <div>
                <Row xs={1} sm={1} md={2} lg={3} xxl={5} className="g-4">
                    {
                        movieFilter.map(movie=>{
                            return(
                                <Col key={Math.random()}>
                                    <MovieCard movie={movie}/>
                                </Col>
                            );
                        })
                    }
                </Row>
                </div>
            </Container>
            
            <DetailsPopup id={ MOVIE_DETAILS_POPUP_ID }/>
        </div>
    );
}

export default Home;