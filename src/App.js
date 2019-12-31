import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";

import "./App.css";
import Footer from "./comonents/Footer";
import Home from "./pages/Home";
import CV from "./pages/CV";
import About from "./pages/About";
import Contact from "./pages/Contact";

/* function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
} */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "First Name, Last Name",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "CV", path: "/cv" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" }
      ],
      home: {
        title: "This is the Home Page",
        subTitle: "This is the Sub Title",
        someText: "This is some text"
      },
      cv: {
        title: "The boring stuff"
      },
      about: {
        title: "About me"
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
                <Link className="nav-link" to="/about">
                  About
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
                someText={this.state.home.subTitle}
              />
            )}
          />
          <Route
            path="/cv"
            exact
            render={() => <CV title={this.state.cv.title} />}
          />
          <Route
            path="/about"
            exact
            render={() => <About title={this.state.about.title} />}
          />
          <Route
            path="/contact"
            exact
            render={() => <Contact title={this.state.contact.title} />}
          />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
