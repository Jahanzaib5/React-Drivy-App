import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import './CardBox.css';

export default class CardBox extends Component {
  render() {
    return (
      <Container>
        <div class="second-page">
          <div class="row">
            <div class="root">
              <h1>Two ways to share</h1>
              <p>
                100% flexible: rent how you want, when you want, at the price
                you want{" "}
              </p>
            </div>
            <div class="col-sm-12 loli">
              <div class="card-group">
                <div class="card one">
                  <div class="card-body">
                    <h4 class="card-title">
                      Drivy Open <i class="fas fa-car" />
                    </h4>
                    <p class="card-text">
                      <i class="fas fa-check-circle" />. With the Open device,
                      drivers can book, locate and unlock your car using the
                      Drivy app.
                    </p>
                    <p class="card-text">
                      <i class="fas fa-check-circle" />. We carefully verify each
                      driver's identity so your car always stays in good hands.
                    </p>
                    <p class="card-text">
                      <i class="fas fa-check-circle" />. You earn up to 3x more
                      without having to meet the drivers
                    </p>
                  </div>
                </div>
                <div class="card two">
                  <div class="card-body">
                    <h4 class="card-title">Drivy</h4>
                    <p class="card-text">
                      <i class="fas fa-check-circle" />. With the Open device,
                      drivers can book, locate and unlock your car using the
                      Drivy app.
                    </p>
                    <p class="card-text">
                      <i class="fas fa-check-circle" />. We carefully verify each
                      driver's identity so your car always stays in good hands.
                    </p>
                    <p class="card-text">
                      <i class="fas fa-check-circle" />. You earn up to 3x more
                      without having to meet the drivers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
