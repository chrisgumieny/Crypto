
import { Card, Accordion, Button, ListGroup } from "react-bootstrap"
export default function Faq() {

    return (
        <Card className="mb-5">
            <Card.Header>Frequently Asked Questions</Card.Header>
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="0">
                            Will There Be Other Features Added On The Site In The Future?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Yes! Make sure to check our System Updates page to see the new upcoming features we have planned. </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="1">
                            How to Create an Account?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>When you have entered the site, click on the link for "Create an Account" on the login page and follow the prompted steps.</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="2">
                            How To Change and Reset Password?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>To change your password click on the change user information option in the profile dropdown at the top of the page navigation. To reset your password click on the forgot password link which is at the bottom of the login page and type in the email that you signed up with and you will be sent an email directing you on how to change/reset your password.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="3">
                            What Does The First Party Education Page Entail?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>This consists of basic information needed for users to learn how to trade cryptocurrencies.</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="4">
                            What  Does The Third Party Education Page Entail?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>This will have a selection of articles written by third parties that can educate users on entry level cryptocurrency information.</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="5">
                            How Can I Receive Alerts About Cryoto I Am Interested In?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body>
                            To receive crypto SMS alerts go to your user profile and fill out the alert configuration form on the bottom of the page. SMS Alert is triggered when the current Cryptocurrency Price (in USD) is less than or equal to alert value.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="6">
                            What Can I Expect To Get Out Of The Site?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="6">
                        <Card.Body>Among many things, you will be able to expand your knowledge on cryptocurrencies and be notified when a price change occurs for your favorite ones.</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="7">
                            How Can I Get Back To The Home Page?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="7">
                        <Card.Body>Click on the "home" dropdown menu at the top of the page navigation then select the “Home Page” option or you can click on the "Crypto Pro" at the top left of navigation and the site will take you back to the home page. </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="8">
                            What cryptocurrencies does this site support for alerts?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="8">
                        <Card.Body>We support BTC, ETH and DOGE.</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="9">
                            Can I Purchase Crypto From This Site?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="9">
                        <Card.Body>Unfortunately, you will not be able to purchase cryptos as this is not a brokerage platform.</Card.Body>
                    </Accordion.Collapse>
                </Card>

            </Accordion>
        </Card>
    )
}
