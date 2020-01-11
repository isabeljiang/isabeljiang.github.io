import React from 'react';

function TextBlock (props) {
    return(
        <div className="pl-3 pt-5" style={{maxWidth: "900px"}}>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <p>{props.text2}</p>
        </div>
    );
};

export default TextBlock;