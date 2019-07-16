import React, { Component } from "react";
import Form from './InputForm';


export default class App extends Component {

  getData = async e => {
    e.preventDefault();
    const identity = e.target.elements.identity.value;
    const password = e.target.elements.password.value;
    console.log(identity);
    console.log(password);

    const api_call = await fetch("http://www.passenger.pk/api/user/login"
    );

    const data = await api_call.json();

    if (identity && password) {
      console.log(data);
    } else {
        console.log('error occured');
    }
  };
  render() {
    return (
      <div>
        <div>
          <div className="wrapper">
            <div className="main">
              <div className="container">
                <div className="row">
                  <div className="col-xs-5 title-container">
                  </div>
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
