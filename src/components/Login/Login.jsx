import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Register from '../Register/Register';

const Login = (props) => {
    //[useState] of form to submit to backend  for login from Login{props}
    var user = await axios.get('https//localhost:44394/api/')


    if (logIn==True) () => {
    const [userEmail, setUserEmail] = useState()
    const [userPassword, setUserPassword] = useState()
    const handleSubmit = (event) => {
        event.preventDefault();
        props.login

    const handleChange = (event) => {
        setUserEmail(()=>({
            [event.target.name]:event.target.value
        }));
        setUserPassword(()=>({
            [event.target.name]:event.target.value
        }));
    }
    }
    //if logged in redirect to main page if not logged in present form...
    

    }
    return ( 
        <div>
            <h1>Welcome</h1>
            <form>
                <input onChange = {handleChange} type ="text" name="userEmail" id ="userEmail" class = "email">Email</input>
                <input onChange = {handleChange} type= "text" name="userPassword" id ="userPassword" class ="userPassword">Password</input>
                <button onSubmit = {handleSubmit}>Login</button>
                <button Link = "src\components\Register\Register.jsx" >Register Here</button>
            </form>
        </div>

     );
}
 
export default Login;