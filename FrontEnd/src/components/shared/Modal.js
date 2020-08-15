import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Button } from "react-bootstrap";

 
const  ReactModal=(props)=>{
 
    return (
      <div>
        <Modal
          isOpen={props.modalIsOpen}
          onAfterOpen={props.afterOpenModal}
          onRequestClose={props.closeModal}
          style={props.customStyles}
          contentLabel="Example Modal"
        >
            <props.OfferRideDetails/>
        </Modal>
      </div>
    );
}

export default ReactModal;