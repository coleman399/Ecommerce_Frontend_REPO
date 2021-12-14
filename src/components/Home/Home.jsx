import React from "react";
import Plant from "../Plant/Plant";
import NavBar from "../NavBar/NavBar";
import {useState , useEffect} from "react";
import axios from "axios"

const Home = (props) => {
  const [plants, setPlants] = useState([])
  const [userInput, setUserInput] = useState("");
  const [filteredPlants, setFilteredPlants] = useState([]);
  
  useEffect(() =>{
    getPlants();
  },[props.toggle])

  const getPlants = async () => {
    var results = await axios ({
        method: 'GET',
        url : "https://localhost:44394/api/plant",
    })
    console.log(results.data);
    setPlants(results.data)
  }

  const handleSearch = () => {
    plants.filter(plant => {
      setFilteredPlants([]);
      if(plant.name.includes(userInput)) {  
          setFilteredPlants([plant])
          setUserInput("");
      }
      else {
        setUserInput("");
      }
    });
  }

  return (
    <div>
      <div className="container">
        <div className='row'>
          <nav className='col-lg-12'>
            <div className = "searchbar">
            <input type = "text" value={userInput}onChange={event => {setUserInput(event.target.value)}}
            />
            <button className = "searchbutton" onClick={()=>handleSearch()}>&#128064;</button>
            <button className = "resetbutton" onClick={()=>{setFilteredPlants([]); setUserInput("");}}>reset search</button>
            </div>
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
          <div className="col-lg-6">
            <h1>Plants for Sale</h1>
            {plants.length > 0 ?
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
                plantReviews={plant.reviews}
                plantQuantity={plant.quantity}
                plantRating={plant.rating}
                toggle={props.toggle}    
              />)
            : 
              "No Plants"
            } 
          </div>
          <div className="col-lg-6">
            <h1>Search Results</h1>
            {filteredPlants.length > 0 ?
              filteredPlants.map(plant => 
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
                plantReviews={plant.reviews}
                plantQuantity={plant.quantity}
                plantRating={plant.rating}
                toggle={props.toggle}    
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