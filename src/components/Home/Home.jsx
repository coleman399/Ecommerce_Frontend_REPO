import React from "react";
import Plant from "../Plant/Plant";
import NavBar from "../NavBar/NavBar";
import {useState , useEffect} from "react";
import axios from "axios"


const Home = (props) => {
  const [plants,setPlants] = useState([])

  useEffect(() =>{
    getPlants()
  },[props.toggle])

  const getPlants = async () => {
        var results = await axios ({
            method: 'GET',
            url : "https://localhost:44394/api/plant",
        })
        console.log(results.data);
        setPlants(results.data)
    }

  return (
    <div>
      <div className="container">
        <div className='row'>
          <nav className='col-lg-12'>
              <NavBar 
                user={props.user} 
                logout={props.logout} 
                addPlant={props.addPlant}
                plants={props.plants}
                toggle={props.toggle}
              />
          </nav>
        </div>
      </div>
      <div className='container'>
        <div className="row">
          <div className="col-lg-12">
            {!plants.length == 0 ? 
              plants.map(plant => 
              <Plant
                shoppingCart={props.shoppingCart}
                user={props.user} 
                getShoppingCart={props.getShoppingCart} 
                getReviews={props.getReviews}
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