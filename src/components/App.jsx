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
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
componentDidMount() {
    const jwt = localStorage.getItem('token');
    try{
        const user = jwtDecode(jwt);
        this.setState({
            user
        });
    } catch {
        
    }
}
    render() { 
        return ( 
            <div>
                <NavBar user={user} />
                <div>
                    <Switch>
                        <Route path= '/profile' render ={props => {
                            if (!user){
                                return <Redirect to='/login' />;
                            } else {
                                return <Home {...props} user={user}/>
                            }
                        }}
                        />
                        <Route path='/register' component={Register} />
                        <Route path='/login' component={Login} />
                        <Route path='/logout' component={Logout} />
                        <Route path='/not-found' component={NotFound} />
                        <Route path='/' exact component={Home} />
                        <Redirect to='not-found' />
                    </Switch>
                    <SearchBar/>
                    <SellPlant/>
                    <ShoppingCart/>
                </div>
            </div>
         );
    }
}
 
export default App;