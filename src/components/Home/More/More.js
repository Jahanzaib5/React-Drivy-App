import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "./More.css";
import long from "./link.png";
import Image from "react-bootstrap/Image";

export default class Moreto extends React.Component {
  render() {
    return (
      <Container className='moko'>
        <Row>
          <Col xs="12">
            <Button outline color="secondary">
              Car hire
            </Button>{" "}
            <Button outline color="secondary">
              Car hire in London
            </Button>{" "}
            <Button outline color="secondary">
              Car hire comparison
            </Button>{" "}
          </Col>
          <Col xs="12" className='banner'>
            <a href="https://www.drivy.co.uk/press">
              <Image src={long} height="35" alt="Apple" />
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}
