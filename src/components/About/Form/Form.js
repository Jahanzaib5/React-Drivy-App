import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import "./Form.css";
import Pic from "./01.JPG";
import Image from "react-bootstrap/Image";

export default class Forma extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs="6">
              <h1>This can take you to places</h1>
              <Form>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>Volkswagen</option>
                        <option>Toyota</option>
                        <option>Mercedes</option>
                        <option>Ferrari</option>
                        <option>Buggati</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>Cross Turan</option>
                        <option>Bayern</option>
                        <option>Dortmund</option>
                        <option>Dusseldorf</option>
                        <option>Leningard</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>2019</option>
                        <option>2016</option>
                        <option>2014</option>
                        <option>2015</option>
                        <option>2013</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>10-340 mi</option>
                        <option>267-67 mi</option>
                        <option>321-346- mi</option>
                        <option>401-908 mi</option>
                        <option>520 890 mi</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>London</option>
                        <option>Washigton DC</option>
                        <option>Lords</option>
                        <option>Oval</option>
                        <option>Bermingham</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col xs="6">
              <Image src={Pic} height="500" alt="Apple" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
