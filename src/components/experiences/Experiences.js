import React from 'react';
import {Accordion, ListGroup} from "react-bootstrap";
import './experiences.css';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import {PersonWorkspace, PencilFill} from "react-bootstrap-icons";
import 'react-vertical-timeline-component/style.min.css';

const experiences = [
    {
        role: "Full Stack Developer",
        title: "SeroTracker",
        date: "June 2022 - Present",
        icon: "work",
        location: "Toronto, ON",
        description: []
    },
    {
        role: "Full Stack Developer",
        title: "DNAstack",
        date: "May 2022 - Sep 2022",
        icon: "work",
        location: "Toronto, ON",
        description: [
            "Planned and contributed to the improvement of data quality and quantity via the development of an ETL pipeline.",
            "Produced complex SQL queries to extract and transform large sets of data in order to increase data quality and meaning for end users.",
            "Worked in a fast-paced startup environment on a small team (3 members), closely collaborating with other engineers to plan solutions to various data extraction and transformation problems.",
            "Configured and deployed various SaaS architecture to Kubernetes clusters locally and in production"
        ]
    },
    {
        role: "Software Developer",
        title: "Ford (Autonomous Vehicles)",
        date: "Sep 2021 - Dec 2021",
        icon: "work",
        location: "Toronto, ON",
        description: [
            "Worked on planning and implementing test-driven production TaaS software solutions for large consumer groups with customer experience and software efficiency in mind.",
            "Developed a single-page React application over the course of 4 months. Planned and documented potential use cases of micro-frontends within the application using single-spa and module federation (Webpack 5).",
            "Used Google Cloud Platform to deploy a React frontend via Docker and Cloud Run.",
            "Explored and implemented ways to reduce page load times such as server side rendering.",
            "Contributed to the development and improvement of a CI/CD pipeline (Harness) for Google Cloud Platform.",
            "Hands-on development of dynamic React application that ingests all content via a headless CMS.",
            "Co-organized and participated in a Ford Pro Hackathon of 50+ participants. Developed an accessibility package to win second place.",
            "Presented a React test-driven development tutorial to a group of 40+ software engineers."
        ]
    },
    {
        role: "Full Stack Developer",
        title: "Altis Labs",
        date: "Jan 2021 - Apr 2021",
        icon: "work",
        location: "Toronto, ON",
        description: [
            "Planned and created dockerized containers for the efficient and effective deployment of API and web services for developers and users.",
            "Planned, created, and improved API features in Node.JS using GraphQL to query a PostgreSQL database.",
            "Assisted in the development of a stand-alone React app that provided a flexible, efficient user interface with features such as graphs, tables, and data conversion algorithms. (Redux, Axios, Node).",
            "Created scripts that simplified, organized and decreased the time required to perform repetitive actions with databases and medical imaging communication services (PACS, DICOM)."
        ]

    },
    {
        role: "Full Stack Software Developer",
        title: "Veer AI",
        date: "June 2020 - Sep 2020",
        icon: "work",
        location: "Toronto, ON",
        description: [
            "Contributed to planning, building, configuring and deploying major pieces of a SaaS product architecture, including APIs and internal authentication mechanisms.",
            "Developed a standalone flexible single-page design user interface using React JS and ES6 JS (React Router, Axios, React Hooks, etc.).",
            "Hands-on with Django-based backend API layer, including Django Rest Framework and JWT authentication.",
            "Learned the fundamentals of working with relational databases (PostgreSQL)."
        ]

    },
    {
        role: "Undergraduate Student (Biomedical Engineering)",
        title: "University of Waterloo",
        date: "Sep 2019 - Present",
        icon: "school",
        location: "Waterloo, ON",
        description: []

    },
    {
        role: "Student",
        title: "Glendale Secondary School",
        date: "Sep 2015 - June 2019",
        icon: "school",
        location: "Hamilton, ON",
        description: []

    },
];

const Experiences = () =>{
    const workIconStyles = {
        background: "black"
    }

    const schoolIconStyles = {
        background: "purple"
    }

    return(
        <section className="experiences">
            <VerticalTimeline>
                {
                    experiences.map((experience, i) =>{
                        const isWorkIcon = experience.icon === "work";
                        return (
                            <VerticalTimelineElement
                            key={i}
                            date={experience.date}
                            dateClassName={"timeline-date"}
                            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                            icon={isWorkIcon ? <PersonWorkspace /> : <PencilFill />}
                            >
                                <h3 className={"vertical-timeline-element-title"}>{experience.title}</h3>
                                <h5 className={"vertical-timeline-element-subtitle"}>{experience.location}</h5>
                                <h5 className={"vertical-timeline-element-subtitle"}>{experience.role}</h5>
                                <p id={"description"}>
                                    {
                                        experience.description.length === 0 ? null :
                                            <Accordion>
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header
                                                        className={"details-header"}>Details</Accordion.Header>
                                                    <Accordion.Body>
                                                        <ListGroup>
                                                            {
                                                                experience.description.map((detail) => {
                                                                    return <ListGroup.Item>{detail}</ListGroup.Item>
                                                                })
                                                            }
                                                        </ListGroup>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                    }
                                </p>
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </section>
    )
}

export default Experiences;