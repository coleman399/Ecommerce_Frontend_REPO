import React from "react";
import Plant from "../Plant/Plant";
import NavBar from "../NavBar/NavBar";
import {useState , useEffect} from "react";
import axios from "axios";

const Home = (props) => {
  const [plants, setPlants] = useState([]);
  
  useEffect(()=>{
    getPlants()
  },[])

  const getPlants = async () => {
    var results = await axios ({
      method : 'GET',
      url : 'https://localhost:44394/api/plant'
    })
    setPlants(results.data);
  }

  return (
    <div>
      <div className="container">
        <div className='row'>
          <nav className='col-lg-12'>
              <NavBar />
          </nav>
        </div>
      </div>
      <div className='container'>
        <div className="row">
          <div className="col-lg-6">
            {plants.map(plant => <Plant plantId={plant.plantId} plantName={plant.name} plantPrice={plant.price} plantDescription={plant.description} plantCategory={plant.category} plantReview={plant.review}/>)}
          </div>
          <div className="col-lg-6">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;