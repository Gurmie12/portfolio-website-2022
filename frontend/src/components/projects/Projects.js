import React from 'react';
import {Container, Row} from "react-bootstrap";
import ProjectCard from "./ProjectCard"
import './Projects.css';
import projectsData from './projects.json'

const Projects = () =>{
    return(
        <section className={"projects"}>
            <Container>
                <Row className="align-items-center">
                    {
                        projectsData.projects.map((project, i) =>{
                            return <ProjectCard {...project} key={i}/>
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Projects;