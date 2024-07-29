/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { signUpAsync } from '../../services/actions/authAction';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import '../CSS/signUp.css';

const SignUp = () => {
    const { isSignUp } = useSelector((state) => state.authReducer);
    const { isLogin } = useSelector((state) => state.authReducer);
    
    
    const navigateTo = useNavigate();
    console.log("isSignUp",isSignUp)

    const [input, setInput] = useState({
        id: '',
        fname: '',
        lname: '',
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

        console.log("INPUT",input)

        dispatch(signUpAsync(input));

        setInput({
            id: '',
            fname: '',
            lname: '',
            email: '',
            password: ''

        })

    }

    useEffect(() => {
        if (isSignUp) {
            navigateTo('/login');
        }
    }, [isSignUp]);

    useEffect(() => {
        if(!isLogin){
            navigateTo("/login")
        }
    })

    return (
        <Container className='signUpWrapper d-flex justify-content-center align-items-center'>
            <Form onSubmit={handleSubmit} className='signUpForm'>
                <h1 className='h2 text-center mb-5'>Registration</h1>
                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name='fname' value={input.fname} placeholder="Enter First Name" onChange={handleInput}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name='lname' value={input.lname} placeholder="Enter Last Name" onChange={handleInput}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' value={input.email} placeholder="Enter Email Address" onChange={handleInput}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' autoComplete="on" value={input.password} placeholder="Password" onChange={handleInput}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    SIGN UP
                </Button>
            </Form>


        </Container>
    )
}

export default SignUp










