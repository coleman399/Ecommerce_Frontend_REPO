import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        let results = await axios({
            method: 'POST',
            url: "https://localhost:44394/api/authentication/login",
            data: { 
                userName: userName,
                password: userPassword
            },
        })
        setUserName('');
        setUserPassword('');
        localStorage.setItem('token', results.data.token);
        console.log(results.data.token)
        window.location.href = "/";
    }
    
    function handleOnClick(){
        navigate("/register")
    }

    return ( 
        <div>
            <Form className="Login" onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                  <Form.Label>User Name</Form.Label>
                    <Form.Control onChange={e => setUserName(e.target.value)} type="text" required />
                </Form.Group>   
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                    <Form.Control onChange={e => setUserPassword(e.target.value)} type="text" required />
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
            <Button onClick={handleOnClick}>Register</Button>
        </div>
     );
}
 
export default Login;