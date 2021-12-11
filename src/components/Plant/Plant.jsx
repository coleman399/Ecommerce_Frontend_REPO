import React from "react";
import { Card, Button } from "react-bootstrap"
import axios from "axios";
import { useState, useEffect } from "react";

function Plant(props) {
  let formattedPrice = new Intl.NumberFormat("en-US", {
    style: 'currency',
    currency: 'USD'
  }).format(props.plantPrice);
  const [shoppingCart, setShoppingCart] = useState();
  const [product, setProduct] = useState(); 

  useEffect(() => {
    getShoppingCart();
    getProduct();
  },[]);

  const getShoppingCart = async () => { 
    var results = await axios ({
      method : "GET",
      url : "https://localhost:44394/api/shoppingcart/" + props.user.shoppingCartId,
    })
    setShoppingCart(results.data)
    console.log(results.data)
  }

  const getProduct = async () => {
    var results = await axios ({
      method : "GET",
      url : "https://localhost:44394/api/product/" + shoppingCart.productId,
    })
    setProduct(results.data)
    console.log(results.data)  
  }

  function handleOnClick() {
    if (product.plantId==props.plantId) {
      const updateProduct = async () => {
        var results = await axios ({
          method: "PUT",
          url: "https://localhost:44394/api/product/" + product,
          data: {
            "PlantId": product.plantId,
            "Quantity": product.Quantity + 1 
          }
        });
        setProduct(results)
      }
      updateProduct();
    } else {
      const postProduct = async (props) => {
        var results = await axios ({
          method: "POST",
          url: "https://localhost:44394/api/product/",
          data: {
            "PlantId": props.plantId,
            "Quantity": 1
          }
        })
        setProduct(results)
      }
      postProduct();
    }
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
                        <h6>Average Rating:</h6>
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

