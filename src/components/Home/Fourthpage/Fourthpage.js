import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import "./Fourthpage.css";
import One from "./01.JPG";
import Two from "./02.JPG";
import Three from "./03.JPG";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default class Fourth extends React.Component {
  render() {
    return (
      <Container className='ultra-main'>
        <Row>
          <Col className="main-one">
            <h2>Last rented on Drivyy</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <CardDeck>
              <Card>
                <Card.Img variant="top" src={One} alt="one-image" />
                <Card.Body>
                  <Card.Title><h3>Citroen C3 UBZ</h3></Card.Title>
                  <Card.Text>
                    <h6>London .2018</h6>
                    <div className="need-one">
                      <p>$26 /day</p>
                    </div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={Two} alt="socond image" />
                <Card.Body>
                  <Card.Title><h3>Seat Mii</h3></Card.Title>
                  <Card.Text>
                    <h6>London .2016</h6>
                    <div className="need-two">
                      <p>$60 /day</p>
                    </div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={Three} alt="third image" />
                <Card.Body>
                  <Card.Title><h3>BMW 3 Series 320</h3></Card.Title>
                  <Card.Text>
                    <h6>London .2015</h6>
                    <div className="need-three">
                      <p>$30 /day</p>
                    </div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Col>
        </Row>
      </Container>
    );
  }
}
