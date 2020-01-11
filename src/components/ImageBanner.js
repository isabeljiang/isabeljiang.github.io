import React from 'react';

import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';



function ImageBanner(props){
    return (
        <Container className="justify-content-center" style={{overflow: "hidden"}}>
            <Figure>
                <Figure.Image
                    fluid 
                    src={props.image}>
                    </Figure.Image>
                <Figure.Caption className="ml-20">{props.caption}</Figure.Caption>
            </Figure>

        </Container>
    );
};
    
export default ImageBanner;