import React from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link as Scroll } from "react-scroll";
import Mywork from "./myworks";

import "./css/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import Topimg from "./img/top.jpg";
import quizapp from "./img/quizapp.png";

const App = () => {
    const works = [
        { id: "quiz-app", url: "https://quizapp-frontend-6711cfng2-takeyans-quizapp.vercel.app/", picture: quizapp },
        { id: "quiz-app", url: "quizapp.com", picture: quizapp },
        { id: "quiz-app", url: "quizapp.com", picture: quizapp },
    ];

    return (
        <>
            <header>
                <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
                    <Container>
                        <Navbar.Brand href="#home">
                            <Scroll to="home">Run's Folio</Scroll>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#concept">
                                    <Scroll to="concept">Concept</Scroll>
                                </Nav.Link>
                                <Nav.Link href="#Works">
                                    <Scroll to="works">Works</Scroll>
                                </Nav.Link>
                                <Nav.Link href="#about">
                                    <Scroll to="about">About</Scroll>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <body>
                <div
                    className="vh-100 d-flex align-items-center "
                    style={{
                        backgroundImage: `url(${Topimg})`,
                        backgroundSize: "cover",
                    }}
                    id="home"
                >
                    <div className="headerfont">
                        <p>TAKERU</p>
                        <p>IWAKI</p>
                    </div>
                </div>

                <div className="vh-100 content-container keyconcept text-center" id="concept">
                    <p className="content-title">KEY CONCEPT</p>
                    <div className="mt-5">
                        <p className="fs-1">目の前の人にワクワクを</p>
                        <p className="fs-1">ワクワクで広がる世界</p>
                    </div>
                </div>
                <div className="content-container mywork text-center" id="works">
                    <p className="content-title">MY WORK</p>
                    <Container className="">
                        <Row>
                            {works.map(({ id, url, picture }) => {
                                return <Mywork id={id} url={url} picture={picture} />;
                            })}
                        </Row>
                    </Container>
                </div>
                <div className="vh-100 content-container keyconcept text-center" id="about">
                    <p className="content-title">ABOUT ME</p>
                </div>
            </body>
            <footer className="vh-100 content-container text-center">
                <p className="content-title">Footer</p>
            </footer>
        </>
    );
};

export default App;
