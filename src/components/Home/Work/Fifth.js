import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "./Fifth.css";
import Image from "react-bootstrap/Image";
import Apricot from "./01.JPG";
import Nuts from './02.JPG';

export default class FifthaPage extends React.Component {
  render() {
    return (
      <Container className='dodo'>
        <Row>
          <Col xs="7" className="left-onee">
            <dl className="dl-horizontal">
              <dd>
                <h1>Own a Car? Put it to work!</h1>
              </dd>
              <dd className="col-sm-9">
                <p>Earn up to £800 per month by sharing your car using Drivy Open.
                All trips are insured by <Image src={Nuts} height="25" alt="Apple" /></p>
              </dd>

              <Button type="button" className="btn btn-outline-dark btn-lg">
                List my Car
              </Button>
            </dl>
          </Col>
          <Col xs="4" className="right-onee">
            <Image src={Apricot} height="350" alt="Apple" />
          </Col>
        </Row>
      </Container>
    );
  }
}
