import React from "react";
import { Container, Row } from "react-bootstrap";

import Card from "./Card";

import imgCode from "../assets/images/markus-spiske-code.jpg";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "First Project",
          subTitle: "description",
          imgSrc: imgCode,
          link: "/projects",
          selected: false
        },
        {
          id: 1,
          title: "Second Project",
          subTitle: "description",
          imgSrc: imgCode,
          link: "/projects",
          selected: false
        },
        {
          id: 2,
          title: "Third Project",
          subTitle: "description",
          imgSrc: imgCode,
          link: "/projects",
          selected: false
        }
      ]
    };
  }

  handleCardHover = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(items => {
      if (items.id !== id) {
        items.selected = false;
      }
    });

    this.setState({
      items
    });
  };

  makeItems = items => {
    return items.map(item => {
      return (
        <Card
          item={item}
          hover={(event => this.handleCardHover(item.id, event))}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around p-3">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}
export default Carousel;
