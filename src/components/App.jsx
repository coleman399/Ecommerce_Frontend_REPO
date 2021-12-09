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
    BrowserRouter as Router,
    Routes,
    Route,
    Link
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
            <div>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </Router>
            </div>
         );
    }
}
 
export default App;