import React, { useState } from 'react';
import { Row, Col, Container, FormGroup, Form, FormLabel, FormControl, Button } from 'react-bootstrap';

const SignIn = (props) => {
    const [ user, setUser ] = useState({
        email: "",
        password: ""
    })

    const handleChange = event => {
        setUser({
            [event.target.id]: event.target.value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.history.push('/dashboard');
    }

    return (
        <Container >
            <Row className='justify-content-center pt-5'>
                <Col xs={12} md={6}>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup controlId='email'>
                            <FormLabel>Email</FormLabel>
                            <FormControl
                                autoFocus
                                type='email'
                                value={user.email}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId='password'>
                            <FormLabel>Password</FormLabel>
                            <FormControl
                                value={user.password}
                                onChange={handleChange}
                                type='password'
                            />
                        </FormGroup>
                        <Button
                            block
                            type='submit'
                        >
                        Login
                        </Button>
                    </Form>

                </Col>
            </Row>
        </Container>
    );
}
export default SignIn;
