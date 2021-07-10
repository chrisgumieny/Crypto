import React, { useRef, useState } from "react"
import { Card, Alert, Button } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext";
import { useHistory, Link } from "react-router-dom"
import EmailSignupAssignment5 from "../components/EmailSignupAssignment5"

const cryptos = ["Bitcoin", "Etherium", "Dogecoin"]


export default function Profile() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    const emailSubmit = useRef()

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
            <Card>
                <Card.Header> Profile</Card.Header>
                <Card.Body>

                    {/* alert if cant log out*/}
                    {error && <Alert variant="danger">{error}</Alert>}

                    <Card border="dark" className=" p-4" >
                        <Card.Title  > User Information:</Card.Title>
                        <Card.Body>
                            Email: {currentUser.email}
                            <br />
                            Number: {currentUser.phoneNumber}

                            <div className=" mt-2">
                                <Link to="/profilechange">Change User Information</Link>
                            </div>

                        </Card.Body>
                    </Card>

                    <br></br>
                    
                    <Card border="dark" >
                        {/*Emai Submission Box*/}
                        <EmailSignupAssignment5 eSubmit={emailSubmit} userEmail={currentUser.email} />
                    </Card>

                </Card.Body>
            </Card>


            {/* log out link */}
            <div className="w-100">
                <Button variant="primary" onClick={handleLogout}> Log Out</Button>
            </div>
        </>
    )
}

