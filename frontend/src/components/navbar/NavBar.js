import React, {useState, useEffect} from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import { Github, Envelope, Linkedin } from 'react-bootstrap-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import logo from '../../assets/img/logo.png';
import {NavLink, useNavigate} from "react-router-dom";

const NavBar = () =>{
    const [hasScrolled, setHasScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("home");
    const navigate = useNavigate();

    useEffect(() =>{
        const onScroll = () =>{
            if(window.scrollY > 50) {
                setHasScrolled(true);
            }else{
                setHasScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () =>{
            window.removeEventListener("scroll", onScroll);
        }
    }, []);

    const handleConnect = () =>{
        navigate('/contact');
    }

    return (
        <Navbar expand="lg" className={hasScrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt={"Logo"} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className={"navbar-toggler-icon"}></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to={"/"} className={"navbar-link"}>Home</NavLink>
                        <NavLink to={"projects"} className={"navbar-link"}>Projects</NavLink>
                        <NavLink to={"experiences"} className={"navbar-link"}>Experiences</NavLink>
                        <NavLink to={"contact"} className={"navbar-link"}>Contact</NavLink>
                    </Nav>
                    <span className={"navbar-text"}>
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
                        <button className={"vvd"} onClick={handleConnect}>Let's Connect</button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;