import React from "react";
import { Card, Accordion, Button, ListGroup } from "react-bootstrap"
export const Policy = () => {

    return (
        <Card>
            <Card.Header>Privacy Policy</Card.Header>
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="0">
                        Crypto Pro may use, or disclose the personal information it collects for one or more of the following business purposes
                        </Accordion.Toggle>
                    </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>To fulfill or meet the reason you provided the information. For example, to provide services, to help maintain the safety, security, and integrity of Crypto Pro’s site and services. For example, Crypto Pro may screen and use the information to protect against spammers, hackers, and others who pose harm to the site and services; Crypto Pro may share information with moderation service providers; and Crypto Pro may share the information with law enforcement. Also, to evaluate and improve the site and services. For example, Crypto Pro may aggregate and/or de-identify information to produce statistical data. Another purpose is to monitor and enforce user compliance with the guidelines of the law and its policies. Furthermore, to respond to law enforcement requests and as required by applicable law, court order, or governmental regulations.</Card.Body>
                        </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="1">
                        Sharing Personal Informaion
                        </Accordion.Toggle>
                    </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Crypto Pro will not collect additional categories of personal information or use the personal information we collected for materially different, unrelated, or incompatible purposes without providing you notice. Crypto Pro may disclose your personal information to a third party for a business purpose. When Crypto Pro discloses personal information for a business purpose, Crypto Pro enters a contract that describes the purpose and requires the recipient to both keep that personal information confidential and not use it for any purpose except performing the contract.</Card.Body>
                        </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="2">
                        Sales of Personal Information
                        </Accordion.Toggle>
                    </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>Crypto Pro does not exchange your personal information for money. Your personal information is secured and is not used to for other unsolicited acts.</Card.Body>
                        </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="3">
                        Your Rights and Choices
                        </Accordion.Toggle>
                    </Card.Header>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>You have the right to request that Crypto Pro disclose certain information to you about its collection and use of your personal information. After Crypto Pro receives and confirms your verifiable request, it will disclose to you: The categories of personal information we collected about you, the categories of sources for the personal information we collected about you, our business or commercial purpose for collecting that personal information, the categories of third parties with whom we share that personal information, and the specific pieces of personal information we collected about you.</Card.Body>
                        </Accordion.Collapse>
                </Card>

            </Accordion>
        </Card>
    )
}
