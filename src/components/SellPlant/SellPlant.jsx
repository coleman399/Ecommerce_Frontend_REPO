import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const SellPlant = (props) => {
  const [plantName, setPlantName] = useState();
  const [plantPrice, setPlantPrice] = useState();
  const [plantDescription, setPlantDescription] = useState();
  const [plantCategory, setPlantCategory] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const  handleOnClick = () => {
    let plant = {
      plantName: plantName,
      plantPrice: plantPrice,
      plantDescription: plantDescription,
      plantRating: 5,
      plantCategory: plantCategory,
      userId: props.user.id
    }
    props.addPlant(plant);
    handleClose();
  }

  return (
    <div>
      <Button variant="primary" onClick={()=>handleShow()}>
        Sell a Plant
      </Button>
      <Modal show={show} onHide={()=>handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Plant Details:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="plantName">
              <Form.Label>Plant Name:</Form.Label>
              <Form.Control type="text" onChange={e => setPlantName(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="plantPrice">
              <Form.Label>Plant Price in Dollars:</Form.Label>
              <Form.Control type="text" onChange={e => setPlantPrice(e.target.value)}required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="plantDescription">
              <Form.Label>Plant Description:</Form.Label>
              <Form.Control type="text" onChange={e => setPlantDescription(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="plantCategory">
              <Form.Label>Plant Category:</Form.Label>
              <Form.Select aria-label="category">
                <option>Select a category:</option>
                <option value={()=>setPlantCategory("Indoor")}>Indoor</option>
                <option value={()=>setPlantCategory("Outdoor")}>Outdoor</option>
              </Form.Select>{" "}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>handleClose()}>
            Cancel
          </Button>
          <Button variant="primary" onClick={()=>handleOnClick()}>
            Submit Plant
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SellPlant;
