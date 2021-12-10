import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const SellPlant = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Sell a Plant
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Plant Details:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Plant Name:</Form.Label>
              <Form.Control type="text" placeholder="Rose" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Plant Price in Dollars:</Form.Label>
              <Form.Control type="text" placeholder="40" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Plant Description:</Form.Label>
              <Form.Control type="text" placeholder="Thorny and red" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Plant Category:</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select a category:</option>
                <option value="1">Indoor</option>
                <option value="2">Outdoor</option>
              </Form.Select>{" "}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit Plant
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SellPlant;
