import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "./Main.css";
import Image from 'react-bootstrap/Image';
import Tong from './01.jpg';
import Pochi from './02.svg';

export default class Mainly extends React.Component {
  render() {
    return (
      <Container className="Mokola">
        <Row className='bee'>
          <Col xs="6">
            <h1>ABOUT</h1>
            <p>
              As the largest car-sharing service in Europe, we’re on a mission
              to bring fresh air to big cities with convenient 24/7 access to
              shared cars nearby. With Drivy, simply book a car, unlock it with
              your phone, and get going.
            </p>
          </Col>
          <Col xs="2" className="listla">
            <h1>FIND OUT MORE</h1>
            <ul>
              <li>
                <a href="#">How does it work</a>
              </li>
              <li>
                <a href="#">A trusted service</a>
              </li>
              <li>
                <a href="#">Help centre</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </Col>
          <Col xs="2" className="listla">
            <h1>EXPLORE</h1>
            <ul>
              <li>
                <a href="#">Insurance</a>
              </li>
              <li>
                <a href="#">Rental agreement</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Professionals</a>
              </li>
              <li>
                <a href="#">Mobile app</a>
              </li>
            </ul>
          </Col>
          <Col xs="2" className="listla">
            <h1>PARTNERS</h1>
            <ul>
              <li>
                <Image src={Tong} height='35' alt='Apple'/>
              </li>
              <li>
                <Image src={Pochi} height='30' alt='Apple'/>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}
