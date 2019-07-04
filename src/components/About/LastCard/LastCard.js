import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import uno from "./01.JPG";
import jwo from "./02.JPG";
import './LastCard.css';

export default class LastCard extends Component {
  render() {
    return (
      <Container className='meen'>
        <Row className='gaikondo'>
          <Col>
            <h1>Are you already a professional or want to become one with Drivy?</h1>
          </Col>
        </Row>
        <Row className='belkondo'>
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
                  <h3>You're a proud individual who need some proper living standards...</h3>
                  <p>and want to earn a living managing your own fleet of cars on Drivy?</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
