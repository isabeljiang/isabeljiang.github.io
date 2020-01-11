import React from 'react';
import stitched from '../assets/images/stitched.png';
import employee from '../assets/images/employee.png';
import scoots from '../assets/images/scoots.png';

import Card from './ProjectCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            items: [
                {
                id: 0,
                title: 'HCSS Employee App',
                subtitle: 'a mobile app for construction employees',
                imgSrc: employee,
                link: 'https://facebook.com',
                selected: false
                },
                {
                    id: 1,
                    title: 'Stitched',
                    subtitle: 'a web browser plug-in for organizing events',
                    imgSrc: stitched,
                    link: 'https://instagram.com',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Scoots',
                    subtitle: 'a plant-based footwear startup',
                    imgSrc: scoots,
                    link: 'https://google.com',
                    selected: false
                },    
            ]
        }
    }


    handleCardClick = (id, card) => {
        console.log(id);

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;
        items.forEach(item =>{
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }


    render () {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;