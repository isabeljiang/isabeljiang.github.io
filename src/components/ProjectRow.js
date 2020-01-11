import React from 'react';
import ProjectCard from './ProjectCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import stitched from '../assets/images/stitched.png';
import employee from '../assets/images/employee.png';
import scoots from '../assets/images/scoots.png';


function ProjectRow(props){
    return (
        <Container fluid={false}>
            <Row className="justify-content-around">
                <Col xs={12} sm={true} md={4}><Link style={{textDecoration: 'none', color: 'black'}} to="/stitched"><ProjectCard image={stitched} 
                    title="Stitched" 
                    subtitle="a web browser plug-in for organizing events" 
                    text="web design"/></Link>
                </Col>
                <Col xs={12} sm={true} md={4}> <ProjectCard image={employee} 
                    title="HCSS Employee App" 
                    subtitle="an iOS/Android app for construction employees" 
                    text="mobile design"/></Col>
                <Col xs={12} sm={true} md={4}><ProjectCard image={scoots} 
                    title="Scoots" 
                    subtitle="a plant-based footwear startup" 
                    text="user research"/></Col>
            </Row>
        </Container>

    )
}

export default ProjectRow;