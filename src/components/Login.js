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
     function handleSubmit(e) {
        // prevent form from refreshing 
        e.preventDefault()

            // set error back to empty string 
            setError("")
            // set up loading state (only can create one account at the same time, cant keep clicking submit button)
            setLoading(true)
            // call login function from AuthContext

            login(emailRef.current.value, passwordRef.current.value)
            .finally(() => {
                setLoading(false)
                history.push("/profile")
            })
                
    }


    return (
        <>
            {/* Card will contain all our log in information  */}
            <Card>
                <Card.Header as="h4"> Crypto Pro Login</Card.Header>
                <Card.Body>
                    <h5 className="text-center mb-3">Log In </h5>

                    {/* if error then we alert in red for danger */}
                    {error && <Alert variant="danger">{error}</Alert>}

                    {/* calling handle submit function */}
                    <Form onSubmit={handleSubmit}>

                        {/* user email*/}
                        <div className="div-1 ">
                            <Form.Group id="email">
                                <Form.Label>Email address*</Form.Label>
                                <Form.Control placeholder="email@email.com" type="email" ref={emailRef} required />

                            </Form.Group>
                        </div>

                        {/*user password */}
                        <div className="div-1 ">
                            <Form.Group id="password">
                                <Form.Label>Password*</Form.Label>
                                <Form.Control placeholder="password" type="password" ref={passwordRef} required />
                            </Form.Group>
                        </div>


                        {/* log in button, loading because if loading do not want to resubmit form */}
                        <div className="button"> <br></br>
                            <Button disabled={loading} className="w-100" variant="primary" type="submit">Log In</Button>
                        </div>
                    </Form>

                </Card.Body>
            </Card>
            {/* forgot password link */}
            <div className="text-center mt-2">
                <Link to="/forgotpassword">Forgot Password</Link>
            </div>
            <div className="text-center mt-2">
                {/* if user needs to create an account send to register */}
                <Link to="/register" >Create an account</Link>
            </div>
        </>

    )
}




