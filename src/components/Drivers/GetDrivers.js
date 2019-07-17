import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";

export default class GetDrivers extends Component {


  state = {
    users: []
  };

  componentDidMount = () => {
    fetch("http://www.passenger.pk/api/driver?api_key=1234")
      .then(res => res.json())
      .then(info => {
        console.log("Data: ", info);
        const users = info.data.items; // []
        this.setState({ users: users});
      })
      .catch(() => {});
  };

  displayUsers = () => {
      return this.state.users.map((element, index, arr) => (
          <img src={element.photo} height='100' alt=''/>
      ));
  };

  render() {

    console.log('State: ', this.state);
    return (
      <div>
        <Container>
            <div>
                {this.displayUsers()}
            </div>
        </Container>
      </div>
    );
  }
}
