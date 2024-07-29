/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { googleLogin, signOutUser } from "../services/actions/authAction";
// Header
function Header() {

    const { isLogin } = useSelector((state) => state.authReducer);

    const dispatch = useDispatch();
    const navigateTo = useNavigate();

    const handlesignUp = () => {
        navigateTo("/signup");
    }
    const handleLogin = () => {
        navigateTo("/login");
    }

    const handleGoogleLogin = () => {
        dispatch(googleLogin());
    }

    const handleLogOut = () => {
        dispatch(signOutUser())
    }

    useEffect(() => {
        if(!isLogin){
            navigateTo("/login")
        }
    }, [isLogin])

    return (

        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Link to={'/'} className="h3 text-decoration-none me-3 text-dark fw-bold">LOGO</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Button onClick={handlesignUp} className="bg-transparent text-dark me-2">Sign Up</Button>
                        <Button onClick={handleLogin} className="bg-transparent text-dark me-2">Login</Button>
                        <Button onClick={handleGoogleLogin} className="bg-transparent text-dark me-2">Google</Button>
                        <Button onClick={handleLogOut} className="bg-transparent text-dark me-2">Logout</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;