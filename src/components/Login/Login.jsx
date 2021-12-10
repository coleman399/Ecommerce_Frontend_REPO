import React, {useState} from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';

const LogInUser = (props) => {
    const [userName, setUserName] = useState()
    const [userPassword, setUserPassword] = useState()
    
    const handleSubmit = async event => {
        event.preventDefault();
        await axios ({
            method: 'POST',
            url: "https://localhost:44394/api/authentication/login",
            data: { 
                username: userName,
                password: userPassword
            },

        }).then(response => localStorage.setItem('token', response.data.token));
        window.location.href = "/Home";
    };

    const handleChange = (event) => {
        setUserName(event.target.value);
        setUserPassword(event.target.value);
    }
    
    return ( 
            <Form className="LogIn" onSubmit={handleSubmit()}>
                <Form.Group>
                  <Form.Label>Login</Form.Label>
                    <Form.Control onChange={handleChange()} type="text"/>
                      <Form.Text className="text">PLEASE ENTER USER NAME</Form.Text>
                      <Form.Text className="text">PLEASE ENTER PASSWORD</Form.Text>
                </Form.Group>
            </Form>
     );
}
 
export default LogInUser;