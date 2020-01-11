import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function IntroSection(props) {
    return (
        <Container fluid={false}>
            <Row className="justify-content-between pb-2 border-bottom">
                <Col sm={12} md={7}>
                <p className="font-weight-bold m-0">Background</p>
                <p>{props.background}</p>
                </Col>
                <Col>
                <p className="font-weight-bold m-0">Role</p>
                <p>{props.role}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default IntroSection;