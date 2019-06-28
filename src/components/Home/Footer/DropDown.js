import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Drop extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          English
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Urdu</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Russian</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Spanish</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Latin</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}