import React from "react"
import { Card, Button, ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"


export default function Home() {

  return (
    <Card className="mb-5">
        <Card.Header> Home</Card.Header>
        <Card>
            <Card.Body> <ListGroup>
                <ListGroup.Item>
                    <h3>Welcome to Crypto Pro!</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    On this website, users are given the opportunity to educate themselves and stay up to date with cryptocurrency. Users are able to educate
                    themselves on crypto currency through first party information directly supplied by the website developers or third party information through
                    other third party sources. Users are also given the option to register an account on the website. Once registered, the user is able to register 
                    for an email list as well as enroll in cryptocurrency text alerts. Finally, users are able to use the cryptocurrency search bar in order to 
                    find more detailed information about a multitude of cryptocurrencies; including bitcoin, ethereum, and dogecoin.
                </ListGroup.Item>
                <ListGroup.Item>
                    <h3>Our Goal</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    Here at Crypto Pro, we strive to provide users with their cryptocurrency needs. One major problem with cryptocurrency investments is that 
                    investors need to keep a consistent eye on their investments in order to maximize profit and avoid losing money. It is because of this that 
                    we put great focus on alerting our users via text when their invested cryptocurrency hits a certain price target. We believe that will allow all 
                    users to invest in crypto without risking anything out of their control. We also believe in allowing cryptocurrency to be accessible to users of all 
                    levels. This is why we put a lot of focus towards educating our users. With plenty of cryptocurrency from multiple different sources, we believe that 
                    we can educate users of all kinds so that they may feel confident in making their own investments in cryptocurrency. We feel that everyone should be 
                    have the ability to participate in cryptocurrency and we believe that this website takes us one step closer to that goal.
                </ListGroup.Item>
                <ListGroup.Item>
                      <Button href="https://github.com/WSU-4110/Crypto" variant="primary" target="_blank">
                        Our GitHub</Button> 
                </ListGroup.Item>
            </ListGroup> </Card.Body>
        </Card>
    </Card>
  )
}
