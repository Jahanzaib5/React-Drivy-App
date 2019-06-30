import React, { Component } from "react";
import "./Banner.css";
import { Container, Row, Col } from "reactstrap";

export default class Banner extends Component {
  render() {
    return (
      <div className="Ban">
        <Container>
          <Row>
            <Col xs="3">.col-3</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
