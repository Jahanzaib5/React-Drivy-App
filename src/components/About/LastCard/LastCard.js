import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Card from 'react-bootstrap/Card';
import Image from "react-bootstrap/Image";
import uno from './01.JPG';
import jwo from './02.JPG';

export default class LastCard extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="6">
            <Card>
              <Image src={uno} height="180" alt="Apple" />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="6">
            <Card>
              <Image src={jwo} height="180" alt="Apple" />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
