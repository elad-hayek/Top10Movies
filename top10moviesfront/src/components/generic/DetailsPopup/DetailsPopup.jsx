import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Store } from '../../../Store';
import './DetailsPopup.css'

const DetailsPopup = ({id}) =>{
    const {detailsPopupState, setDetailsPopupState, selectedMovie} = useContext(Store)

    return(
        <Modal show={detailsPopupState[0] && detailsPopupState[1] === id} onHide={()=>{setDetailsPopupState([false, ""])}}>
            <Modal.Header closeButton>
            <Modal.Title>{selectedMovie.Name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={()=>{setDetailsPopupState([false, ""])}}>
                Close
            </Button>
            <Button variant="primary" onClick={()=>{setDetailsPopupState([false, ""])}}>
                Save Changes
            </Button>
            </Modal.Footer>
      </Modal>
    );
}
 export default DetailsPopup;