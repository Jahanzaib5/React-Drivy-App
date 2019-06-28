import React from "react";
import "./Play.css";
import { Container, Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHouse } from "@fortawesome/free-solid-svg-icons";

export default class Play extends React.Component {
  render() {
    return (
      <div className="Awelo-page">
        <Container>
          <Row className="kenu">
            <Col sm="10" className="kono">
              <h2>Get going in a few taps with the app</h2>
              <Button outline color="secondary">
                <a href="https://itunes.apple.com/GB/app/drivy/id492238016?mt=8&l=en">
                  App Store
                </a>
              </Button>{" "}

              <Button outline color="secondary"><a href="https://play.google.com/store/apps/details?id=com.c4mprod.voiturelib&hl=en">
                  Play Store
                </a></Button>{' '}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
