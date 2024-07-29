/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../../services/actions/authAction';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import "../CSS/login.css";

const Login = () => {
    const navigateTo = useNavigate();
    const { isLogin } = useSelector((state) => state.authReducer);

    console.log("isLogin", isLogin)

    const [input, setInput] = useState({
        id: '',
        email: '',
        password: ''

    });

    const handleInput = (event) => {

        const { name, value } = event.target;

        setInput({ ...input, [name]: value });
    }

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(loginAsync(input));

        setInput({
            id: '',
            email: '',
            password: ''
        })
    }

    useEffect(() => {
        if (isLogin) {
            navigateTo('/');
        }
    }, [isLogin]);

    return (
        <Container className='loginWrapper d-flex justify-content-center align-items-center'>
            <Form onSubmit={handleSubmit} className='loginForm'>
            <h1 className='h2 text-center mb-5'>Login</h1>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' value={input.email} placeholder="Enter Email Address" onChange={handleInput} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' autoComplete="on" value={input.password} placeholder="Password" onChange={handleInput} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    LOGIN
                </Button>
            </Form>
        </Container>
    )
}

export default Login