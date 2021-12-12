import React from "react";
import Plant from "../Plant/Plant";
import NavBar from "../NavBar/NavBar";
import {useState , useEffect} from "react";


const Home = (props) => {

  return (
    <div>
      <div className="container">
        <div className='row'>
          <nav className='col-lg-12'>
              <NavBar logout={props.logout}/>
          </nav>
        </div>
      </div>
      <div className='container'>
        <div className="row">
          <div className="col-lg-12">
            {!props.plants.length == 0 ? 
              props.plants.map(plant => 
              <Plant
                shoppingCart={props.shoppingCart}
                user={props.user} 
                getShoppingCart={props.getShoppingCart} 
                addToShoppingCart={props.addToShoppingCart} 
                plantId={plant.plantId} 
                plantName={plant.name} 
                plantPrice={plant.price} 
                plantDescription={plant.description} 
                plantCategory={plant.category} 
                plantReview={plant.review}
                plantQuantity={plant.quantity}
                plantRating={plant.rating} 
              />)
            : 
              "No Plants"
            } 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;