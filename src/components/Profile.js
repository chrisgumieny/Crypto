import React, { useRef, useState } from "react"
import { Card, Alert, Button } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext";
import { useHistory, Link } from "react-router-dom"
import EmailSubmission from "../components/EmailSignup"


const cryptos = ["Bitcoin", "Etherium", "Dogecoin"]


export default function Profile() {
    const { currentUser } = useAuth()
    const emailSubmit = useRef()

    return (
        <>
            <Card className="mb-5">
                <Card.Header> Profile</Card.Header>
                <Card.Body>

                    <Card>
                        <Card.Header  > User Information:</Card.Header>
                        <Card.Body>
                            Email: {currentUser.email}
                            <br />
                            <div className=" mt-2">
                                <Link to="/profilechange">Change User Information</Link>
                            </div>

                        </Card.Body>
                    </Card>

                    <br></br>

                    <Card>
                        {/*Emai Submission Box*/}
                        <EmailSubmission eSubmit={emailSubmit} userEmail={currentUser.email} />
                    </Card>

                </Card.Body>
            </Card>
        </>
    )
}

