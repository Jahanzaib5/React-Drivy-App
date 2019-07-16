import React from 'react';
import Example from './Form';
import './FirstPage.css';


export default class FirstPage extends React.Component {

  submitData = async e => {
    e.preventDefault();
    const address = e.target.elements.email.value;
    const checkin = e.target.elements.password.value;
    const checkout = e.target.elements.passworder.value;


    var store = {
      address,
      checkin,
      checkout
    }

    console.log(store);

    e.target.elements.email.value = null;
    e.target.elements.password.value = null;
    e.target.elements.passworder.value = null;


  }





  render() {
    return (
        <div className="first-page">
            <div className='header'>
                <h1>Cars around you, ready to go</h1>
                <h2>For a spontaneous weeked getaway</h2>
            </div>
            <div className='Form'>
                <Example submitData = {this.submitData} />
            </div>
        </div>
    );
  }
}


