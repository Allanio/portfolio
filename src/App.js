//React Imports
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//Style Imports
import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";
import "./App.css";
//Component Imports
import Footer from "./components/Footer";
//Pages Imports
import Home from "./pages/Home";
import CV from "./pages/CV";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Allan Kadhem",
      headerLinks: [
        { title: "Home", path: "/portfolio/" },
        { title: "CV", path: "/portfolio/cv" },
        { title: "Projects", path: "/portfolio/projects" },
        { title: "Contact", path: "/portfolio/contact" }
      ],
      home: {
        title: "Allan Kadhem",
        subTitle: "Graduate full-stack web developer.",
        someText: "Checkout my latest work"
      },
      cv: {
        title: "The boring stuff"
      },
      projects: {
        title: "My works"
      },
      contact: {
        title: "Let's talk"
      }
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Allan Kadhem</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/portfolio/">
                  Home
                </Link>
                <Link className="nav-link" to="/portfolio/cv">
                  CV
                </Link>
                <Link className="nav-link" to="/portfolio/projects">
                  Projects
                </Link>
                <Link className="nav-link" to="/portfolio/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route
            path="/portfolio/"
            exact
            render={() => (
              <Home
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                someText={this.state.home.someText}
              />
            )}
          />
          <Route 
            path="/portfolio/cv"
            render={() => <CV title={this.state.cv.title} /> } />
          <Route
            path="/portfolio/projects"
            render={() => <Projects title={this.state.projects.title} /> } />
          <Route
            path="/portfolio/contact"
            render={() => <Contact title={this.state.contact.title} /> } />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
