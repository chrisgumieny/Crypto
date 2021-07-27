import React, { useRef, useState, useEffect } from "react"
import { Card, Alert, Button, Form, Col, Row } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext";
import { useHistory, Link } from "react-router-dom"
import EmailSubmission from "../components/EmailSignup"
import { postAlert } from "../services/alertClient";

function useInput() {
    const [value, setValue] = useState("");
    const input = <Form.Control value={value} onChange={e => setValue(e.target.value)} type="text" />;
    return [value, setValue, input];
}

export default function Profile() {
    const [error, setError] = useState("")
    const { currentUser, logout, cryptoUser } = useAuth()
    const history = useHistory()
    const emailSubmit = useRef()
    const [bitcoinValue, setBitcoinValue, bitcoinInput] = useInput()
    const [ethereumValue, setEthereumValue, ethereumInput] = useInput()
    const [dogecoinValue, setDogecoinValue, dogecoinInput] = useInput()

    async function handleAlertSave() {
        await postAlert({
            docid: cryptoUser.id,
            BTC: bitcoinValue,
            ETH: ethereumValue,
            DOGE: dogecoinValue
        });
    }

    useEffect(() => {
        if (cryptoUser) {
            setBitcoinValue(cryptoUser?.data?.currency?.BTC ?? bitcoinValue);
            setEthereumValue(cryptoUser?.data?.currency?.ETH ?? ethereumValue);
            setDogecoinValue(cryptoUser?.data?.currency?.DOGE ?? dogecoinValue);
        }

    }, [cryptoUser])

    return (
        <>
            <Card className="mb-5">
                <Card.Header as="h2">Profile</Card.Header>
                <Card.Body>

                    <Card border="dark">
                        <Card.Header as="h5">User Information</Card.Header>
                        <Card.Body>
                            Email: {currentUser.email}
                            <br />
                            Phone Number: {cryptoUser?.data?.userphonenumber ?? ""}
                            <div className=" mt-2">
                                <Link to="/profilechange">Change User Information</Link>
                            </div>
                        </Card.Body>
                    </Card>

                    <br></br>

                    <Card border="dark" >
                        {/*Emai Submission Box*/}
                        <EmailSubmission eSubmit={emailSubmit} userEmail={currentUser.email} />
                    </Card>

                    <br></br>

                    <Card border="dark">
                        <Card.Header as="h5"> Alert Configuration </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                SMS Alert is triggered when current Cryptocurrency Price (in USD) is less than or equaled to alert value.
                            </Card.Text>
                            <Form className="alertForm">
                                <Form.Group as={Row}>
                                    <Form.Label column sm="2">Bitcoin</Form.Label>
                                    <Col sm="3">
                                        {bitcoinInput}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm="2">Ethereum</Form.Label>
                                    <Col sm="3">
                                        {ethereumInput}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm="2">Dogecoin</Form.Label>
                                    <Col sm="3">
                                        {dogecoinInput}
                                    </Col>
                                </Form.Group>
                                <Button variant="primary" type="button" onClick={handleAlertSave}>Save Alerts</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>
        </>
    )
}
