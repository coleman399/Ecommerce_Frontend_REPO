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
import jwtDecode from "jwt-decode"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            plants: [],
            reviews: [],
            purchases: [],
            shoppingCart: [],
            toggle:false
        }
    }
    
    componentDidMount() {
        const jwt = localStorage.getItem('token')
        try {
            const user = jwtDecode(jwt)
            this.setState({user})
            // this.getReviews();
            
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

    addPlant = async (plant) => {
        var results = await axios ({
            method: 'POST',
            url: "https://localhost:44394/api/plant",
            data : {
                name: plant.plantName,
                price: plant.plantPrice,
                description: plant.plantDescription,
                rating: plant.plantRating,
                category: plant.plantCategory,
                userId: plant.userId
            }
        })
        console.log(results.data);   
        this.setToggle();
    };

    setToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    addToShoppingCart = async (plant) => {
        var plantQuantity = parseInt(plant.quantity)
        var results = await axios ({
            method : 'POST',
            url : "https://localhost:44394/api/shoppingcart",
            data : {
                plantId: plant.plantId,
                quantity: plantQuantity,
                userId: plant.user
            }
        })
        console.log(results.data)
        console.log(plant)
    }

    getShoppingCart = async (user) => {
        var results = await axios ({
            method : 'GET',
            url : 'https://localhost:44394/api/shoppingcart',
            data : {
                userId: user.id
            }
        })
        console.log(results.data);
        this.setState({
            shoppingCart: results.data
        })
    }

    updateShoppingCart = async (plant) => {
        var results = await axios ({
            method: "PUT",
            url: "https://localhost:44394/api/shoppingcart",
            data: {
                plantId: plant.plantId,
                quantity: plant.plantQuantity + 1,
                userId: plant.userId
            }
        })
        console.log(results.data)
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
                                getShoppingCart={this.getShoppingCart}
                                addPlant={this.addPlant}
                                addToShoppingCart={this.addToShoppingCart}
                                logout={this.logout} 
                                toggle={this.state.toggle}
                                setToggle={this.setToggle}
                                user={this.state.user}
                                getReviews={this.getReviews}
                                reviews={this.state.reviews}
                                shoppingCart={this.state.shoppingCart}
                                updateShoppingCart={this.updateShoppingCart}
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