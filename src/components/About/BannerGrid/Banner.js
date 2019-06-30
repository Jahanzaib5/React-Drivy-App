import React, { Component } from "react";
import "./Banner.css";
import { Container, Row, Col } from "reactstrap";
import Image from "react-bootstrap/Image";
import kool from './01.JPG';

export default class Banner extends Component {
  render() {
    return (
      <div className="Ban">
        <Container>
          <Row className='node'>
            <Col xs="3">
                <h3>2.5 million</h3>
                <p>Users in Europe</p>
            </Col>
            <Col xs="3">
                <h3>85.1 million</h3>
                <p>Miles driven/year</p>
            </Col>
            <Col xs="3">
                <h3>24/7</h3>
                <p>Customer service</p>
            </Col>
            <Col xs="3">
                <Image src={kool} height="35" alt="Apple" />
                <p>Comprehensive coverage</p>
            </Col>
                
          </Row>
        </Container>
      </div>
    );
  }
}
