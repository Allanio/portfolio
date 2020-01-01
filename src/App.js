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
      title: "Allan Kadhem ",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "CV", path: "/cv" },
        { title: "Projects", path: "/projects" },
        { title: "Contact", path: "/contact" }
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
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/cv">
                  CV
                </Link>
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route
            path="/"
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
            path="/cv"
            render={() => <CV title={this.state.cv.title} /> } />
          <Route
            path="/projects"
            render={() => <Projects title={this.state.projects.title} /> } />
          <Route
            path="/contact"
            render={() => <Contact title={this.state.contact.title} /> } />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
