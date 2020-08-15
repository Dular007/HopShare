import React from "react";
import { Button } from "react-bootstrap";
import ReactModal from '../shared/Modal';

const OfferRideDetails =()=>{
    return (
        <>
          <h4> <label>Extra Helmet or Pillion Rider</label></h4>
          <div className="offer-ride__body">
          <button className="offer-car__btn"><i class="fa fa-car"></i> Car</button>
          <button className="offer-car__btn"><i class="fa fa-motorcycle"></i> Bike</button>
          <select class="car-type">
                                    <option selected>Hatch Back</option>
                                    <option>Sedan</option>
                                    <option>SUV</option>
                                    <option>Premium</option>
                                  </select>
                                  <input type="number" class="form-control" name="registration" placeholder="Registration No."/>
                            <Button className="modal-btn">Continue</Button>
                            <Button className="modal-btn">Cancel</Button>
          </div>
        </>
    )
}






const OfferRideModal = () => {
    const customStyles = {
        content : {
          top                   : '65%',
          left                  : '16%',
          right                 : '60',
          bottom                : '8%',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          width                  : '470px',
          height : '420px'
        }
      };
    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const openModal=()=> {
      setIsOpen(true);
    }
   
    const afterOpenModal=()=> {
      // references are now sync'd and can be accessed.
    //   subtitle.style.color = '#f00';
    }
   
    const closeModal=()=>{
      setIsOpen(false);
    }
  return (
    <>
      <Button className="ride-car" onClick={openModal}>
        <i className="fa fa-users"></i> | Offer Rides
      </Button>

      <ReactModal 
      modalIsOpen={modalIsOpen}
       afterOpenModal={afterOpenModal}
        closeModal={closeModal}
        customStyles={customStyles}
        OfferRideDetails={OfferRideDetails}
        />
    </>
  );
};

export default OfferRideModal;
