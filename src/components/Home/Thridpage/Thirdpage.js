import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "./Thirdpage.css";
import Peach from "./Capture.JPG";
import Image from "react-bootstrap/Image";

export default class Example extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className='main'>
            <h1>Hey, UK! Your new way to rent a car is here</h1>
          </Col>
        </Row>
        <Row>
          <Col xs="6" className='left-one'>
            <Image src={Peach} height="350" alt="Apple" />
          </Col>
          <Col xs="6" className='right-one'>
            <dl className="dl-horizontal">
              <dt className="col-sm-10">No subscription needed</dt>
              <dd className="col-sm-9">
                Book a car and access it 24/7 with your phone
              </dd>

              <dt className="col-sm-10">From £20 for 4 hours or £27 for a day</dt>
              <dd className="col-sm-9">Rent a car for a few hours or a few days</dd>

              <dt className="col-sm-10">Powered by locals</dt>
              <dd className="col-sm-9">
                Thousands of cars available from people near you
              </dd>

              <Button type="button" className="btn btn-outline-dark btn-lg">See how it works</Button>

            </dl>
          </Col>
        </Row>
      </Container>
    );
  }
}
