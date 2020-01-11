import React from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import Row from 'react-bootstrap/Row';

//props: image, caption

function ImageBody(props){
    return (
        <Container fluid={false}>
            <Row className="justify-content-between">
                <Col xs={4}> <Figure>
                    <Figure.Image
                        src={props.image}/>
                    <Figure.Caption>{props.caption}</Figure.Caption>
                    </Figure> 
                </Col>
                <Col xs={7}>
                    <p>{props.text}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default ImageBody;