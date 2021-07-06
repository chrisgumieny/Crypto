import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Nav, NavDropdown, Card } from 'react-bootstrap';
import { useHistory } from "react-router-dom"

// Guide for configurations: https://react-bootstrap.github.io/components/navbar/

export const HeaderToolbar = () => {

    // Object destructuring
    const [error, setError] = useState("")
    const history = useHistory()
    const { login, logout, currentUser } = useAuth()
    const isLoggedIn = Boolean(!!currentUser)
    const isLoggedOut = Boolean(!currentUser)

    // handle logout
    async function handleLogout() {
        setError("") // empty

        try {
            // wait for logout
            await logout()
            // go back to login page
            history.push("/login")
        }
        catch {
            //error message
            setError("ERROR: Failed to log out of account")
        }
    }

    return (

        <>
            <div className="mt-5">
                <Navbar bg="dark" variant="dark" className="text-center"  >
                    {/*<Navbar.Brand href="/home">Crypto Pro</Navbar.Brand> */}
                    {/* Crypto Pro header click -> home  */}
                    <Navbar.Brand className="p-3" href="/">Crypto Pro</Navbar.Brand>
                    <Navbar.Toggle />

                    <Nav>
                        {/* link to home page */}
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>


                    {/* if user is logged in */}
                    <Nav >
                        {isLoggedIn ?

                            <NavDropdown title="Profile" id="nav-dropdown" variant="dark" className="justify-content-right" >
                                <NavDropdown.Item style={{ color: "#515766" }} disabled>Signed in as: <b>{currentUser.email}</b>  </NavDropdown.Item >
                                <NavDropdown.Divider />
                                {/* link to user profile */}
                                <NavDropdown.Item href="/profile">Your Profile</NavDropdown.Item>
                                <NavDropdown.Item href="/profilechange"> Change Profile Information</NavDropdown.Item>
                                <NavDropdown.Divider />
                                {/* link to FAQ/Help */}
                                <NavDropdown.Item href="/faq">Help</NavDropdown.Item>

                                <NavDropdown.Divider />
                                {/* Log out */}
                                <NavDropdown.Item onClick={handleLogout}> Log Out</NavDropdown.Item>

                            </NavDropdown>
                            : null}
                    </Nav>


                    <Nav>
                        {/* drop down for educational pages */}
                        <NavDropdown title="Education" id="nav-dropdown">
                            <NavDropdown.Item href="/firstpartyeducation">First Party Education</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/thirdpartyeducation">Third Party Education</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>


                    <Navbar.Collapse className="justify-content-end p-2" >
                        {/* if user is logged out*/}
                        <Nav>
                            {isLoggedOut ? <Navbar.Text>
                                {/* link to log in */}
                                <Nav.Link href="/login">Log In</Nav.Link>

                            </Navbar.Text> : null}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    )
}