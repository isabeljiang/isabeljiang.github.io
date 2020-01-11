import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer () {
    return (
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-center p-5" >
                    <Col className="p-0 text-muted" md={2} xs={12} >
                        @Isabel Jiang 2020
                    </Col>
                </Row>
            </Container>

        </footer>

    )
}

export default Footer;