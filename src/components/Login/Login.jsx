import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const Login = (props) => {
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')

    
    
    
    const handleSubmit = async event => {
        console.log('username ',userName)
        console.log(userPassword)
        event.preventDefault();
        
        let results = await axios ({
            method: 'POST',
            url: "https://localhost:44394/api/authentication/login",
            data: { 
                username: userName,
                password: userPassword
            },
        })
        localStorage.setItem('token', results.data.token);
        window.location.href = "/";
        console.log(results.data.token)
    };

    
    return ( 
            <Form className="LogIn" onSubmit={handleSubmit}>
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


     );
}
 
export default Login;