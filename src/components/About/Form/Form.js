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
import Pic from './01.JPG';
import Image from 'react-bootstrap/Image';

export default class Forma extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs="6">.col-6</Col>
            <Col xs="6">
                <Image src={Pic} height='30' alt='Apple'/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
