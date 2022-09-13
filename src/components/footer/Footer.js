import React from 'react';
import './footer.css';
import {Container, Row, Col} from "react-bootstrap";
import logo from '../../assets/img/logo.png';
import {Envelope, Github, Linkedin} from "react-bootstrap-icons";

const Footer = () =>{
    return(
        <footer className={"footer"}>
            <Container>
                <Row className={"align-items-center"}>
                    <Col sm={6}>
                        <img src={logo} alt={"Logo"} />
                    </Col>
                    <Col sm={6} className={"text-center text-sm-end"}>
                        <div className={"social-icon"}>
                            <a href={"https://www.linkedin.com/in/gurman-brar-%F0%9F%91%A8%F0%9F%8F%BE%E2%80%8D%F0%9F%92%BB-2866b4193/"}>
                                <Linkedin size={25} className={"icon"}/>
                            </a>
                            <a href={"https://github.com/Gurmie12"}>
                                <Github size={25} className={"icon"}/>
                            </a>
                            <a href={"mailto:g9brar@uwaterloo.ca"}>
                                <Envelope size={25} className={"icon"}/>
                            </a>
                        </div>
                        <p>CopyRight 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;