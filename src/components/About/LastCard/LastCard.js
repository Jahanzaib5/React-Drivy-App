import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Card from 'react-bootstrap/Card';

export default class LastCard extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="6">
            <Card>
              <Card.Img variant="top" src="" />
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
              <Card.Img variant="top" src="holder.js/100px180" />
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
