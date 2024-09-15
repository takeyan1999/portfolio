import React from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./css/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

type Appprops = {
    id: string;
    url: string;
    picture: any;
};

const Mywork = (props: Appprops) => {
    return (
        <Col className="mt-5">
            <Card style={{ width: "20rem" }} className="mx-auto shadow">
                <Card.Img variant="top" src={props.picture} />
                <Card.Body className="rounded-bottom border">
                    <Card.Title>
                        <p>{props.id}</p>
                    </Card.Title>
                    <Card.Text>
                        <p></p>
                    </Card.Text>
                    <Button variant="primary" href={props.url}>
                        TRY!
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Mywork;
