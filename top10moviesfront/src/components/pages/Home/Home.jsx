import React, { useContext, useState, useRef, useCallback, useEffect } from 'react';
import MovieCard from '../../generic/MovieCard/MovieCard';
import Row from 'react-bootstrap/Row'
import Col  from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap';
import DetailsPopup from '../../generic/DetailsPopup/DetailsPopup';
import { ADD_MOVIE_FORM_ID, MOVIE_DETAILS_POPUP_ID, EDIT_MOVIE_FORM_ID } from '../../../Constants';
import './Home.css'
import { Store } from '../../../Store';
import MyDropDown from '../../generic/MyDropDown/MyDropDown';
import AddMovieForm from '../../forms/AddMovieForm/AddMovieForm';
import FormPopup from '../../generic/FormPopup/FormPopup';


const Home = () =>{

    const {movieCategories, movies, setFormPopupState} = useContext(Store);
    const [movieFilter, setMovieFilter] = useState([...movies]);

    useEffect(()=>{
        setMovieFilter([...movies]);
    },[movies]);

    const filterMovies = useCallback((value) =>{
    if(value !== 0)
        setMovieFilter(movies.filter(movie=>movie.movieCategoryId === parseInt(value)));
    else
        setMovieFilter([...movies]);
    
    },[movies]);

    return(
        <div className="home-page-container">
            <Container style={{maxWidth: '1700px'}}>
                <Button onClick={()=>{setFormPopupState([true, ADD_MOVIE_FORM_ID])}}>הוסף סרט</Button>
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
            <FormPopup id={ ADD_MOVIE_FORM_ID } formData={<AddMovieForm/>} title="טופס הוספת סרט"/>
            <FormPopup id={ EDIT_MOVIE_FORM_ID } formData={<AddMovieForm isEdit/>} title="טופס עריכת סרט"/>
        </div>
    );
}

export default Home;