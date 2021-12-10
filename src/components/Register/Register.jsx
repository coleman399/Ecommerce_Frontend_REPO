import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const Register = (props) => {
    const [firstname, setFirstName] = useState()
    const [lastname, setLastName] = useState()
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [phonenumber, setPhonenumber] = useState()
    let user = {
        firstname: firstname,
        lastname: lastname,
        username: username,
        password: password,
        email: email,
        phonenumber: phonenumber
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.registerUser(user);
        setFirstName("");
        setLastName("");
        setUserName("");
        setPassword("");
        setEmail("");
        setPhonenumber("");
    }

    return ( 
        <div>
            <Form className="Register" onSubmit={handleSubmit}>
                <Form.Group controlId="firstname">
                  <Form.Label>First Name</Form.Label>
                    <Form.Control onChange={e => setFirstName(e.target.value)} type="text" required />
                </Form.Group>
                <Form.Group controlId="lastname">
                  <Form.Label>Last Name</Form.Label>
                    <Form.Control onChange={e => setLastName(e.target.value)} type="text" required />
                </Form.Group>
                <Form.Group controlId="username">
                  <Form.Label>User Name</Form.Label>
                    <Form.Control onChange={e => setUserName(e.target.value)} type="text" required />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                    <Form.Control onChange={e => setPassword(e.target.value)} type="text" required />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                    <Form.Control onChange={e => setEmail(e.target.value)} type="text" required />
                </Form.Group>
                <Form.Group controlId="phonenumber">
                  <Form.Label>Phone Number</Form.Label>
                    <Form.Control onChange={e => setPhonenumber(e.target.value)} type="text" required />
                </Form.Group>
                <Button onSubmit={handleSubmit} type="submit">Submit</Button>
            </Form>
        </div>
     );
}
 
export default Register;