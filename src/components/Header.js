import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Nav, NavDropdown } from 'react-bootstrap';

// Guide for configurations: https://react-bootstrap.github.io/components/navbar/

export const HeaderToolbar = () => {
    // Object destructuring
    const { login, logout, currentUser } = useAuth()
    const isLoggedIn = Boolean(!!currentUser)

    return (
        <Navbar bg="dark" variant="dark">
            {/*<Navbar.Brand href="/home">Crypto Pro</Navbar.Brand> */}
            {/* Crypto Pro header click -> home  */}
            <Navbar.Brand href="/">Crypto Pro</Navbar.Brand>
            <Navbar.Toggle />




            <Nav>
                {/* link to home page */}
                <Nav.Link href="/">Home</Nav.Link>
                {/* link to user profile */}
                <Nav.Link href="/profile">Profile</Nav.Link>
                {/* drop down for educational pages */}
                <NavDropdown title="Education" id="nav-dropdown">
                    <NavDropdown.Item href="/firstpartyeducation">First Party Education</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/thirdpartyeducation">Third Party Education</NavDropdown.Item>
                </NavDropdown>
            </Nav>




            <Navbar.Collapse className="justify-content-end">
                {isLoggedIn ? <Navbar.Text>
                    Signed in as: <Link to="/profile"> {currentUser.email}</Link>
                </Navbar.Text> : null}
            </Navbar.Collapse>
        </Navbar>
    )
}