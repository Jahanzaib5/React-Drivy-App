import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import uno from "./01.JPG";
import jwo from "./02.JPG";

export default class LastCard extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Are you already a professional or want to become one with Drivy?</h1>
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <Card>
              <Image src={uno} height="180" alt="Apple" />
              <Card.Body>
                  <h3>You already run a rental agency, a garage or a car selling business...</h3>
                  <p>and want to optimise your fleet occupancy rates?</p>
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
