import React, { Component } from "react";
import Form from "./InputForm";

export default class Final extends Component {
  constructor(props) {
    super(props);

    this.state = {
      identity: null,
      password: null,
    };
  }

  getData = e => {
    e.preventDefault();
    const identity = this.state.identity;
    const password = this.state.password;
    // console.log(this.state.identity);
    // console.log(password);

    var formData = new FormData();
    formData.append("identity", e.target.elements.identity.value);
    formData.append("api_key", "1234");
    formData.append("password", e.target.elements.password.value);

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
                    <div className="wrapper">
                      <div className="form-wrapper">
                        <h1>Log in</h1>
                        <form className="forme" onSubmit={this.getData} noValidate>
                          <div className="firstName">
                            <label htmlFor="identity">Identity</label>
                            <input
                              type="text"
                              name="identity"
                              placeholder="Identity..."
                            />
                          </div>
                          <div className="lastName">
                            <label htmlFor="password">Password</label>
                            <input
                              type="password"
                              name="password"
                              placeholder="Password..."
                            />
                          </div>

                          <div className="createAccount">
                            <button type="submit">Login</button>
                          </div>
                        </form>
                      </div>
                    </div>
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
