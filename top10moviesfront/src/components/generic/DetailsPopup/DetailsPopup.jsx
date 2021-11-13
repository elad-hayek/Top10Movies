import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Store } from '../../../Store';
import './DetailsPopup.css'
import { MdStar, MdStarOutline } from "react-icons/md";

const DisplayRank = ({rank}) =>{
    return (
        <span>
        {
            [...Array(rank)].map(()=>{
                return(
                    <MdStar style={{fontSize: 20}}/>
                );
            })
        
        }
        {
            [...Array(10 - rank)].map(()=>{
                return(
                    <MdStarOutline style={{fontSize: 20}} />
                );
            })
        }
        </span>
    );
}


const DetailsPopup = ({id}) =>{
    const {detailsPopupState, setDetailsPopupState, selectedMovie, movieCategories} = useContext(Store)

    return(
        <Modal show={detailsPopupState[0] && detailsPopupState[1] === id} onHide={()=>{setDetailsPopupState([false, ""])}}>
            <Modal.Header closeButton>
            <Modal.Title>{selectedMovie.Name}</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <div>
                    <span className="movie-detail-header">קטגוריה: </span>
                    {movieCategories.find(x=>x.Id === selectedMovie.MovieCategoryId).Name}
                </div>
                <div style={{marginTop: 20}}>
                    <span className="movie-detail-header">דירוג: </span>
                    <span className="rating-stars-container">
                        <DisplayRank rank={selectedMovie.Rank}/>
                    </span>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={()=>{setDetailsPopupState([false, ""])}}>
                ערוך
            </Button>
            </Modal.Footer>
      </Modal>
    );
}
 export default DetailsPopup;