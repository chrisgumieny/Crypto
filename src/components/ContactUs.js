import React from "react"
import { Card, Button, ListGroup } from "react-bootstrap"

export default function Home() {

    return (
        <Card className="mb-5"> 
            <Card.Header as="h4">Contact Us</Card.Header> 
            <Card.Body>
                <Card>
                    <Card.Header as="h5"> Contact Us </Card.Header>
                        <Card.Body>
                            <p>To contact the development team, please reach out to the project contributors in GitHub at:</p>
                            <Button href="https://github.com/chrisgumieny" variant="primary" target="_blank">
                                chrisgumieny</Button>
                            <Button href="https://github.com/gj6645" variant="secondary" target="_blank">
                                gj6645</Button>
                            <Button href="https://github.com/IKwiotek" variant="success" target="_blank">
                                IKwiotek</Button>
                            <Button href="https://github.com/snshamwow" variant="warning" target="_blank">
                                snshamwow</Button>
                            <Button href="https://github.com/abdulr07" variant="danger" target="_blank">
                                abdulr07</Button>
                        </Card.Body>
                </Card> <br></br>
                <Card>
                    <Card.Header as="h5"> Contribute </Card.Header>
                        <Card.Body>
                            <p>Crypto Pro is an open source project created by the Cryptocurrency community. To contribute to the Crypto Pro code base please visit the project repository.</p>
                            <Button href="https://github.com/WSU-4110/Crypto" variant="primary" target="_blank">
                                Our GitHub</Button>
                        </Card.Body>
                </Card> <br></br>
                <Card>
                    <Card.Header as="h5"> Report Issues </Card.Header>
                        <Card.Body>
                            <p>To report bugs, please create a detailed GitHub Issue in the project repository.</p>
                            <Button href="https://github.com/WSU-4110/Crypto" variant="primary" target="_blank">
                                Our GitHub</Button>
                        </Card.Body>
                </Card>
            </Card.Body>
        </Card>
    )
}
