import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Store } from '../../../Store';
import { MdStar, MdStarOutline } from "react-icons/md";


const FormPopup = ({id, title, onSubmitFunction, formData}) =>{
    const { formPopupState, setFormPopupState } = useContext(Store)

    return(
        <Modal show={formPopupState[0] && formPopupState[1] === id} onHide={()=>{setFormPopupState([false, ""])}}>
            <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                {formData}
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={()=>{setFormPopupState([false, ""])}}>
                ערוך
            </Button>
            </Modal.Footer>
      </Modal>
    );
}
 export default FormPopup;