import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import ProjectRow from '../components/ProjectRow';


function WorkPage(props) {
    return (
        <div>
            <Hero title={props.title} subtitle={props.subtitle} text={props.text}/>
            <ProjectRow/>
            
        </div>
    );
}

export default WorkPage;