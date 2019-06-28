import React from 'react';
import Example from './Form';
import './FirstPage.css';


export default class FirstPage extends React.Component {
  render() {
    return (
        <div className="first-page">
            <div className='header'>
                <h1>Cars around you, ready to go</h1>
                <h2>For a spontaneous weeked getaway</h2>
            </div>
            <div className='Form'>
                <Example />
            </div>
        </div>
    );
  }
}


