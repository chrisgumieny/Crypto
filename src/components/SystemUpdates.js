import React, { useRef, useState } from "react"
import { Card, Alert, Button } from "react-bootstrap"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Toast from 'react-bootstrap/Toast'

toast.configure()
export default function SystemUpdates() {

    // May notifications 
    // additions 
    const MayUpdates = () => {
        toast(
            'System Update for May 2021: Users can now register for a Crypto Pro account   ',
            { position: toast.POSITION.BOTTOM_CENTER }
        )
    }


    // June notifications 
    //additions
    const JuneUpdatesOne = () => {
        toast(
            'System Update for June 2021: Educational pages about Cryptocurrency',
            { position: toast.POSITION.BOTTOM_CENTER }
        )
    }

    const JuneUpdatesTwo = () => {
        toast(
            'System Update for June 2021: Users can reset passwords through email',
            { position: toast.POSITION.BOTTOM_CENTER }
        )
    }

    // fixes
    const JuneNotify = () => {
        toast.success(
            'System Fix for June 2021:  Bug in Forgot Password fixed',
            { position: toast.POSITION.BOTTOM_CENTER }
        )
    }



    // July notifications 
    //additions
    const JulyUpdatesZero = () => {
        toast(
            'System Update for July 2021: Help page which includes FAQ  ',
            { position: toast.POSITION.BOTTOM_CENTER }
        )
    }

    const JulyUpdatesOne = () => {
        toast(
            'System Update for July 2021: Users can sign up for subscription service   ',
            { position: toast.POSITION.BOTTOM_CENTER }
        )
    }

    const JulyUpdatesTwo = () => {
        toast(
            'System Update for July 2021: Users can change email and password  ',
            { position: toast.POSITION.BOTTOM_CENTER }
        )
    }

    const JulyUpdatesThree = () => {
        toast(
            'System Update for July 2021: Users can search for Cryptocurrencies  ',
            { position: toast.POSITION.BOTTOM_CENTER }
        )
    }

    //fixes
    const JulyNotify = () => {
        toast.success(
            'System Fix for July 2021: Bug in Deployment fixed ',
            { position: toast.POSITION.BOTTOM_CENTER }
        )
    }



    // upcoming notifications 
    const upcomingNotify = () => {
        toast.info(
            'Future Updates for August 2021: Supporting more cryptocurrencies   ',
            { position: toast.POSITION.BOTTOM_CENTER }
        )
    }

    return (

        <>
            <Card className="mb-5">
                <Card.Header> System Updates</Card.Header>
                <Card.Body>

                    {/* Upcoming Updates*/}
                    <div className="mb-2">
                        <Card >
                            <Card.Header> Upcoming Updates </Card.Header>

                            <Card.Body>

                                <Button variant="primary" onClick={upcomingNotify}>August 2021 </Button>

                            </Card.Body>
                        </Card>
                    </div>


                    {/* Past Updates*/}
                    <Card>
                        <Card.Header> Past Updates </Card.Header>
                        <Card.Body>

                            {/* July2021 updates and fixes*/}
                            <p>  July 2021</p>
                            <Button variant="secondary" onClick={JulyUpdatesZero}> 3.0</Button>{' '}
                            <Button variant="secondary" onClick={JulyUpdatesOne}> 3.1</Button>{' '}
                            <Button variant="secondary" onClick={JulyUpdatesTwo}> 3.2</Button>{' '}
                            <Button variant="secondary" onClick={JulyUpdatesThree}> 3.3</Button>{' '}
                            <Button variant="secondary" onClick={JulyNotify}> 3.4</Button>{' '}
                            <hr />

                            {/* June 2021 updates and fixes*/}
                            <p>  June 2021</p>
                            <Button variant="secondary" onClick={JuneUpdatesOne}> 2.0</Button>{' '}
                            <Button variant="secondary" onClick={JuneUpdatesTwo}> 2.1</Button>{' '}
                            <Button variant="secondary" onClick={JuneNotify}> 2.2</Button>{' '}
                            <hr />

                            {/* May 2021 updates and fixes*/}
                            <p>  May 2021</p>
                            <Button variant="secondary" onClick={MayUpdates}> 1.0</Button>{' '}

                        </Card.Body>
                    </Card>

                </Card.Body>
            </Card>
        </>
    )


}