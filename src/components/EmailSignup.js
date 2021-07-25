import { React, useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap"
import { updateStatus } from "../services/usersClient"

export const EmailSubmission = (props) => {

    // These values hold the email, subscription status, and button text
    const [emailSubmission, setEmailSubmission] = useState(sessionStorage.getItem('email') || "")
    const [subscriptionStatus, setSubscriptionStatus] = useState(sessionStorage.getItem('subscriptionStatus') || "Unsubscribed")
    const [SubButton, setSubButton] = useState("Subscribe")
    const [error, setError] = useState("")

    // Handling email subscription submission 
    async function handleEmailSignup(e) {
        e.preventDefault()
        
        // Updating values to the submitted email, new subscription status, and changing the button text
        if (SubButton === "Subscribe") {
            setSubButton(prevSub => "Unsubscribe")
            setSubscriptionStatus(prevSubscriptionStatus => "Subscribed")
            setEmailSubmission(prevEmailSubmission => props.eSubmit.current.value)
        }
        else {
            setSubButton(prevSub => "Subscribe")
            setSubscriptionStatus(prevSubscriptionStatus => "Unsubscribed")
            setEmailSubmission(prevEmailSubmission => "")
        }

    }

    // Activates everytime both emailSubmission and subscriptionStatus change
    useEffect(() => {

        sessionStorage.setItem('subscriptionStatus', subscriptionStatus)
        sessionStorage.setItem('email', emailSubmission)

        // In the future there will be a test to see if database's status == new status (if statement)

        try {
            setError("")
            setLoading(true)

            // Calls update status function with user email + subscription status
            await updateStatus({
                currentuseremail: props.userEmail,
                subscriptionstatus: subscriptionStatus
            })
            history.push("/profile")
        }
        catch {
            setError("ERROR: Failed to update subscription status")
        }
        setLoading(false)
        
    }, [emailSubmission, subscriptionStatus])

    // Activates on a page reload
    useEffect(() => {
        sessionStorage.getItem('email')
        sessionStorage.getItem('subscriptionStatus')

        if (sessionStorage.getItem('subscriptionStatus') === "Subscribed")
            setSubButton(prevSub => "Unsubscribe")
    }, [])

    return ( 
        <div>
            <Card>
                <Card.Header> Email Signup</Card.Header>
                    <Card.Body>
                            {/* error alerts */}
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit = {handleEmailSignup}> 
                                <Form.Group>
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" id="emailSignup" ref={props.eSubmit} defaultValue={props.userEmail} readOnly />
                                    <Form.Text className="text-muted">Your email will only be used for the subscription service.</Form.Text>
                                </Form.Group>
                                <Button variant="primary" type="submit">{SubButton}</Button>
                            </Form>
                    </Card.Body>
            </Card>
            <Card>
                <Card.Body>Subscription Status: {subscriptionStatus} {emailSubmission} </Card.Body>
            </Card>
        </div>
    )
}

export default EmailSubmission
