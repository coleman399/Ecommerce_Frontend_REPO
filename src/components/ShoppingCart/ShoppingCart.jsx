import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "react-sliding-pane/dist/react-sliding-pane.css";

const ShoppingCart = (props) => {
  const [show, setShow] = useState(false);
  const [plantNames, setPlantNames] = useState([]);
  const [plantQuantities, setPlantQuantities] = useState([]);
  const [plantPrices, setPlantPrices] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    props.shoppingCart.map(shoppingcart =>{
      setPlantNames(shoppingcart.plant.name);
      setPlantQuantities(shoppingcart.quantity);
      let formattedPrice = new Intl.NumberFormat("en-US", {
        style: 'currency',
        currency: 'USD'
      }).format(shoppingcart.plant.price);
      setPlantPrices(formattedPrice);
    })
  }

  return (
      <div>
        <Button variant="primary" onClick={()=>handleShow()}>
          Shopping Cart
        </Button>
          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Shopping Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Plant Name: {plantNames}
            <br />
            Quantity: {plantQuantities}
            <br/>
            Price Per Unit: {plantPrices}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>handleClose()}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
};

export default ShoppingCart;