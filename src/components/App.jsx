import React, { Component } from 'react';
import Login from './Login/Login';
import Register from './Register/Register';
import Home from './Home/Home';
import NavBar from './NavBar/NavBar';
import NotFound from './NotFound/NotFound'
import SearchBar from './SearchBar/SearchBar';
import SellPlant from './SellPlant/SellPlant';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import jwt_decode from "jwt-decode";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
        }
    }

    logout = () => {
        localStorage.clear();
        window.location.href = "/";
    }

    registerUser = async (user) => {await axios.get({
        method: "POST",
        url: 'https://localhost:44394/api/authentication',
        data: {
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            password: user.password,
            email: user.email,
            phonenumber: user.phonenumber
        },
    });
    console.log(user)
    }

    getUser = async (user) => {
        const jwtToken = localStorage.getItem("token");
        var results = await axios({
        method: 'get',
        url: 'https://localhost:44394/api/examples/user/',
        headers: {Authorization: `Bearer ${jwtToken}`},
        });
    console.log(results)
    }
    
    componentDidMount() {
        const jwtToken = localStorage.getItem("token");
        try {
            const user = jwt_decode(jwtToken);
            this.setState({
                user
            })
        } catch (error) {
            console.log(error);
        }
    }
    
    render() {
        return (
            <Router>
                <Routes>
                    {console.log(this.state.user)}
                    <Route path="/home" element={() => {
                        if (!this.state.user){
                            return <Navigate to="/login"/>
                        } else {
                            return <Home user={this.state.user}/>
                        }
                    }}
                    />
                    <Route path="/home" element={<Home NavBar={<NavBar />} registerUser={this.registerUser} SearchBar={<SearchBar />} ShoppingCart= {<ShoppingCart />} SellPlant={<SellPlant />}/>}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="/login" element={<Login registerUser={this.registerUser}/>}/>
                    <Route path="/logout">{this.logout}</Route>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </Router>
        )
    }   
}

 
export default App;