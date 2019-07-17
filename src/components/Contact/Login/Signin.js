import React, { Component } from "react";

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      identity: null,
      password: null,
      formErrors: {
        identity: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      // var store = `
      //   username : ${this.state.username}
      //   full_name: ${this.state.full_name}
      //   identity: ${this.state.identity}
      //   password: ${this.state.password}
      //   usertype: '3'
      //   api_key: '1234'

      // `;
      // console.log("Valid form");

      var formData = new FormData();
      formData.append("identity", this.state.identity);
      formData.append("password", this.state.password);
      formData.append("api_key", "1234");



      fetch(
        `http://www.passenger.pk/api/user/login`,
        {
          method: "post",
          body: formData
        }
      )
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          console.log("The data", data);
        });

      e.target.elements.identity.value = null;
      e.target.elements.password.value = null;
      this.state.password = null;
      this.state.identity = null;

      

    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "identity":
        formErrors.identity =
          value.length < 4 ? "invalid phone number" : "";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Log-in</h1>
          <form className="forme" onSubmit={this.handleSubmit} noValidate>           
            <div className="email">
              <label htmlFor="identity">Identity</label>
              <input
                className={formErrors.identity.length > 0 ? "error" : null}
                placeholder="identity"
                type="integer"
                name="identity"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.identity.length > 0 && (
                <span className="errorMessage">{formErrors.identity}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
