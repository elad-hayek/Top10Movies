import React, { useState } from 'react';
import MovieCard from '../../generic/MovieCard/MovieCard';
import Row from 'react-bootstrap/Row'
import Col  from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

const Home = () =>{
    const [movies, setMovies] = useState([
        {
          "Id": "1789e4c1-b8ef-4a21-87a9-60f4819ef045",
          "Name": "אייפל",
          "MovieCategoryId": 0,
          "Rank": 7,
          "ImagePath": "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
        },
        {
          "Id": "8254e466-54ea-441d-b4cb-28b8cc92d1f5",
          "Name": "testtest",
          "MovieCategoryId": 0,
          "Rank": 8,
          "ImagePath": "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
        },
        {
          "Id": "f035e060-327c-4182-ad6c-60e56b6b2846",
          "Name": "testtestaa",
          "MovieCategoryId": 0,
          "Rank": 9,
          "ImagePath": "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
        },
        {
          "Id": "723e53b5-5052-4d39-af52-d7a61a37ce1c",
          "Name": "6yt890",
          "MovieCategoryId": 1,
          "Rank": 10,
          "ImagePath": "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
        },
        {
          "Id": "a584fd34-dbba-4aa5-8998-eee787f1a2f8",
          "Name": "hgtfgyasdsa",
          "MovieCategoryId": 0,
          "Rank": 1,
          "ImagePath": "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
        },
        {
          "Id": "6859abde-624f-4c65-bb88-673dbf198ac9",
          "Name": "hgtsdfsddyasdsa",
          "MovieCategoryId": 0,
          "Rank": 2,
          "ImagePath": "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
        },
        {
          "Id": "2594e75a-ef2e-4575-9c37-34bf4a304eb2",
          "Name": "qkmn",
          "MovieCategoryId": 0,
          "Rank": 3,
          "ImagePath": "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
        },
        {
          "Id": "86bd1ea7-c622-477d-bb41-763e19bad90c",
          "Name": "elad7new",
          "MovieCategoryId": 0,
          "Rank": 4,
          "ImagePath": "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
        },
        {
          "Id": "d10c43ac-41ce-4517-87ba-ddc66a3h54s8",
          "Name": "elad10",
          "MovieCategoryId": 0,
          "Rank": 5,
          "ImagePath": "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
        },
        {
          "Id": "e5edaf8d-e99d-4f11-bf82-28017d350e91",
          "Name": "11122344a",
          "MovieCategoryId": 0,
          "Rank": 6,
          "ImagePath": "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
        }
      ])

    return(
        <Container style={{maxWidth: '1700px'}}>
            <Row xs={1} sm={1} md={2} lg={3} xxl={5} className="g-4">
                {
                    movies.map(movie=>{
                        return(
                            <Col>
                                <MovieCard movie={movie}/>
                            </Col>
                        );
                    })
                }
            </Row>
        </Container>
    );
}

export default Home;