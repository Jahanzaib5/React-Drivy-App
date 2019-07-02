import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Pico from './Capture.JPG';
import './LearnMore.css';

export default class LearMore extends Component {
  render() {
    return (
      <div>
        <div className="fifth-page">
          <div className="row konee">
            <div className="col-sm-12 flea">
              <h2>
                All trips are covered by{" "}
                <Image src={Pico} height="40" alt="Apple" />
              </h2>
            </div>
            <div className="col-sm-4">
              <h3>Comprehensive insurance for all trips</h3>
              <p>
                You are automatically covered by comprehensive insurance from
                Allianz, which will replace your own car insurance as soon as a
                Drivy trip starts.
              </p>
            </div>
            <div className="col-sm-4">
              <h3>Assistance in t
                  he event of a breakdown or accident</h3>
              <p>
                24/7 roadside assistance with the AA in case your vehicle breaks
                down and needs to be towed.
              </p>
              <button type="button" className="btn btn-primary btn-lg">
                Learn More
              </button>
            </div>
            <div className="col-sm-4">
              <h3>A dedicated customer service team</h3>
              <p>
                Alongside the 24/7 assistance line, you can contact the customer
                service team Monday to Sunday from 8:00 to 22:00.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
