import React, { Component } from "react";
import "./FormU.css";
import palogh from "./pic.JPG";
import { Container } from "reactstrap";
import Image from "react-bootstrap/Image";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import google from "./google.JPG";
import facebook from "./facebook.JPG";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

export default class FormU extends Component {

  
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }} className="asli">
              <Tabs
                className="main-tab"
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
              >
                <Tab className="top-tab" eventKey="home" title="SIGN IN">
                  <div id="sign-in">
                    <h1>Login to your account</h1>
                    <div id="sign-in">
                      <Button outline color="secondary" size="lg" block>
                        <Image src={google} height="32" alt="Apple" />
                      </Button>{" "}
                    </div>
                    <div className="faceb">
                      <Button outline color="secondary" size="lg" block>
                        <Image src={facebook} height="32" alt="Apple" />
                      </Button>{" "}
                    </div>
                    <h4>or</h4>
                    <FormGroup>
                      <Input placeholder="Email" bsSize="lg" type='email' />
                    </FormGroup>
                    <FormGroup>
                      <Input placeholder="Password" bsSize="lg" type='password' />
                    </FormGroup>
                    <h3>
                      <a href="#">Forgotten password</a>
                    </h3>
                    <div className="khan">
                      <Button outline color="secondary" size="lg" block>
                        Sign in
                      </Button>{" "}
                    </div>
                    <h2>
                      Don't have an account?<a href="/contact"> Sign up</a>
                    </h2>
                  </div>
                </Tab>

                <Tab className="top-tab" eventKey="profile" title="SIGN UP">
                  <div id="sign-up">
                    <h1>Create your account</h1>
                    <Button outline color="secondary" size="lg" block>
                      <Image src={google} height="32" alt="Apple" />
                    </Button>{" "}
                    <div className="faceb">
                      <Button outline color="secondary" size="lg" block>
                        <Image src={facebook} height="32" alt="Apple" />
                      </Button>{" "}
                    </div>
                    <h4>or</h4>
                    <FormGroup>
                      <Input placeholder="First Name" bsSize="lg"  type='text'/>
                    </FormGroup>
                    <FormGroup>
                      <Input placeholder="Last Name" bsSize="lg" type='text' />
                    </FormGroup>
                    <FormGroup>
                      <Input placeholder="Email" bsSize="lg" type='email'/>
                    </FormGroup>
                    <FormGroup>
                      <Input placeholder="Password" bsSize="lg" type='password' />
                    </FormGroup>
                    <div className="check-box">
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" /> I agree with the{" "}
                          <a href="#">privacy policy</a>
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" /> I would like to recieve the
                          Drivy news letter and weekly megazine
                        </Label>
                      </FormGroup>
                    </div>
                    <div className="Email">
                      <Button outline color="secondary" size="lg" block>
                        Confirm
                      </Button>{" "}
                    </div>
                    <h2>
                      Already have an account?<a href="#sign-in"> Sign in</a>
                    </h2>
                  </div>
                </Tab>
              </Tabs>
              <hr className="my-2" />
              <Row>
                <Col xs="6">
                  <p>© Drivy 2010-2019 - All rights reserved</p>
                </Col>
                <Col xs="6">
                  <div className="Foot">
                    <ul>
                      <li>
                        <a href="#">.Terms of service </a>
                      </li>
                      <li>
                        <a href="#"> .privacy policy</a>
                      </li>
                      <li>
                        <a href="#"> .cookies</a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
            {/* <Col xs="6">
              <Image src={palogh} height="90" alt="Apple" />
            </Col> */}
          </Row>
        </Container>
      </div>
    );
  }
}
