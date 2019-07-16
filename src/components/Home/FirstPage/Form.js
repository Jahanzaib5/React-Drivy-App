import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Form.css';

export default class Example extends React.Component {


  render() {
    return (
      <Form inline onSubmit={this.props.submitData}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input size="lg" name="email" id="exampleEmail" placeholder="Address, Train Staion, Bus...." />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input size="lg"  name="password" id="examplePassword" placeholder="Check In" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input size="lg" name="passworder" id="examplePassword" placeholder="Check Out" />
        </FormGroup>
        <Button color="secondary" size="lg">Search</Button>
      </Form>
    );
  }
}