import React, { useRef, useState } from "react"
import { Card, Form, Alert, Button, } from "react-bootstrap" // npm i bootstrap react-bootstrap
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { postUser } from "../services/usersClient"

// function used for register

export default function Register() {
    // create refs
    const emailRef = useRef()
    const phoneNumberRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const { register } = useAuth() //const {register, currentUser} = useAuth() to check if working
    const [error, setError] = useState("") // no default error 
    const [loading, setLoading] = useState(false) // default no loading 
    const history = useHistory()

    // asyc function that handles submit button
    async function handleSubmit(e) {
        // prevent form from refreshing 
        e.preventDefault()

        // password and confirm password must be equal
        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            // return error 
            return setError("ERROR: Passwords do not match ")
        }
        try {
            // set error back to empty string 
            setError("")
            // set up loading state (only can create one account at the same time, cant keep clicking submit button)
            setLoading(true)
            // call register function from AuthContext
            const { email, uid } = (await register(emailRef.current.value, passwordRef.current.value)).user
            await postUser({
                userid: uid,
                useremail: email,
                userphonenumber: phoneNumberRef.current.value
            })
            history.push("/profile")

        }
        catch {
            // error message 
            setError("ERROR: Failed to create account")
        }

        // after all handling is done 
        setLoading(false)
    }


    return (
        <>
            {/* Card will contain all our log in information  */}
            <Card>
                <Card.Header>Crypto Pro Register</Card.Header>
                <Card.Body>
                    <h2 className="text-center mb-3">Register </h2>
                    {/* {JSON.stringify(currentUser)} to check if working, should get JSON object*/}
                    {/* or currentUSer && currentUser.email to get email, checking to make sure there is
                current user and checking current users email (firebase kinda does this for u)*/}


                    {/* if error then we alert */}
                    {error && <Alert variant="danger">{error}</Alert>}

                    {/* calling handle submit function */}
                    <Form onSubmit={handleSubmit}>

                        <div className="div-1 ">
                            {/* user email*/}
                            <Form.Group id="email">
                                <Form.Label>Email*</Form.Label>
                                <Form.Control placeholder="email@email.com" type="email" ref={emailRef} required />
                            </Form.Group>

                            {/* user phone number*/}
                            <Form.Group id="tel">
                                <Form.Label>Phone Number*</Form.Label>
                                <Form.Control type="tel" placeholder="111-111-1111" pattern="^(+\d{1,2}\s)?(?\d{3})?[\s.-]\d{3}[\s.-]\d{4}$" ref={phoneNumberRef} required />
                            </Form.Group>

                            {/*user password */}
                            <Form.Group id="password">
                                <Form.Label>Password*</Form.Label>
                                <Form.Control placeholder="password must be at least 6 characters long" type="password" ref={passwordRef} required />
                            </Form.Group>

                            {/* confirm user password*/}
                            <Form.Group id="password-confirm">
                                <Form.Label>Confirm Password*</Form.Label>
                                <Form.Control placeholder="password must be at least 6 characters long" type="password" ref={confirmPasswordRef} required />
                            </Form.Group>
                        </div>

                        {/* register button, loading because if loading do not want to resubmit form */}
                        <div className="button">
                            <Button disabled={loading} className="w-100" type="submit" >Register </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
            <div className="text-center mt-2">
                <Link to="/login">Log In</Link>
            </div>
        </>

    )
}


