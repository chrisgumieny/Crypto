
import React, { useRef, useState } from "react"
import { Card, Form, Alert, Button, } from "react-bootstrap" // npm i bootstrap react-bootstrap
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"


export default function ForgotPassword() {
    // create refs
    const emailRef = useRef()
    const { passwordReset } = useAuth()
    const [error, setError] = useState("") // no default error 
    const [loading, setLoading] = useState(false) // default no loading 
    const [message, setMessage] = useState("") // default empty message 

    // asyc function that handles submit button
    async function handleSubmit(e) {
        // prevent form from refreshing 
        e.preventDefault()



        try {
            // set empty message
            setMessage("")
            // set error back to empty string 
            setError("")
            // set up loading state 
            setLoading(true)
            // call passwordReset function from AuthContext
            await passwordReset(emailRef.current.value,)
            setMessage("Reset link sent to email")

        }
        catch {
            // error message 
            setError("ERROR: Failed to reset password")
        }

        // after all handling is done 
        setLoading(false)
    }



    return (
        <>

            {/* Card will contain all our log in information  */}
            <Card>
                <Card.Header>Crypto</Card.Header>
                <Card.Body>
                    <h2 className="div-0">Reset Password </h2>


                    {/* if error then we alert */}
                    {error && <Alert variant="danger">{error}</Alert>}

                    {/* if message then we alert */}
                    {message && <Alert variant="success">{message}</Alert>}

                    {/* calling handle submit function */}
                    <Form onSubmit={handleSubmit}>

                        <div className="div-1">
                            {/* user email*/}
                            <Form.Group id="email">
                                <Form.Label>Email*</Form.Label>
                                <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                        </div>

                        <div className="button">
                            {/* reset password button, loading because if loading do not want to resubmit form */}
                            <Button disabled={loading} variant="primary" className="width100" type="submit" >
                                Reset Password
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
            {/* forgot password link */}
            <div className="div-2">
                <Link to="/login">Log in</Link>
            </div>

            <div className="div-3">
                {/* if user needs to create an account send to register */}
                <Link to="/register" > Create an Account</Link>
            </div>

        </>

    )

}