import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import './Tab.css';

export default class Tab extends Component {
  render() {
    return (
      <Container>
        <div class="rowe">
          <div class="col-xs-12 tabs">
            <nav>
              <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                <a
                  class="nav-item nav-link active"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  With Drivy Open
                </a>
                <a
                  class="nav-item nav-link"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  With Ultra Drivy
                </a>
              </div>
            </nav>
            <div
              class="tab-content py-3 px-3 px-sm-0 whole"
              id="nav-tabContent"
            >
              <div
                class="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div class="row">
                  <div class="col-sm-12">
                    <div class="row">
                      <div class="col-8 col-sm-6">
                        <video
                          autoplay="autoplay"
                          loop="loop"
                          muted="muted"
                          playsinline="playsinline"
                          poster="https://d2y2masl4rtrav.cloudfront.net/assets/pages/owner_homepage/how_it_works/drivy_open_phone/en@2x-72ecf93b3988c2f162658f57e5c14f7781c8a4899fafdeb3be40a0f3553489fa.png"
                          width="300"
                        >
                          <source
                            src="https://s3-eu-west-1.amazonaws.com/drivy-prod-static/owner_homepage/how_it_works/open/video/vetting_en.mp4"
                            type="video/mp4"
                          />
                        </video>
                        <h2>No meetups? No problem</h2>
                        <p>
                          We verify every driver's official documents and use a
                          100% secure facial recognition system to ensure
                          trustworthy drivers.
                        </p>
                      </div>
                      <div class="col-4 col-sm-6">
                        <h2>No meetups? No problem</h2>
                        <p>
                          We verify every driver's official documents and use a
                          100% secure facial recognition system to ensure
                          trustworthy drivers.
                        </p>
                        <video
                          autoplay="autoplay"
                          loop="loop"
                          muted="muted"
                          playsinline="playsinline"
                          poster="https://d2y2masl4rtrav.cloudfront.net/assets/pages/owner_homepage/how_it_works/drivy_open_phone/walkaround_inspection@2x-6bed88bf530d7baa052373cf2945c7aee613263e32dfe2ebc3931dc206464dc0.png"
                          width="300"
                        >
                          <source
                            src="https://s3-eu-west-1.amazonaws.com/drivy-prod-static/owner_homepage/how_it_works/open/video/walkaround_inspection.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <div class="row">
                  <div class="col-sm-12">
                    <div class="row">
                      <div class="col-8 col-sm-6">
                        <h2>A signed agreement for every rental</h2>
                        <p>
                          You perform the car walkaround with the driver and
                          sign the rental agreement directly in the Drivy app.
                        </p>
                        <video
                          autoplay="autoplay"
                          loop="loop"
                          muted="muted"
                          playsinline="playsinline"
                          poster="https://d2y2masl4rtrav.cloudfront.net/assets/pages/owner_homepage/how_it_works/drivy_open_phone/walkaround_inspection@2x-6bed88bf530d7baa052373cf2945c7aee613263e32dfe2ebc3931dc206464dc0.png"
                          width="300"
                        >
                          <source
                            src="https://s3-eu-west-1.amazonaws.com/drivy-prod-static/owner_homepage/how_it_works/open/video/walkaround_inspection.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                      <div class="col-4 col-sm-6">
                        <video
                          autoplay="autoplay"
                          loop="loop"
                          muted="muted"
                          playsinline="playsinline"
                          poster="https://d2y2masl4rtrav.cloudfront.net/assets/pages/owner_homepage/how_it_works/drivy_open_phone/en@2x-72ecf93b3988c2f162658f57e5c14f7781c8a4899fafdeb3be40a0f3553489fa.png"
                          width="300"
                        >
                          <source
                            src="https://s3-eu-west-1.amazonaws.com/drivy-prod-static/owner_homepage/how_it_works/open/video/vetting_en.mp4"
                            type="video/mp4"
                          />
                        </video>
                        <h2>Meet each driver</h2>
                        <p>
                          You agree on the location and meet drivers at each
                          check-in and check-out.
                        </p>
                      </div>
                    </div>
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
