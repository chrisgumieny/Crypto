import React, { useState } from "react"
import { Card, Alert, Button } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom"

const cryptos = ["Bitcoin", "Etherium", "Dogecoin"]


export default function Profile() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

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
                    {/* welcome user with email*/}
                    <h4 className="div-0">User Email: {currentUser.email}</h4>
                </Card.Body>
            </Card>
            {/* log out link */}
            <div className="div-3">
                <Button variant="primary" onClick={handleLogout}> Log Out</Button>
            </div>
        </>
    )
}

