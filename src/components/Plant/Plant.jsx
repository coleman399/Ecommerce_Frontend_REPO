import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap"

function Plant(props) {
  let formattedPrice = new Intl.NumberFormat("en-US", {
    style: 'currency',
    currency: 'USD'
  }).format(props.plantPrice);

  function handleOnClick() {
    props.getShoppingCart(props.user)
    props.shoppingCart.map(shoppingCart => {
      if (shoppingCart.plantId === props.plantId){
        let plant = {
          plantId: props.plantId,
          quantity: shoppingCart.quantity + 1,
          userId: props.user.userId
        }
        props.addToShoppingCart(plant)
      }      
    })    
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
                        <h6>Reviews:</h6> {props.plantReview}
                      </Card.Text>
                    <Button onClick={handleOnClick}variant="primary">Buy</Button>
                </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Plant;

