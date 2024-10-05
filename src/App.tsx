import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link as Scroll } from "react-scroll";
import Mywork from "./myworks";

import "./css/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import Topimg from "./img/top.jpg";
import quizapp from "./img/quizapp.png";
import image from "./img/image.jpeg";
import Yajirushi from "./img/yajirusi.png";

const App = () => {
    const works = [
        { id: "quiz-app", url: "https://quizapp-frontend-6711cfng2-takeyans-quizapp.vercel.app/", picture: quizapp },
        { id: "quiz-app", url: "quizapp.com", picture: quizapp },
        { id: "quiz-app", url: "quizapp.com", picture: quizapp },
    ];

    const Swipe = () => {
        return (
            <div className="d-flex justify-content-center">
                <img src={Yajirushi} style={{ width: 100, height: 100 }} className="yajirushi" />
                <span className="yajirushifont">スワイプ！</span>
            </div>
        );
    };

    return (
        <>
            <header>
                <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
                    <Container>
                        <Navbar.Brand href="#home">
                            <Scroll to="home" smooth={true} duration={200}>
                                Run's Folio
                            </Scroll>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#concept">
                                    <Scroll to="concept" smooth={true} duration={200}>
                                        Concept
                                    </Scroll>
                                </Nav.Link>
                                <Nav.Link href="#Works">
                                    <Scroll to="works" smooth={true} duration={200}>
                                        Works
                                    </Scroll>
                                </Nav.Link>
                                <Nav.Link href="#about">
                                    <Scroll to="about" smooth={true} duration={200}>
                                        About
                                    </Scroll>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <body>
                <div className="scrollsnap">
                    <section
                        className="section d-flex align-items-center "
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
                    </section>

                    <section className="section content-container keyconcept text-center" id="concept">
                        <Swipe />
                        <p className="content-title">KEY CONCEPT</p>
                        <div className="concept-content">
                            <p>目の前の人にワクワクを</p>
                            <p>ワクワクで広がる世界</p>
                        </div>
                    </section>
                    <section className="section content-container mywork text-center" id="works">
                        <Swipe />
                        <p className="content-title">MY WORK</p>

                        <Container className="">
                            <Row>
                                {works.map(({ id, url, picture }) => {
                                    return <Mywork id={id} url={url} picture={picture} />;
                                })}
                            </Row>
                        </Container>
                    </section>
                    <section className="section content-container keyconcept text-center" id="about">
                        <Swipe />
                        <p className="content-title">ABOUT ME</p>
                        <Container>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                    <div
                                        className="picturebox"
                                        style={{
                                            backgroundImage: `url(${image})`,
                                            backgroundSize: "220%",
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "0px -80px",
                                        }}
                                    ></div>
                                </Col>
                                <Col>
                                    <div>
                                        <p className="section-title">name</p>
                                        <p className="content-text">
                                            <ruby>
                                                岩木<rt>いわき</rt>&nbsp;健讓<rt>たける</rt>
                                            </ruby>
                                        </p>
                                        <p className="section-title">career</p>

                                        <div className="container text-center">
                                            <div className="row row-cols-2">
                                                <div className="col">2018~2022</div>
                                                <div className="col">神戸大学国際人間科学部</div>
                                                <div className="col">2022~現在</div>
                                                <div className="col">公立小学校教員</div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>
            </body>
            <footer className="text-center">
                <div className="d-flex justify-content-around pt-5">
                    <span className="fotter-content">
                        Run's
                        <br />
                        Work
                    </span>
                    <div>
                        <ul className="">
                            <li className="d-flex">
                                <Scroll to="home">HOME</Scroll>
                            </li>
                            <li className="d-flex">
                                <Scroll to="concept">CONCEPT</Scroll>
                            </li>
                            <li className="d-flex">
                                <Scroll to="work">WORK</Scroll>
                            </li>
                            <li className="d-flex">
                                <Scroll to="about">ABOUT</Scroll>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default App;
