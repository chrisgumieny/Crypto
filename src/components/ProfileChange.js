import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function ProfileChange() {
    // create refs
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const { currentUser, changeEmail, changePassword, } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    // function that handles submit button
    function handleSubmit(e) {
        // prevent form from refreshing 
        e.preventDefault()

        // password and confirm password must be equal
        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            // return error 
            return setError("ERROR: Passwords do not match")
        }

        const promises = []
        setLoading(true)
        setError("")

        // if diff email then push 
        if (emailRef.current.value !== currentUser.email) {
            promises.push(changeEmail(emailRef.current.value))
        }

        // if diff password then push
        if (passwordRef.current.value) {
            promises.push(changePassword(passwordRef.current.value))
        }

        // push changes 
        Promise.all(promises)
            .then(() => {
                // if all are successful 
                history.push("/profile")
            })
            .catch(() => {
                // if error occurs 
                setError("ERROR: Failed to update account information")
            })
            .finally(() => {
                // set loading back to false 
                setLoading(false)
            })
    }

    return (
        <>
            {/* Card will contain all our profile update forms  */}
            <Card>
                <Card.Header>Change User Information</Card.Header>
                <Card.Body>
                    <h2 className="text-center mb-3">Change User Information</h2>

                    {/* if error then we alert */}
                    {error && <Alert variant="danger">{error}</Alert>}

                    {/* calling handle submit function */}
                    <Form onSubmit={handleSubmit}>

                        {/* user email*/}
                        <Form.Group id="email">
                            <Form.Label>Email*</Form.Label>
                            <Form.Control placeholder="email@email.com" type="email" ref={emailRef} required defaultValue={currentUser.email} />
                        </Form.Group>

                        {/*user password */}
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control placeholder="Leave this blank unless changing password" type="password" ref={passwordRef} />
                        </Form.Group>

                        {/* confirm user password*/}
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control placeholder="Leave this blank unless changing password" type="password" ref={confirmPasswordRef} />
                        </Form.Group> <br></br>

                        {/* update profile button, loading because if loading do not want to resubmit form */}
                        <Button disabled={loading} className="w-100" type="submit"> Change Account Information </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="text-center mt-2">
                {/* sends you back to profile page*/}
                <Link to="/profile">Cancel Changes: Go back to Your Profile</Link>
            </div>
        </>
    )
}