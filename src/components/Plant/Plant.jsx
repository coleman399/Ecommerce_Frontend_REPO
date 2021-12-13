import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap"
import Modal from "react-bootstrap/Modal"

function Plant(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [reviewTest, setReviewText] = useState('');
  let formattedPrice = new Intl.NumberFormat("en-US", {
    style: 'currency',
    currency: 'USD'
  }).format(props.plantPrice);

  useEffect(() => {
    props.getReviews();
  },[props.toggle])

  const handleOnClick = () => {
    props.getShoppingCart(props.user)
    props.shoppingCart.map(shoppingCart => {
      if (shoppingCart.plantId == props.plantId){
        let plant = {
          plantId: props.plantId,
          quantity: shoppingCart.quantity + 1,
          userId: props.user.userId
        }
        props.addToShoppingCart(plant)
      }      
    })    
  }

  const onClick = () => {
    
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
         <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title><strong>{props.plantName}</strong></Card.Title>
                      <Card.Text>
                        <h6>Price:</h6> {formattedPrice}
                        <h6>Description:</h6> {props.plantDescription}
                        <h6>Category:</h6> {props.plantCategory}
                        <h6>Average Rating:</h6> {props.plantRating}
                        <h6>Reviews:</h6> 
                        {/* <div>
                          {props.plantReviews.map(review => review.reviewText)}
                        </div> */}
                      </Card.Text>
                    <Button onClick={handleOnClick}variant="primary">Buy</Button>
                    <Button onClick={onClick}variant="primary">Leave a Review</Button>
                </Card.Body>
          </Card>
        {/* <Modal show={show} onHide={()=>handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="plantName">
              <Form.Label></Form.Label>
              <Form.Control type="textarea" onChange={e => setReviewText(e.target.value)} required/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>handleClose()}>
            Cancel
          </Button>
          <Button variant="primary" onClick={()=>OnClick()}>
            Submit Review
          </Button>
            </Modal.Footer>
          </Modal> */}
        </div>
      </div>
    </div>
  )
}

export default Plant;

