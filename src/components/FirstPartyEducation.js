import React from "react";
import { Card, Accordion, Button, ListGroup } from "react-bootstrap"

export const FirstPartyEducation = () => {

    return (
        <Card className="mb-5">
            <Card.Header>First Party Education</Card.Header>
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="0">
                            What is Cryptocurrency?
                        </Accordion.Toggle>
                    </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Cryptocurrency is a form of payment that can be exchanged online for goods and services. 
                                    Many companies have issued their own currencies, often called tokens, and these can be traded 
                                    specifically for the good or service that the company provides. Think of them as you would arcade 
                                    tokens or casino chips. You will need to exchange real currency for the cryptocurrency to access the 
                                    good or service. Cryptocurrencies work using a technology called blockchain. Blockchain is a decentralized 
                                    technology spread across many computers that manages and records transactions. Part of the appeal of this 
                                    technology is its security.
                            </Card.Body>
                        </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="1">
                            What is the History of Cryptocurrency?
                        </Accordion.Toggle>
                    </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Cryptocurrency’s technical foundations date back to the early 1980s when an American cryptographer 
                            named David Chaum invented a “blinding” algorithm that remains central to modern web-based encryption. The algorithm 
                            allowed for secure, unalterable information exchanges between parties, laying the groundwork for future electronic 
                            currency transfers. About 15 years later, an accomplished software engineer named Wei Dai published a white paper on 
                            b- money, a virtual currency architecture that included many of the basic components of modern cryptocurrencies, such as 
                            complex anonymity protections and decentralization. However, b-money was never deployed as a means of exchange. The late 
                            1990s and early 2000s saw the rise of more conventional digital finance intermediaries. Chief among them was PayPal, which 
                            made Tesla founder and noted cryptocurrency advocate Elon Musk’s first fortune and proved to be a harbinger of today’s mobile 
                            payment technologies that have exploded in popularity over the past 10 years. But no true cryptocurrency emerged until the late 
                            2000s when Bitcoin came onto the scene.</Card.Body>
                        </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="2">
                            How Many Cryptocurrencies are There?
                        </Accordion.Toggle>
                    </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>More than 10,000 different cryptocurrencies are traded publicly, according to CoinMarketCap.com, a market research 
                                    website. And cryptocurrencies continue to proliferate, raising money through initial coin offerings, or ICOs. The total value of all 
                                    cryptocurrencies on May 27, 2021, was more than $1.7 trillion — down from April high of $2.2 trillion, according to CoinMarketCap. The 
                                    total value of all bitcoins, the most popular digital currency, was pegged at about $735 billion, down from April high of $1.2 trillion.
                                    These are the 10 largest trading cryptocurrencies by market capitalization as tracked by CoinMarketCap, a cryptocurrency data and analytics 
                                    provider.</ListGroup.Item>
                                    <ListGroup.Item>Bitcoin - $735.3 billion</ListGroup.Item>
                                    <ListGroup.Item>Ethereum - $324.2 billion</ListGroup.Item>
                                    <ListGroup.Item>Tether - $61.0 billion</ListGroup.Item>
                                    <ListGroup.Item>Binance Coin - $57.5 billion</ListGroup.Item>
                                    <ListGroup.Item>Cardano - $54.6 billion</ListGroup.Item>
                                    <ListGroup.Item>XRP - $46.5 billion</ListGroup.Item>
                                    <ListGroup.Item>Dogecoin - $44.0 billion</ListGroup.Item>
                                    <ListGroup.Item>Polkadot - $22.1 billion</ListGroup.Item>
                                    <ListGroup.Item>USD Coin - $21.9 billion</ListGroup.Item>
                                    <ListGroup.Item>Internet Computer - $16.7 billion</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="3">
                            Why are Cryptocurrencies so Popular?
                        </Accordion.Toggle>
                    </Card.Header>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Supporters see cryptocurrencies such as Bitcoin as the currency of the future and are racing to 
                                        buy them now, presumably before they become more valuable.</ListGroup.Item>
                                    <ListGroup.Item>Some supporters like the fact that cryptocurrency removes central banks from managing the money 
                                        supply, since over time these banks tend to reduce the value of money via inflation.</ListGroup.Item>
                                    <ListGroup.Item>Other supporters like the technology behind cryptocurrencies, the blockchain, because it’s a 
                                        decentralized processing and recording system and can be more secure than traditional payment systems.</ListGroup.Item>
                                    <ListGroup.Item>Speculators like cryptocurrencies because they’re going up in value and have no interest in the 
                                        currencies’ long-term acceptance as a way to move money.</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="4">
                            How Do I Buy Cryptocurrency?
                        </Accordion.Toggle>
                    </Card.Header>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body>While some cryptocurrencies, including Bitcoin, are available for purchase with U.S. dollars, others require that you pay with 
                            bitcoins or another cryptocurrency. To buy cryptocurrencies, you will need a “wallet,” an online app that can hold your currency. Generally, 
                            you create an account on an exchange, and then you can transfer real money to buy cryptocurrencies such as Bitcoin or Ethereum.
                            Coinbase is one popular cryptocurrency trading exchange where you can create both a wallet and buy and sell Bitcoin and other cryptocurrencies. Also, 
                            a growing number of online brokers offer cryptocurrencies, such as eToro, Tradestation and Sofi Active Investing. Robinhood offers free cryptocurrency 
                            trades (Robinhood Crypto is available in most, but not all, U.S. states).</Card.Body>
                        </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="5">
                            Useful Links
                        </Accordion.Toggle>
                    </Card.Header>
                        <Accordion.Collapse eventKey="5">
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <Button href="https://www.investopedia.com/terms/c/cryptocurrency.asp" variant="link" target="_blank">
                                            Investopedia</Button>
                                    </ListGroup.Item>
                                    
                                    <ListGroup.Item>
                                        <Button href="https://www.forbes.com/advisor/investing/what-is-cryptocurrency/" variant="link" target="_blank">
                                            Forbes</Button>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Button href="https://blockgeeks.com/guides/what-is-cryptocurrency/" variant="link" target="_blank">
                                            Blockgeeks</Button>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Button href="https://www.simplilearn.com/tutorials/blockchain-tutorial/what-is-cryptocurrency" variant="link" target="_blank">
                                            Simplilearn</Button>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Button href="https://time.com/nextadvisor/investing/cryptocurrency/what-is-cryptocurrency/" variant="link" target="_blank">
                                            Time</Button>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Button href="https://www.sofi.com/learn/content/understanding-the-different-types-of-cryptocurrency/" variant="link" target="_blank">
                                            SoFi</Button>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Button href="https://tickertape.tdameritrade.com/trading/bitcoin-cryptocurrency-basics-101-16210" variant="link" target="_blank">
                                            Ticket Tape</Button>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Button href="https://cryptocurrencyfacts.com/" variant="link" target="_blank">
                                            CryptoCurrency Facts</Button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Accordion.Collapse>
                </Card>
            </Accordion>
        </Card>
    )
}