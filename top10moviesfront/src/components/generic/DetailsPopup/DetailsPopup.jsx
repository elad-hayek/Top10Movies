import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Store } from '../../../Store';
import './DetailsPopup.css'
import { MdStar, MdStarOutline } from "react-icons/md";
import { EDIT_MOVIE_FORM_ID } from '../../../Constants';

const DisplayRank = ({rank}) =>{
    return (
        <span>
        {
            [...Array(rank)].map(()=>{
                return(
                    <MdStar key={Math.random()} style={{fontSize: 20}}/>
                );
            })
        
        }
        {
            [...Array(10 - rank)].map(()=>{
                return(
                    <MdStarOutline key={Math.random()} style={{fontSize: 20}} />
                );
            })
        }
        </span>
    );
}

const DetailsPopup = ({id}) =>{
    const {detailsPopupState, setDetailsPopupState, selectedMovie, movieCategories, setFormPopupState} = useContext(Store)

    const handleEdit = () =>{
        setDetailsPopupState([false, ""]);
        setFormPopupState([true, EDIT_MOVIE_FORM_ID]);
    };

    return(
        <Modal show={detailsPopupState[0] && detailsPopupState[1] === id} onHide={()=>{setDetailsPopupState([false, ""])}}>
            <Modal.Header closeButton>
            <Modal.Title>{selectedMovie.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <div>
                    <span className="movie-detail-header">קטגוריה: </span>
                    {movieCategories.find(x=>x.id === selectedMovie.movieCategoryId).name}
                </div>
                <div style={{marginTop: 20}}>
                    <span className="movie-detail-header">דירוג: </span>
                    <span className="rating-stars-container">
                        <DisplayRank rank={selectedMovie.rank}/>
                    </span>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={handleEdit}>
                ערוך
            </Button>
            </Modal.Footer>
      </Modal>
    );
}
 export default DetailsPopup;