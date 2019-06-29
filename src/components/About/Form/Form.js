import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Row,
  Col
} from "reactstrap";
import "./Form.css";

export default class Forma extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs="6">.col-6</Col>
            <Col xs="6">.col-6</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
