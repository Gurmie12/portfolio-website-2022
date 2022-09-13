import React from 'react';
import './ProjectCard.css';
import {Badge, Card, Col} from 'react-bootstrap';
import {Github, Globe} from "react-bootstrap-icons";

const ProjectCard = ({title, description, github, website, tags}) =>{

    return(
        <Col size={12} sm={6} md={4}>
            <Card className={"projcard-card"}>
                <Card.Header>
                    <div>
                        {
                            tags.map((tag) =>{
                                return (
                                    <Badge bg={"info"} className={"tag-badge"}>{tag}</Badge>
                                )
                            })
                        }
                    </div>
                </Card.Header>
                <Card.Body className={"proj-txtx"}>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <div className={"link-container"}>
                        {github ? <a href={github} className={"proj-link"}><Github size={25}/></a> : null}
                        {website ? <a href={website} className={"proj-link"}><Globe size={25}/></a> : null}
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProjectCard;