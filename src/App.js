import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Footer from './components/Footer';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Navbar';

import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import StitchedPage from './pages/StitchedPage';
import WorkPage from './pages/WorkPage';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state= {
      title: 'Isabel Jiang',
      headerLinks: [
        {title: 'Work', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'},
        {title: 'Stitched', path: '/stitched'}
      ],
      home: {
        title: 'Hi! I am a UI/UX Designer',
        subtitle: 'experienced in mobile & product design ',
        text: 'Check out my projects below!'
      },
      about: {
        title: 'about me'
      },
      contact: {
        title: 'contact me'
      },
      stitched: {
        title: 'Stitched',
        subtitle: 'A web browser plug-in for organizing events'
      }

    }

  }

  render () {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar sticky="top" className="border-bottom" bg="white" expand="lg">
            <Navbar.Brand>
              <Link style={{textDecoration: "none", color: "black"}} classname="nav-link"
              to="/">Isabel Jiang</Link>
              </Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link style={{textDecoration: "none", color: "black"}} className="nav-link" to="/">work</Link>
                <Link style={{textDecoration: "none", color: "black"}} className="nav-link" to="/about">about</Link>
                <Link style={{textDecoration: "none", color: "black"}} className="nav-link" to="/contact">contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          
          <Route path="/" exact render={() => <WorkPage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text}/> }/>
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title}/>} />
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title}/> }/>
          <Route path="/stitched" exact render={() => <StitchedPage title={this.state.stitched.title} subtitle={this.state.stitched.subtitle}/> }/>


          <Footer />


        </Container>
      
      </Router>
    );
    }
}

export default App;
