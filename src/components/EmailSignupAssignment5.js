import * as React from 'react'
import { Card, Form, Button } from "react-bootstrap"

class EmailSubmissionAssignment5 extends React.Component {

    // Declaration of the three changing states on this page
    constructor(props) {
        super(props);
        this.state = {
            emailSubmission: sessionStorage.getItem('email') || "",
            subscriptionStatus: sessionStorage.getItem('subscriptionStatus') || "Unsubscribed",
            subButton: "Subscribe"
        };

        // Binding all of the used functions
        this.handleEmailSignup = this.handleEmailSignup.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
    }

    handleEmailSignup(e) {
        e.preventDefault()

        // Changing values of the states everytime the sub button is clicked
        if (this.state.subButton === "Subscribe") {
            this.setState(
                {
                    emailSubmission: this.props.eSubmit.current.value,
                    subscriptionStatus: "Subscribed",
                    subButton: "Unsubscribe"
                }
            );
        }
        else {
            this.setState(
                {
                    emailSubmission: "",
                    subscriptionStatus: "Unsubscribed",
                    subButton: "Subscribe"
                }
            );
        }
    }

    // Runs everytime the page reloads. Status and email are saved in session storage
    // The only state that needs to constantly be checked is the subButton value
    componentDidMount() {
        if (this.state.subscriptionStatus === "Subscribed")
            this.setState(
                {
                    subButton: "Unsubscribe"
                }
            );
    }

    // This function observes the states and if a change happens, it updates the session storage
    componentDidUpdate() {
        sessionStorage.setItem('email', this.state.emailSubmission)
        sessionStorage.setItem('subscriptionStatus', this.state.subscriptionStatus)
    }

    render() {
        return <div>
            <Card>
                <Card.Header> Email Signup</Card.Header>
                        <Card.Body>
                            <Form onSubmit = {this.handleEmailSignup}> 
                                <Form.Group>
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" id="emailSignup" ref={this.props.eSubmit} defaultValue={this.props.userEmail} readOnly />
                                        <Form.Text className="text-muted">Your email will only be used for the subscription service.</Form.Text>
                                </Form.Group>
                                <Button variant="primary" type="submit">{this.state.subButton}</Button>
                            </Form>
                        </Card.Body>
            </Card>
            <Card>
                <Card.Body>Subscription Status: {this.state.subscriptionStatus} {this.state.emailSubmission} </Card.Body>
            </Card>
        </div> 
    }

}

export default EmailSubmissionAssignment5
