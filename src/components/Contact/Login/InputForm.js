import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="form-wrapper">
            <h1>Log in</h1>
            <form className="forme" onSubmit={this.props.getData}>
              <div className="firstName">
                <label htmlFor="identity">Identity</label>
                <input type="text" name="identity" placeholder="Identity..." />
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
    );
  }
}
