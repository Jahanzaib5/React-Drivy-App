import React from "react";
import "./SecondPage.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Banana from './01.png';
import Grape from './02.svg';

export default class SecondPage extends React.Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <Row>
            <Col className='left'>
                <h2>Drivy goes global</h2>
                <p>We’ve joined forces with to <Image src={Grape} height='20' alt='Apple'/> take carsharing to the next level.</p>
                <a href="#">Learn more</a>
            </Col>
            <Col className='right'>
                <Image src={Banana} height='250' alt='Apple'/>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}
