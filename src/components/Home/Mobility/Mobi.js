import React from "react";
import "./Mobi.css";
import { Container, Row, Col, Button } from "reactstrap";

export default class Mobility extends React.Component {
  render() {
    return (
      <div className="Nogh-page">
        <Container>
          <Row>
            <Col className='Mean'>
              <h1>Together, we’re improving mobility in</h1>
              <h2>Madrid</h2>
              <Button color="secondary" size="lg">Discover Now</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
