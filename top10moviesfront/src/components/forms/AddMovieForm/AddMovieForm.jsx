import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';

import { Formik } from 'formik';
import * as yup from 'yup';
import { Store } from '../../../Store';
import { postData } from '../../../apiHandler';

const schema = yup.object().shape({
    name: yup.string().required("יש להזין שם סרט"),
    movieCategoryId: yup.number().required().notOneOf([null, 0], "יש לבחור קטגוריה לסרט"),
    rank: yup.number().required().notOneOf([null, 0], "יש לבחור דירוג לסרט"),
    imagePath: yup.string().required("יש להזין קישור לתמונה")
  });  

const AddMovieForm = ({isEdit}) =>{

    const {movieCategories, setFormPopupState, selectedMovie, setMovies} = useContext(Store)

    const submitForm = (data) =>{
        if(isEdit)
            postData(`movies?id=${selectedMovie.id}`, "PUT", data, setMovies, ()=>{}, ()=>{setFormPopupState([false,""])});
        else
            postData("movies", "POST", data, setMovies, ()=>{}, ()=>{setFormPopupState([false,""])});
    }

    return(
        <Formik
      validationSchema={schema}
      onSubmit={(values)=>{
        submitForm(values);
      }}
      initialValues={{
        name: isEdit?selectedMovie.name : "",
        movieCategoryId: isEdit?selectedMovie.movieCategoryId : 0,
        rank: isEdit?selectedMovie.rank : 0,
        imagePath: isEdit?selectedMovie.imagePath : ""
        }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
            <Form.Group as={Col} md="10" controlId="validationName">
              <Form.Label>שם</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    isInvalid={touched.name && errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            </Row>

            <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationRank">
              <Form.Label>קטגוריה</Form.Label>
              <InputGroup hasValidation>
                    <Form.Select
                        name="movieCategoryId"
                        value={values.movieCategoryId}
                        onChange={handleChange}
                        isInvalid={touched.movieCategoryId && errors.movieCategoryId}
                    >
                        <option key={Math.random()} value={0}>בחר</option>
                        {
                            movieCategories.map(category=>{
                                return(
                                    <option key={Math.random()} value={category.id}>{category.name}</option>
                                );
                            })
                        }
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        {errors.movieCategoryId}
                        </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
            

            
            <Form.Group as={Col} md="4" controlId="validationCategoryId">
                <Form.Label>דירוג</Form.Label>
                <InputGroup hasValidation>
                    <Form.Select
                        name="rank"
                        value={values.rank}
                        onChange={handleChange}
                        isInvalid={touched.rank && errors.rank}
                    >
                        <option key={Math.random()} value={0}>בחר</option>
                        {
                            [...Array(10)].map((x, i)=>{
                                return(
                                    <option key={Math.random()} value={i+1}>{i+1}</option>
                                );
                            })
                        }
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        {errors.rank}
                        </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
            </Row>

            <Row className="mb-5">
            <Form.Group as={Col} md="10" controlId="validationImagePath">
              <Form.Label>קישור לתמונה</Form.Label>
                <InputGroup hasValidation>
                    <Form.Control
                        type="text"
                        name="imagePath"
                        value={values.imagePath}
                        onChange={handleChange}
                        isInvalid={touched.imagePath && errors.imagePath}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.imagePath}
                        </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
            </Row>

            <Row className="mb-1">
                <Button type="submit">{isEdit?"אישור עריכה":"הוספה"}</Button>
            </Row>
            
        </Form>
      )}
    </Formik>
    );
}
 export default AddMovieForm;