import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal'
import { Store } from '../../../Store';


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
      </Modal>
    );
}
 export default FormPopup;