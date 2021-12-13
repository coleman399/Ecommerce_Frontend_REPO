import React, {useState, useEffect} from 'react';
import './SearchBar.css';
import axios from 'axios';


const SearchBar=(props)=>{
    const [filteredPlants, setFilteredPlants] = useState([]);
    const [userInput, setUserInput] =useState("");
    const [plants,setPlants] = useState([])
    const [searchResults, setSearchResults] =useState([]);

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
    
    const handleSearch = () => {
        plants.filter((plant) => {
            if(plant.name.includes(userInput)){
            
             setSearchResults(plant)
             
              
            }
        });
        console.log(searchResults)
        setFilteredPlants(searchResults);
    }


    return (
            <div><div className = "searchbar">
            <input type = "text" onChange = {(event) =>setUserInput(event.target.value)} />
            <button className = "searchbutton" onClick = {()=>handleSearch()}>&#128064;</button>
        
        {/* <div className="searchbar"
            {...filteredPlants.map((plant)=>{ 
            return(
                <div key={plant.id}>
                    {plant.name}
                </div>
                )})} /> */}
        </div></div>
    )
}                 
                    
export default SearchBar;