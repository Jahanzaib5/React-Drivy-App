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
            <Col className='asli' xs="6">
              <Tabs className='main-tab' defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab className='top-tab' eventKey="home" title="SIGN IN">
                  <h1>Login to your account</h1>
                  <Button outline color="secondary" size="lg" block>
                    <Image src={google} height="32" alt="Apple" />
                  </Button>{" "}
                  <div className='faceb'>
                    <Button outline color="secondary" size="lg" block>
                        <Image src={facebook} height="32" alt="Apple" />
                    </Button>{" "}
                  </div>
                  <h4>or</h4>
                  <FormGroup>
                    <Input placeholder="Email" bsSize="lg" />
                  </FormGroup>
                  <FormGroup>
                    <Input placeholder="Password" bsSize="lg" />
                  </FormGroup>
                  <h3>
                    <a href="#">Forgotten password</a>
                  </h3>
                  <Button outline color="secondary" size="lg" block>
                    Sign in
                  </Button>{" "}
                  <h2>
                    Don't have an account?<a href="#">Sign up</a>
                  </h2>
                </Tab>

                <Tab className='top-tab' eventKey="profile" title="SIGN UP">
                  <h1>Create your account</h1>
                  <Button outline color="secondary" size="lg" block>
                    <Image src={google} height="32" alt="Apple" />
                  </Button>{" "}
                  <div className='faceb'>
                    <Button outline color="secondary" size="lg" block>
                        <Image src={facebook} height="32" alt="Apple" />
                    </Button>{" "}
                  </div>
                  <h4>or</h4>
                  <div className='Email'>
                    <Button outline color="secondary" size="lg" block>
                        Sign up with Email
                    </Button>{" "}
                </div>
                  <h2>
                    Already have an account?<a href="#">Sign in</a>
                  </h2>
                </Tab>
              </Tabs>
              <hr className="my-2" />
              <Row>
                <Col xs="6"><p>© Drivy 2010-2019 - All rights reserved</p></Col>
                <Col xs="6">
                    <ul>
                        <li><a href="#">terms of service</a></li>
                        <li><a href="#">privacy policy</a></li>
                        <li><a href="#">cookies</a></li>
                    </ul>
                </Col>
              </Row>
            </Col>
            <Col xs="6">
              <Image src={palogh} height="90%" alt="Apple" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
