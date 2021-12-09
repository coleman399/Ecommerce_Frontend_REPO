import React, { Component } from 'react';
import Login from './Login/Login';
import Register from './Register/Register';
import Home from './Home/Home';
import NavBar from './NavBar/NavBar';
import NotFound from './NotFound/NotFound'
import SearchBar from './SearchBar/SearchBar';
import SellPlant from './SellPlant/SellPlant';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
// componentDidMount() {
//     const jwt = localStorage.getItem('token');
//     try{
//         const user = jwtDecode(jwt);
//         this.setState({
//             user
//         });
//     } catch {
        
//     }
// }
    render() { 
        return ( 
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home NavBar={<NavBar />} SearchBar={<SearchBar />} ShoppingCart= {<ShoppingCart />} SellPlant={<SellPlant />}/>}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </BrowserRouter>
         );
    }
}
 
export default App;