import React, { useRef, useState } from "react"
import { Card, Form, Alert, Button, } from "react-bootstrap" // npm i bootstrap react-bootstrap
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"


export default function Login() {
    // create refs
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("") // no default error 
    const [loading, setLoading] = useState(false) // default no loading 
    const history = useHistory()

    // asyc function that handles submit button
    async function handleSubmit(e) {
        // prevent form from refreshing 
        e.preventDefault()
        try {
            // set error back to empty string 
            setError("")
            // set up loading state (only can create one account at the same time, cant keep clicking submit button)
            setLoading(true)
            // call login function from AuthContext
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")

        }
        catch {
            // error message 
            setError("ERROR: failed to log in to account")
        }
        // after all handling is done 
        setLoading(false)
    }


    return (
        <>
            {/* Card will contain all our log in information  */}
            <Card>
                <Card.Header> Crypto</Card.Header>
                <Card.Body>
                    <h2 className="div-0">Log In </h2>

                    {/* if error then we alert in red for danger */}
                    {error && <Alert variant="danger">{error}</Alert>}

                    {/* calling handle submit function */}
                    <Form onSubmit={handleSubmit}>

                        {/* user email*/}
                        <div className="div-1 ">
                            <Form.Group id="email">
                                <Form.Label>Email address*</Form.Label>
                                <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                        </div>

                        {/*user password */}
                        <div className="div-1 ">
                            <Form.Group id="password">
                                <Form.Label>Password*</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required />
                            </Form.Group>
                        </div>


                        {/* log in button, loading because if loading do not want to resubmit form */}
                        <div className="button">
                            <Button disabled={loading} className="width100" variant="primary" type="submit">Log In</Button>
                        </div>
                    </Form>

                </Card.Body>
            </Card>
            {/* forgot password link */}
            <div className="div-2">
                <Link to="/forgotpassword">Forgot Password</Link>
            </div>
            <div className="div-3">
                {/* if user needs to create an account send to register */}
                <Link to="/register" >Create an account</Link>
            </div>
        </>

    )
}




