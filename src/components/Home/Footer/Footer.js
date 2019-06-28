import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "./Footer.css";
import Foot from "./logo.svg";
import Image from "react-bootstrap/Image";
import Drop from "./DropDown";

export default class Footer extends React.Component {
  render() {
    return (
      <Container className="Akheri">
        <Row>
          <Col xs="6" className='kholi'>
            <ul>
              <li>
                <a><Image src={Foot} height="25" alt="Apple" /></a>
              </li>
              <li>
                <a><Drop /></a>
              </li>
              <li>
                <a><p>© Drivy 2010-2019 - All rights reserved</p></a>
              </li>
            </ul>
          </Col>
          <Col xs="6" className='hoski'>
            <ul>
              <li>
                <a href="#"> Terms of service</a>
              </li>
              <li>
                <a href="#">. privacy policy</a>
              </li>
              <li>
                <a href="#">. Cookies</a>
              </li>
              <li>
                <a href="#">. Press</a>
              </li>
              <li>
                <a href="#">. Team</a>
              </li>
              <li>
                <a href="#">. Jobs</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}
