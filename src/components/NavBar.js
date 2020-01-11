import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function NavBar() {
    return (
        <div className="NavBar">
            <ul>
                <li><Route to="/">work</Route></li>
                <li><Route to="/about">about</Route></li>
            </ul>
        </div>
    )
}

export default NavBar;