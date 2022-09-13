import React, {useState} from 'react';
import './contact.css';
import {Container, Row, Col, Alert} from "react-bootstrap";
import axios from 'axios';
import contactImg from '../../assets/img/contact-img.svg';
import AlertMessage from "./AlertMessage";
const defaultData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
}

const Contact = () =>{
    const [formData, setFormData] = useState(defaultData);
    const [buttonText, setButtonText] = useState("Send!");
    const [status, setStatus] = useState({});

    const updateFromData = (key, value) =>{
        setFormData({...formData, [key]: value});
    }


    const handleSubmit = async (e) =>{
        e.preventDefault();
        setButtonText("Sending...");
        const res = await axios.post('/api/contact', {...formData});
        setButtonText("Send!");
        setFormData(defaultData);
        if(res.data.code === 200){
            setStatus({success: true, message: res.data.status});
        }else{
            setStatus({success: false, message: "Whoops - that shouldn't of happened. Please try again later."});
        }
    }

    return(
        <section className={"contact"}>
            <Container>
                <Row className={"align-items-center"}>
                            <Col size={6} md={6} sm={6} lg={6}>
                                <img src={contactImg} alt={"Contact"} />
                            </Col>
                            <Col size={6} md={6} sm={6} lg={6}>
                                <h2>Get In Touch!</h2>
                                <form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col sm={6} className={"px-1"}>
                                            <input type={"text"} value={formData.firstName} placeholder={"First Name"} onChange={(e) => updateFromData("firstName", e.target.value)} />
                                        </Col>
                                        <Col sm={6} className={"px-1"}>
                                            <input type={"text"} value={formData.lastName} placeholder={"Last Name"} onChange={(e) => updateFromData("lastName", e.target.value)} />
                                        </Col>
                                        <Col sm={6} className={"px-1"}>
                                            <input type={"email"} value={formData.email} placeholder={"Email"} onChange={(e) => updateFromData("email", e.target.value)} />
                                        </Col>
                                        <Col sm={6} className={"px-1"}>
                                            <input type={"tel"} value={formData.phone} placeholder={"Phone Number"} onChange={(e) => updateFromData("phone", e.target.value)} />
                                        </Col>
                                        <Col>
                                            <textarea row={"6"} value={formData.message} placeholder={"Message"} onChange={(e) => updateFromData("message", e.target.value)} />
                                            <button type={"submit"}><span>{buttonText}</span></button>
                                        </Col>
                                    </Row>
                                </form>
                                <Row className={"mt-5"}>
                                    {
                                        status.message &&
                                        <Col className={"px-1"}>
                                            <AlertMessage {...status} setStatus={setStatus}/>
                                        </Col>
                                    }
                                </Row>
                            </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;