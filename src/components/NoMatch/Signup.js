import React, { Component } from "react";
import "./Signup.css";

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

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      full_name: null,
      phone: null,
      password: null,
      formErrors: {
        username: "",
        full_name: "",
        phone: "",
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
      //   phone: ${this.state.phone}
      //   password: ${this.state.password}
      //   usertype: '3'
      //   api_key: '1234'

      // `;
      // console.log("Valid form");

      var formData = new FormData();
      formData.append("username", this.state.username);
      formData.append("full_name", this.state.full_name);
      formData.append("phone", this.state.phone);
      formData.append("password", this.state.password);
      formData.append("usertype", "3");
      formData.append("api_key", "1234");


      fetch(
        `http://www.passenger.pk/api/user/sign-up`,
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

      e.target.elements.username.value = null;
      e.target.elements.full_name.value = null;
      e.target.elements.phone.value = null;
      e.target.elements.password.value = null;
      this.state.username = null;
      this.state.full_name = null;
      this.state.phone = null;
      this.state.password = null;

      

    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "username":
        formErrors.username =
          value.length < 3 ? "Enter valid username, minimum 3 characaters required" : "";
        break;
      case "full_name":
        formErrors.full_name =
          value.length < 3 ? "Enter valid name, minimum 3 characaters required" : "";
        break;
      case "phone":
        formErrors.phone =
          value.length === 234423423343 ? "invalid phone number" : "";
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
          <h1>Create Account</h1>
          <form className="forme" onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="username">User Name</label>
              <input
                className={formErrors.username.length > 0 ? "error" : null}
                placeholder="User Name"
                type="text"
                name="username"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.username.length > 0 && (
                <span className="errorMessage">{formErrors.username}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="full_name">Full Name</label>
              <input
                className={formErrors.full_name.length > 0 ? "error" : null}
                placeholder="Full Name"
                type="text"
                name="full_name"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.full_name.length > 0 && (
                <span className="errorMessage">{formErrors.full_name}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="phone">Phone</label>
              <input
                className={formErrors.phone.length > 0 ? "error" : null}
                placeholder="phone"
                type="integer"
                name="phone"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.phone.length > 0 && (
                <span className="errorMessage">{formErrors.phone}</span>
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
              <button type="submit">Create Account</button>
              <small> Already Have an Account?</small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
