import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./css/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import Topimg from "./img/top.jpg";

const App = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">Run's Folio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#Works">News</Nav.Link>
                            <Nav.Link href="#about">About Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div
                className="vh-100 d-flex align-items-center "
                style={{
                    backgroundImage: `url(${Topimg})`,
                    backgroundSize: "cover",
                }}
            >
                <div className="headerfont">
                    <p>TAKERU</p>
                    <p>IWAKI</p>
                </div>
            </div>
            <div className="vh-100 content-container keyconcept text-center">
                <p className="content-title">KEY CONCEPT</p>
            </div>
            <div className="vh-100 content-container mywork text-center">
                <p className="content-title">KEY CONCEPT</p>
            </div>
            <div className="vh-100 content-container keyconcept text-center">
                <p className="content-title">KEY CONCEPT</p>
            </div>
        </>
    );
};

export default App;
