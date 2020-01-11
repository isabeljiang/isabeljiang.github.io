import React from 'react';
import CardInfo from './CardInfo';
import Card from 'react-bootstrap/Card';
import {BrowserRouter as Router, Route, Link} from 'react-router';
import stitched from '../assets/images/stitched.png';
function ProjectCard (props) {
    return (
        <Card className="mg-5" style={{width: '18rem'}}>
            <Card.Img variant="top" src={props.image}/>
            <Card.ImgOverlay>
            <Card.Body>
                <Card.Title className="font-weight-bold" >{props.title}</Card.Title>
                <Card.Subtitle className="font-weight-light">{props.subtitle}</Card.Subtitle>
                <Card.Text className="mb-2 text-muted font-weight-light">{props.text}</Card.Text>
            </Card.Body>
            </Card.ImgOverlay>
        </Card>

    );
}

export default ProjectCard;