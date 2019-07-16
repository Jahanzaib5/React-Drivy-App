import React, { Component } from "react";
import Form from "./InputForm";

export default class Final extends Component {
  getData = async e => {
    e.preventDefault();
    const identity = e.target.elements.identity.value;
    const password = e.target.elements.password.value;
    console.log(identity);
    console.log(password);

    var formData = new FormData();
    formData.append("identity", identity);
    formData.append("api_key", "1234");
    formData.append("password", password);

    fetch(`http://www.passenger.pk/api/user/login`, {
      method: "post",
      body: formData
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log("The data", data);
      });

    e.target.elements.password.value = null;
    e.target.elements.identity.value = null;
  };

  render() {
    return (
      <div>
        <div>
          <div className="wrapper">
            <div className="main">
              <div className="container">
                <div className="row">
                  <div className="col-xs-5 title-container" />
                  <div className="col-xs-7 form-container">
                    <Form getData={this.getData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
