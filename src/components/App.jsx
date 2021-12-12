import React, { Component } from 'react';
import Login from './Login/Login';
import Home from './Home/Home';
import Register from './Register/Register';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            plants: [],
            reviews: [],
            purchases: [],
            shoppingCart: []
        }
    }
    
    componentDidMount() {
        try {
            // this.getUser(); For some reason this is causing an infinite loop. Need Help!
            this.getPlants();
            this.getReviews();
        } catch (error) {
            console.log(error);
        }
    }
    
    getUser = async () => {
        const jwtToken = localStorage.getItem("token");
        try {
            var results = await axios({
                method: 'GET',
                url: 'https://localhost:44394/api/examples/user',
                headers: {Authorization: `Bearer ${jwtToken}`},
            });
            console.log(results.data)
            this.setState({
                user: results.data
            })
        } catch (e) {
            console.log(e);
        }    
    }

    logout = () => {
        localStorage.clear();
        window.location.href = "/";
    }
    
    registerUser = async (user) => {await axios ({
        method: "POST",
        url: 'https://localhost:44394/api/authentication',
        data: {
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            password: user.password,
            email: user.email,
            phonenumber: user.phonenumber,
        },
    });
    console.log(user);
    }

    addPlant = async (plant) => {await axios ({
      method: 'POST',
      url: "https://localhost:44394/api/plant",
      data : {
        name: plant.name,
        price: plant.price,
        description: plant.description,
        rating: plant.rating,
        userId: plant.userId
      }
    })
    console.log(plant)
    this.getPlants()
    };

    getPlants = async () => {
        var results = await axios ({
            method: 'GET',
            url : "https://localhost:44394/api/plant",
        })
        console.log(results.data);
        this.setState({ 
            plants: results.data
        });
    }

    addToShoppingCart = async (plant) => {await axios ({
        method : 'POST',
        url : "https://localhost:44394/api/shoppingcart",
        data : {
            plantId: plant.plantId,
            quantity: plant.quantity,
            userId: plant.userId
        }
    })
    console.log(plant)
    }

    getShoppingCart = async (user) => {
        var results = await axios ({
        method : 'GET',
        url : 'https://localhost:44394/api/shoppingcart',
        data : {
            UserId: user.id
        }
    })
    console.log(results.data);
    this.setState({
        shoppingCart: results.data
    })
    }

    getReviews = async () => {
        var results = await axios ({
            method: 'GET',
            url: 'https://localhost:44394/api/review'
        })
        this.setState({
            reviews: results.data
        });
        console.log(results.data)
    } 
    
    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path="/" element={
                        !this.state.user ?
                            <Login 
                                login={this.login} 
                            />
                        :
                            <Home 
                                plants={this.state.plants}
                                getShoppingCart={this.getShoppingCart}
                                addPlant={this.addPlant} 
                                getPlants={this.getPlants}
                                addToShoppingCart={this.addToShoppingCart}
                                logout={this.logout} 
                            />       
                        }
                    />
                    <Route path="/register" element={
                        <Register 
                            registerUser={this.registerUser}
                        />}
                    />          
                    {/* <Route path="*" element={<NotFound />}/> */}
                </Routes>
            </Router>
        )
    }   
}

export default App;