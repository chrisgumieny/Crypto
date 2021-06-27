import React from "react";
import { Card } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext";

const cryptos = ["Bitcoin", "Etherium", "Dogecoin"]


export const Profile = () => {
    const { currentUser } = useAuth()

    return (
        <Card>
            <Card.Header> Profile</Card.Header>
            <Card.Body>
                <h4 className="div-0">User Email: {currentUser.email}</h4>
            </Card.Body>
        </Card>
    )
}
