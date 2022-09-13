import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../../assets/img/color-sharp.png"
import './skills.css';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Take a moment to look through some of the technical skills I have developed throughout my journey!</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <h5>Node</h5>
                                </div>
                                <div className="item">
                                    <h5>Django</h5>
                                </div>
                                <div className="item">
                                    <h5>C++</h5>
                                </div>
                                <div className="item">
                                    <h5>Redux</h5>
                                </div>
                                <div className="item">
                                    <h5>Javascript</h5>
                                </div>
                                <div className="item">
                                    <h5>Typescript</h5>
                                </div>
                                <div className="item">
                                    <h5>Google Cloud Platform</h5>
                                </div>
                                <div className="item">
                                    <h5>API</h5>
                                </div>
                                <div className="item">
                                    <h5>PostgreSQL</h5>
                                </div>
                                <div className="item">
                                    <h5>Docker</h5>
                                </div>
                                <div className="item">
                                    <h5>SQL</h5>
                                </div>
                            </Carousel>
                            <br />
                            <br />
                            <a className="download-link" href={"./gurman_brar_resume.pdf"} download>Download Resume</a>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}