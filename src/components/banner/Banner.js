import React, {useEffect, useState} from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {ArrowRightCircle, PinMapFill} from 'react-bootstrap-icons';
import headerImage from '../../assets/img/header-img.svg';
import './Banner.css';
import {useNavigate} from 'react-router-dom';

const Banner = () =>{
    const [rotationNum, setRotationNum] = useState(0);
    const [isDeletingWord, setIsDeletingWord] = useState(false);
    const [delta, setDelta] = useState(150);
    const toRotate = ["Full Stack Developer", "Entrepreneur", "Biomedical Engineering Student"];
    const [currentLetter, setCurrentLetter] = useState('');
    const period = 2000;
    const navigate = useNavigate();


    useEffect(() =>{
       const ticker = setInterval(() =>{
          tick();
       }, delta);

       return () =>{
           clearInterval(ticker);
       }
    }, [currentLetter]);

    const tick = () =>{
        let i = rotationNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeletingWord ? fullText.substring(0, currentLetter.length - 1) : fullText.substring(0, currentLetter.length + 1)

        setCurrentLetter(updatedText);

        if(isDeletingWord) {
            setDelta(prevDelta => prevDelta/2);
        }

        if(!isDeletingWord && updatedText === fullText){
            setIsDeletingWord(true);
            setDelta(period);
        }else if(isDeletingWord && updatedText === ""){
            setIsDeletingWord(false);
            setRotationNum(rotationNum + 1);
            setDelta(500);
        }
    }

    const handleConnect = () =>{
        navigate('/contact');
    }

    return (
        <section className="banner">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <div className="animate__animated animate__fadeIn">
                            <span className="tagline"><PinMapFill size={25}/> Waterloo, ON</span>
                            <h1>{`Hi! I'm Gurman...`}</h1>
                            <h1 className="txt-rotate"><span className="wrap">{currentLetter}</span></h1>
                            <p>Clean. Effective. Purposeful. These are the three things that I like to think of when developing code.
                                My names Gurman, and I am currently attending the the University Of Waterloo in my 3B term of Biomedical Engineering. I have completed 4 successful co-op terms and am currently looking for a 8 month co-op position from Jan 2023 - Sep 2023
                            </p>
                            <button onClick={handleConnect}>Let’s Connect <ArrowRightCircle size={25} /></button>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div className="animate__animated animate__zoomIn">
                            <img src={headerImage} alt="Header Img"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;