import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "react-bootstrap/Image";
import ee from './Capture.JPG';
import juu from './Capture2.JPG';
import troi from './Capture.JPG';
import './Team.css';


export default class Team extends Component {
  render() {
    return (
      <Container>
        <div class="container fourth-page">
        <div class="row">
            <div class="col-sm-12 ko">
                <h2>They are sharing their cars in Drivy</h2>
            </div>

            <div class="card-deck">
                <div class="card">
                    <div class="card-body">

                        <div class="col-sm-12">
                            <div class="row">
                                <div class="col-8 col-sm-6">
                                    <Image src={ee} height="80" alt="Apple" />
                                </div>
                                <div class="col-4 col-sm-6 loco">

                                    <p><i class="fas fa-map-marker-alt"></i> London</p>
                                </div>
                            </div>
                        </div>


                        <h4 class="card-title">Keylor Navas</h4>
                        <a href="#" class="fas fa-star"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>  79</a>
                        <p class="card-text">I've been on Drivy for 6 months now and my Open rentals help finance my car leasing contract and my parking, while still leaving a profit of about £250. I only use my Mini occasionally and use a scooter the rest of the time.</p>
                    </div>
                    <div class="card-footer">
                        <h2><i class="fas fa-car"></i> £650</h2>
                        <p>last month with Open</p>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">

                        <div class="col-sm-12">
                            <div class="row">
                                <div class="col-8 col-sm-6">
                                    <Image src={juu} height="80" alt="Apple" />
                                </div>
                                <div class="col-4 col-sm-6 loco">

                                    <p><i class="fas fa-map-marker-alt"></i> London</p>
                                </div>
                            </div>
                        </div>

                        <h4 class="card-title">Van Dijk</h4>
                        <a href="#" class="fas fa-star"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>  22</a>
                        <p class="card-text">I added a new car a week ago, super easy rentals and fleet management thanks to the Open technology. I am now working full time on Drivy and hope to add another 5 vehicles this year.</p>
                    </div>
                    <div class="card-footer">
                        <h2><i class="fas fa-car"></i> £780</h2>
                        <p>last month with Open</p>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">

                        <div class="col-sm-12">
                            <div class="row">
                                <div class="col-8 col-sm-6">
                                    <Image src={troi} height="80" alt="Apple" />
                                </div>
                                <div class="col-4 col-sm-6 loco">

                                    <p><i class="fas fa-map-marker-alt"></i> London</p>
                                </div>
                            </div>
                        </div>

                        <h4 class="card-title">Natasha Romanov</h4>
                        <a href="#" class="fas fa-star"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>  11</a>
                        <p class="card-text">Very happy with the ease of the app, I am now seeing an increase in my rental requests thanks to previous drivers leaving good reviews for me and my car. It's the best way to earn extra money on the side.</p>
                    </div>
                    <div class="card-footer">
                        <h2><i class="fas fa-car"></i> £899</h2>
                        <p>last month with Open</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
      </Container>
    );
  }
}
