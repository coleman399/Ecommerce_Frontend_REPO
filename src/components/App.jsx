import React, { Component } from 'react';
import Login from './Login/Login';
import Register from './Register/Register';
import Home from './Home/Home';
import jwt_decode from "jwt-decode";
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
            shoppingcartid: user.shoppingcartid
        },
    });
    console.log(user)
    }

    getUser = async () => {
        const jwtToken = localStorage.getItem("token");
        var results = await axios({
            method: 'GET',
            url: 'https://localhost:44394/api/examples/user',
            headers: {Authorization: `Bearer ${jwtToken}`},
        });
        this.setState({
            user: results.data
        })
        console.log(results.data)
    }
    
    componentDidMount() {
        try {
            this.getUser();
        } catch (error) {
            console.log(error);
        }
    }
    
    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path="/" element={
                        !this.state.user ?
                             <Login registerUser={this.registerUser}/>
                        :
                            <Home logout={this.logout} getUser={this.getUser} user={this.state.user}/>       
                    }
                    />
                    <Route path="/home" element={<Home getUser={this.getUser} user={this.state.user} logout={this.logout}/>}/>
                    <Route path="/register" element={<Register registerUser={this.registerUser}/>}/>
                    <Route path="/login" element={<Login />}/>                  
                    {/* <Route path="*" element={<NotFound />}/> */}
                </Routes>
            </Router>
        )
    }   
}

 
export default App;